import { CartItem } from '../hooks/useCart';
import { RESTAURANT_CONFIG } from '../config/restaurant';
import { formatINR } from './pricing';

/**
 * Generate a WhatsApp chat URL with encoded prefilled message
 */
export function createWhatsAppUrl(message: string, customNumber?: string): string {
  const number = customNumber || RESTAURANT_CONFIG.contact.whatsappNumber;
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${number}?text=${encoded}`;
}

/**
 * Generate quick contact WhatsApp link
 */
export function getQuickWhatsAppUrl(): string {
  return createWhatsAppUrl("Hi HMR Biriyani Hut, I would like to enquire about placing an order.");
}

/**
 * Format cart items into a structured WhatsApp message
 */
export function formatCartOrderMessage(items: CartItem[], subtotal: number): string {
  const dateStr = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  let msg = `*🍽️ NEW ORDER ENQUIRY — HMR BIRIYANI HUT*\n`;
  msg += `_Location: R.S. Puram, Coimbatore_\n`;
  msg += `_Time: ${dateStr}_\n`;
  msg += `----------------------------------------\n\n`;
  msg += `*SELECTED ITEMS:*\n`;

  items.forEach((ci, idx) => {
    const itemTotal = ci.item.price * ci.quantity;
    msg += `${idx + 1}. *${ci.item.nameEn}*\n`;
    msg += `   • Qty: ${ci.quantity} × ${formatINR(ci.item.price)} = *${formatINR(itemTotal)}*\n`;
  });

  msg += `\n----------------------------------------\n`;
  msg += `*ESTIMATED SUBTOTAL:* *${formatINR(subtotal)}*\n`;
  msg += `----------------------------------------\n\n`;
  msg += `*Customer Note:* Please confirm current availability, packaging & estimated preparation time for pickup / delivery.\n\n`;
  msg += `_Order submitted via HMR Biriyani Hut official website._`;

  return msg;
}

/**
 * Format bulk catering enquiry into a structured WhatsApp message
 */
export function formatBulkEnquiryMessage(data: {
  name: string;
  phone: string;
  eventDate: string;
  guestCount: string;
  dishes: string;
  message?: string;
}): string {
  let msg = `*🎉 BULK / PARTY ORDER ENQUIRY — HMR BIRIYANI HUT*\n`;
  msg += `_R.S. Puram, Coimbatore_\n`;
  msg += `----------------------------------------\n\n`;
  msg += `*Customer Name:* ${data.name}\n`;
  msg += `*Contact Phone:* ${data.phone}\n`;
  msg += `*Event Date:* ${data.eventDate}\n`;
  msg += `*Expected Guests:* ${data.guestCount}\n\n`;
  msg += `*Requested Dishes / Menu Preferences:*\n${data.dishes}\n\n`;

  if (data.message && data.message.trim().length > 0) {
    msg += `*Special Instructions / Venue:*\n${data.message.trim()}\n\n`;
  }

  msg += `----------------------------------------\n`;
  msg += `Kindly provide a customized quote and handi catering availability.\n`;
  msg += `_Submitted via HMR Biriyani Hut bulk enquiry portal._`;

  return msg;
}
