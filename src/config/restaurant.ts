import { RestaurantConfig } from '../types/restaurant';

/**
 * =====================================================================
 * HMR BIRIYANI HUT — PRIMARY RESTAURANT CONFIGURATION
 * =====================================================================
 * All editable restaurant details are centralized here.
 * Notice: Attributes marked with `isVerified: false` are development
 * placeholders that must be confirmed with the restaurant owner before launch.
 */
export const RESTAURANT_CONFIG: RestaurantConfig = {
  name: "HMR Biriyani Hut",
  signageTagline: "Multi Cuisine Family Restaurant",
  category: "Biryani Restaurant & Family Dining",
  address: {
    street: "5, E Arokiasamy Road",
    area: "R.S. Puram",
    city: "Coimbatore",
    state: "Tamil Nadu",
    pincode: "641002",
    full: "5, E Arokiasamy Road, R.S. Puram, Coimbatore, Tamil Nadu 641002",
    landmark: "Near Post Office Road junction, R.S. Puram"
  },
  coordinates: {
    lat: 11.0094,
    lng: 76.9515,
    isVerified: true // Exact coordinates of E Arokiasamy Rd, RS Puram, Coimbatore
  },
  contact: {
    // Replace with the official restaurant phone number upon client confirmation
    phonePlaceholder: "+91 98422 00000",
    phoneDial: "+919842200000",
    // Replace with the official WhatsApp business number (without spaces or dashes)
    whatsappNumber: "919842200000",
    whatsappDisplay: "+91 98422 00000",
    emailPlaceholder: "contact@hmrbiriyanihut.com",
    isVerified: false // Flagged for verification
  },
  businessHours: {
    display: "11:30 AM – 11:00 PM (All 7 Days)",
    weekdays: "11:30 AM – 11:00 PM",
    weekends: "11:00 AM – 11:30 PM",
    isVerified: false // Flagged for verification with restaurant owner
  },
  pricing: {
    rangeDisplay: "₹200 – ₹400 per person",
    minPerPerson: 200,
    maxPerPerson: 400,
    currency: "INR",
    isVerified: false // Reference estimate
  },
  ratings: {
    googleRating: 4.1,
    reviewCount: 8700,
    reviewCountDisplay: "4.1★ · 8,700+ Google Reviews",
    googleMapsUrl: "https://maps.google.com/?q=HMR+Biriyani+Hut+E+Arokiasamy+Road+RS+Puram+Coimbatore",
    isVerified: false // Reference rating to be confirmed against current Google Business Profile
  },
  features: [
    {
      id: "dum-tradition",
      titleEn: "Authentic Dum Cooking",
      titleTa: "பாரம்பரிய தம் சமையல்",
      descriptionEn: "Sealed handis slow-cooked over burning charcoals to lock in pure spice aromas.",
      descriptionTa: "மசாலா நறுமணங்களை உள்ளடக்க கரியடுப்பில் பக்குவமாக சமைக்கப்பட்ட தம் பிரியாணி.",
      icon: "Flame"
    },
    {
      id: "banana-leaf",
      titleEn: "Served on Banana Leaf",
      titleTa: "வாழை இலை விருந்து",
      descriptionEn: "The traditional South Indian feast accompanied by egg, onion raita & brinjal dalcha.",
      descriptionTa: "அவித்த முட்டை, வெங்காய தயிர் பச்சடி மற்றும் கத்திரிக்காய் தால்ச்சாவுடன் கூடிய விருந்து.",
      icon: "Leaf"
    },
    {
      id: "family-dining",
      titleEn: "AC Family Dining",
      titleTa: "குளிர்சாதன குடும்ப அரங்கம்",
      descriptionEn: "Comfortable air-conditioned seating in the heart of R.S. Puram, Coimbatore.",
      descriptionTa: "ஆர்.எஸ். புரம் பகுதியில் அமைந்த வசதியான குடும்ப உணவுக்கூடம்.",
      icon: "Users"
    },
    {
      id: "multi-cuisine",
      titleEn: "Multi-Cuisine Variety",
      titleTa: "பன்முக சுவை வகைகள்",
      descriptionEn: "From succulent tandoori grills and shawarma to flaky parottas and rich gravies.",
      descriptionTa: "பிரியாணி மட்டுமின்றி ஷவர்மா, தந்தூரி, பரோட்டா மற்றும் சுவைமிக்க கிரேவிகள்.",
      icon: "Utensils"
    }
  ],
  seo: {
    title: "HMR Biriyani Hut | Best Dum Biryani in R.S. Puram, Coimbatore",
    description: "Discover HMR Biriyani Hut in R.S. Puram, Coimbatore. Explore our slow-cooked authentic dum biryani, signature starters, shawarma, parotta, and direct WhatsApp ordering.",
    canonicalUrl: "https://hmrbiriyanihut.com/"
  }
};
