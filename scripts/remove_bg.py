import sys
from PIL import Image
from collections import deque

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    # Find background color by checking the 4 corners
    corners = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]
    bg_colors = [pixels[x, y] for x, y in corners]
    print("Corner colors:", bg_colors)

    # A pixel is considered background if it is very close to white
    def is_white_bg(p):
        r, g, b, a = p
        # Check if nearly white and low saturation
        max_c = max(r, g, b)
        min_c = min(r, g, b)
        return (r >= 242 and g >= 242 and b >= 242) or (r >= 235 and g >= 235 and b >= 235 and (max_c - min_c) <= 12)

    # Queue for BFS flood fill from the borders
    visited = set()
    queue = deque()

    # Add all border pixels that are near-white
    for x in range(width):
        for y in [0, height - 1]:
            if is_white_bg(pixels[x, y]):
                queue.append((x, y))
                visited.add((x, y))

    for y in range(height):
        for x in [0, width - 1]:
            if (x, y) not in visited and is_white_bg(pixels[x, y]):
                queue.append((x, y))
                visited.add((x, y))

    # Also add regions between bottom of oval and tagline if connected to outside
    # BFS flood fill
    while queue:
        cx, cy = queue.popleft()
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < width and 0 <= ny < height:
                if (nx, ny) not in visited:
                    p = pixels[nx, ny]
                    if is_white_bg(p):
                        visited.add((nx, ny))
                        queue.append((nx, ny))

    print(f"Total background pixels identified: {len(visited)} out of {width * height}")

    # Create new image with transparency and anti-aliasing
    out_img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    out_pixels = out_img.load()

    for y in range(height):
        for x in range(width):
            if (x, y) in visited:
                out_pixels[x, y] = (255, 255, 255, 0) # fully transparent
            else:
                p = pixels[x, y]
                # Check distance to visited to feather edges
                r, g, b, a = p
                has_bg_neighbor = any(
                    (x + dx, y + dy) in visited
                    for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]
                    if 0 <= x + dx < width and 0 <= y + dy < height
                )
                if has_bg_neighbor and is_white_bg(p):
                    # Feather semi-transparently
                    out_pixels[x, y] = (r, g, b, 120)
                else:
                    out_pixels[x, y] = p

    # Crop excess transparent borders to make it a tight bounding box
    bbox = out_img.getbbox()
    if bbox:
        # Add a comfortable 10px margin
        margin = 12
        crop_box = (
            max(0, bbox[0] - margin),
            max(0, bbox[1] - margin),
            min(width, bbox[2] + margin),
            min(height, bbox[3] + margin)
        )
        out_img = out_img.crop(crop_box)
        print(f"Cropped to bounding box: {out_img.size}")

    out_img.save(output_path, "PNG")
    print(f"Saved transparent logo to: {output_path}")

if __name__ == "__main__":
    src = "public/logo.png"
    dst = "public/logo.png"
    remove_background(src, dst)
