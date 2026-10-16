export interface RestaurantConfig {
  name: string;
  signageTagline: string;
  category: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
    landmark: string;
  };
  coordinates: {
    lat: number;
    lng: number;
    isVerified: boolean;
  };
  contact: {
    phonePlaceholder: string;
    phoneDial: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    emailPlaceholder: string;
    isVerified: boolean;
  };
  businessHours: {
    display: string;
    weekdays: string;
    weekends: string;
    isVerified: boolean;
  };
  pricing: {
    rangeDisplay: string;
    minPerPerson: number;
    maxPerPerson: number;
    currency: string;
    isVerified: boolean;
  };
  ratings: {
    googleRating: number;
    reviewCount: number;
    reviewCountDisplay: string;
    googleMapsUrl: string;
    isVerified: boolean;
  };
  features: Array<{
    id: string;
    titleEn: string;
    titleTa: string;
    descriptionEn: string;
    descriptionTa: string;
    icon: string;
  }>;
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
  };
}

export interface MenuItem {
  id: string;
  nameEn: string;
  nameTa: string;
  category: 'biryani' | 'starters' | 'shawarma' | 'parotta' | 'beverages';
  price: number;
  descriptionEn: string;
  descriptionTa: string;
  isVegetarian: boolean;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  spiceLevel?: 1 | 2 | 3;
  servingPortionEn: string;
  servingPortionTa: string;
  image: string;
  isAvailable: boolean;
  isPriceVerified: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface CustomerReview {
  id: string;
  name: string;
  rating: number;
  date: string;
  commentEn: string;
  commentTa: string;
  visitType: string;
  verifiedLocalGuide?: boolean;
  isPlaceholder: boolean;
}

export interface GalleryImage {
  id: string;
  titleEn: string;
  titleTa: string;
  category: 'biryani' | 'storefront' | 'ambiance' | 'kitchen';
  src: string;
  alt: string;
}
