/**
 * Format a number as Indian Rupee (INR)
 * @example formatINR(340) => "₹340"
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
