export type Language = 'en' | 'ta';

export interface Translations {
  nav: {
    home: string;
    story: string;
    spices: string;
    bananaLeaf: string;
    menu: string;
    reviews: string;
    visit: string;
    orderNow: string;
    bulkOrders: string;
  };
  hero: {
    eyebrow: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    supporting: string;
    orderWhatsApp: string;
    viewMenu: string;
    exploreStory: string;
    trustBadge: string;
    handiStatusClosed: string;
    handiStatusOpen: string;
    handiToggleOpen: string;
    handiToggleClose: string;
    dragToRotate: string;
  };
  dumProcess: {
    badge: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  spices: {
    badge: string;
    title: string;
    subtitle: string;
    cardamom: { name: string; desc: string };
    starAnise: { name: string; desc: string };
    cinnamon: { name: string; desc: string };
    bayLeaf: { name: string; desc: string };
    saffron: { name: string; desc: string };
    riceGrain: { name: string; desc: string };
  };
  bananaLeaf: {
    badge: string;
    title: string;
    subtitle: string;
    riceDesc: string;
    eggDesc: string;
    chicken65Desc: string;
    raitaDesc: string;
    dalchaDesc: string;
  };
  menu: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allDishes: string;
    vegOnly: string;
    spicy: string;
    bestseller: string;
    chefSpecial: string;
    addToCart: string;
    added: string;
    portion: string;
    samplePriceNotice: string;
  };
  cart: {
    title: string;
    emptyTitle: string;
    emptySubtitle: string;
    subtotal: string;
    orderViaWhatsApp: string;
    confirmationNote: string;
    clearCart: string;
    itemsCount: string;
  };
  bulk: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    dateLabel: string;
    guestsLabel: string;
    guestsPlaceholder: string;
    dishesLabel: string;
    dishesPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    successMessage: string;
    validationError: string;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    ratingText: string;
    basedOn: string;
    viewGoogleReviews: string;
    unverifiedNotice: string;
  };
  visit: {
    badge: string;
    title: string;
    subtitle: string;
    addressHeading: string;
    hoursHeading: string;
    contactHeading: string;
    getDirections: string;
    callNow: string;
    landmark: string;
  };
  cta: {
    title: string;
    subtitle: string;
    orderWhatsApp: string;
    bulkBooking: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    hours: string;
    location: string;
    copyright: string;
    disclaimer: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      story: "Dum Story",
      spices: "Spices",
      bananaLeaf: "Banana Leaf",
      menu: "Menu",
      reviews: "Reviews",
      visit: "Visit Us",
      orderNow: "Order Now",
      bulkOrders: "Bulk & Catering"
    },
    hero: {
      eyebrow: "HMR BIRIYANI HUT · R.S. PURAM",
      headlinePart1: "Coimbatore's Favourite",
      headlineHighlight: "Dum Biryani",
      headlinePart2: "Crafted to Perfection",
      supporting: "Slow-cooked in sealed copper handis. Infused with aromatic whole spices. Served with pride on fresh banana leaves.",
      orderWhatsApp: "Order on WhatsApp",
      viewMenu: "Explore Menu",
      exploreStory: "The Dum Process",
      trustBadge: "4.1★ · 8,700+ Google Reviews",
      handiStatusClosed: "Sealed Handi · Aroma Locked",
      handiStatusOpen: "Dum Released · Fragrance Alive",
      handiToggleOpen: "Open Dum Pot",
      handiToggleClose: "Re-seal Pot",
      dragToRotate: "Drag to rotate 3D Handi"
    },
    dumProcess: {
      badge: "THE DUM PHILOSOPHY",
      title: "Art of the Sealed Pot",
      subtitle: "How our legendary biryani achieves its world of aroma and flavor through slow, sealed craftsmanship.",
      disclaimer: "*Illustrative brand storytelling. Specific recipe proportions and techniques remain the culinary craft of HMR kitchen masters.",
      step1Title: "01 · Marinate & Rest",
      step1Desc: "Tender cuts of fresh meat are steeped in thick farmhouse curd, stone-ground ginger-garlic, crushed hill chillies, and secret spice blends to let the marinade permeate deep to the bone.",
      step2Title: "02 · Fragrant Rice Layering",
      step2Desc: "Aged seeraga samba & basmati grains, half-cooked in whole aromatic spices, are gently layered with the rich marinated meat, fresh garden mint, coriander leaves, and saffron essence.",
      step3Title: "03 · Seal & Slow Dum",
      step3Desc: "The heavy copper handi is hermetically sealed with soft wheat dough. Slow-cooked over glowing coals so escaping vapor self-bastes every grain in its own concentrated savory steam."
    },
    spices: {
      badge: "WHOLE INGREDIENTS",
      title: "The Symphony of Spices",
      subtitle: "No artificial flavoring. Every pot celebrates carefully sourced whole Indian spices roasted to release rich essential oils.",
      cardamom: {
        name: "Green Cardamom",
        desc: "Fragrant pods harvested from the Western Ghats providing high floral notes and natural sweetness."
      },
      starAnise: {
        name: "Star Anise",
        desc: "Eight-pointed spice releasing deep licorice-like warmth that anchors the rich biryani masala."
      },
      cinnamon: {
        name: "Ceylon Cinnamon",
        desc: "Real rolled bark offering sweet, woodsy fragrance without harsh bitterness."
      },
      bayLeaf: {
        name: "Tejpatta (Bay Leaf)",
        desc: "Wild laurel leaves imparting deep herbal aroma as the dum handi simmers slowly."
      },
      saffron: {
        name: "Kashmir Saffron",
        desc: "Golden-red threads soaked in warm milk, giving signature color and royal royal aroma."
      },
      riceGrain: {
        name: "Seeraga Samba & Basmati",
        desc: "Fragrant long-grain rice chosen for maximum fluffiness and ability to absorb savory meat juices."
      }
    },
    bananaLeaf: {
      badge: "THE SACRED TRADITION",
      title: "The Banana Leaf Moment",
      subtitle: "In South Indian culture, biryani reaches its pinnacle when spread across a tender green plantain leaf.",
      riceDesc: "Piping hot fragrant dum biryani, releasing golden vapors.",
      eggDesc: "Hard-boiled egg pan-roasted in rich red biryani masala.",
      chicken65Desc: "Fiery red, crisp-fried Chicken 65 tossed with fresh curry leaves.",
      raitaDesc: "Chilled onion raita with rock salt, green chillies & fresh coriander.",
      dalchaDesc: "Tangy brinjal and lentil gravy simmered in tamarind and South Indian spices."
    },
    menu: {
      badge: "CULINARY REPERTOIRE",
      title: "Explore Our Menu",
      subtitle: "Crafted with passion, fresh ingredients, and authentic regional recipes.",
      searchPlaceholder: "Search biryani, starters, shawarma...",
      allDishes: "All Dishes",
      vegOnly: "Veg Only",
      spicy: "Spicy",
      bestseller: "Bestseller",
      chefSpecial: "Chef's Special",
      addToCart: "Add to Order",
      added: "Added ✓",
      portion: "Portion",
      samplePriceNotice: "*Sample pricing displayed for development. Final prices to be confirmed upon order."
    },
    cart: {
      title: "Your Order Bag",
      emptyTitle: "Your bag is empty",
      emptySubtitle: "Browse our menu and pick your favourite biryanis, starters, and coolers.",
      subtotal: "Subtotal",
      orderViaWhatsApp: "Send Order to WhatsApp",
      confirmationNote: "Note: WhatsApp orders require restaurant confirmation before preparation.",
      clearCart: "Clear Bag",
      itemsCount: "items"
    },
    bulk: {
      badge: "CATERING & CELEBRATIONS",
      title: "Bulk & Party Catering",
      subtitle: "Hosting a family get-together, office party, or wedding? Let HMR cater authentic handi biryani to your guests.",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. Ramesh Kumar",
      phoneLabel: "WhatsApp / Phone Number",
      phonePlaceholder: "e.g. 98422 12345",
      dateLabel: "Event Date",
      guestsLabel: "Expected Number of Guests",
      guestsPlaceholder: "e.g. 25, 50, 100+",
      dishesLabel: "Preferred Dishes / Requirements",
      dishesPlaceholder: "e.g. 30 Mutton Biryani, 30 Chicken Biryani, Chicken 65, Rose Milk",
      messageLabel: "Special Instructions / Venue Location",
      messagePlaceholder: "Mention venue address or dietary preferences...",
      submitButton: "Send Enquiry via WhatsApp",
      successMessage: "Enquiry prepared! Redirecting to WhatsApp...",
      validationError: "Please fill in all required fields with valid details."
    },
    reviews: {
      badge: "WHAT PATRONS SAY",
      title: "Loved Across Coimbatore",
      subtitle: "With thousands of food lovers dining at our R.S. Puram location, here is what guests cherish most.",
      ratingText: "4.1 Rating",
      basedOn: "Based on 8,700+ Google Reviews",
      viewGoogleReviews: "View All Reviews on Google Maps",
      unverifiedNotice: "*Review highlights represent reference customer feedback pending owner verification."
    },
    visit: {
      badge: "LOCATE OUR HUT",
      title: "Visit Our R.S. Puram Store",
      subtitle: "Experience the warm aroma and welcoming hospitality at our iconic teal-fronted restaurant.",
      addressHeading: "Restaurant Address",
      hoursHeading: "Opening Hours",
      contactHeading: "Direct Contact",
      getDirections: "Get Directions on Google Maps",
      callNow: "Call Restaurant",
      landmark: "5, E Arokiasamy Road, R.S. Puram (Near Post Office Jn), Coimbatore"
    },
    cta: {
      title: "Hungry for Authentic Dum Biryani?",
      subtitle: "Fresh batches are cooking right now in our sealed handis. Order direct or dine in with your family.",
      orderWhatsApp: "Order Directly on WhatsApp",
      bulkBooking: "Book Bulk / Event Catering"
    },
    footer: {
      tagline: "Multi Cuisine Family Restaurant · Coimbatore's Signature Dum Biryani Destination.",
      quickLinks: "Quick Navigation",
      hours: "Kitchen Hours",
      location: "Our Location",
      copyright: "All rights reserved. HMR Biriyani Hut, Coimbatore.",
      disclaimer: "Menu items, pricing, facilities and ratings subject to confirmation."
    }
  },
  ta: {
    nav: {
      home: "முகப்பு",
      story: "தம் வரலாறு",
      spices: "நறுமணப் பொருட்கள்",
      bananaLeaf: "வாழை இலை",
      menu: "உணவுப் பட்டியல்",
      reviews: "மதிப்புரைகள்",
      visit: "எங்களை சந்திக்க",
      orderNow: "ஆர்டர் செய்ய",
      bulkOrders: "மொத்த விருந்து"
    },
    hero: {
      eyebrow: "HMR பிரியாணி ஹட் · ஆர்.எஸ். புரம்",
      headlinePart1: "கோவையின் விருப்பமான",
      headlineHighlight: "தம் பிரியாணி",
      headlinePart2: "நிகரற்ற சுவையில்",
      supporting: "சீல் வைக்கப்பட்ட செம்புப் பாத்திரங்களில் பக்குவமாக சமைக்கப்பட்ட பிரியாணி. பசுமையான வாழை இலையில் மணமணக்கும் விருந்து.",
      orderWhatsApp: "வாட்ஸ்அப்பில் ஆர்டர் செய்ய",
      viewMenu: "மெனு பார்க்க",
      exploreStory: "தம் சமையல் முறை",
      trustBadge: "4.1★ · 8,700+ கூகுள் மதிப்புரைகள்",
      handiStatusClosed: "தம் பாத்திரம் மூடப்பட்டுள்ளது · மணம் அடங்கியுள்ளது",
      handiStatusOpen: "தம் திறக்கப்பட்டது · நறுமணம் பரவுகிறது",
      handiToggleOpen: "தம் பாண்டத்தை திறக்க",
      handiToggleClose: "பாண்டத்தை மூட",
      dragToRotate: "சுழற்றி பார்க்க இழுக்கவும்"
    },
    dumProcess: {
      badge: "பாரம்பரிய தத்துவம்",
      title: "மூடப்பட்ட பாண்டத்தின் ரகசியம்",
      subtitle: "எங்கள் பிரியாணி எவ்வாறு தனித்துவமான சுவையையும் நறுமணத்தையும் பெறுகிறது என்பதன் பாரம்பரிய விளக்கம்.",
      disclaimer: "*விளக்க உரை மட்டுமே. துல்லியமான அளவுகள் மற்றும் செய்முறைகள் HMR சமையல் கலைஞர்களின் தனித்துவம் வாய்ந்தவை.",
      step1Title: "01 · ஊறவைத்தல்",
      step1Desc: "புதிய இறைச்சித் துண்டுகள் நாட்டுத் தயிர், இஞ்சி-பூண்டு விழுது, மலை மிளகாய் மற்றும் நறுமணப் பொருட்களுடன் நன்றாக ஊறவைக்கப்படுகிறது.",
      step2Title: "02 · அரிசி அடுக்கு முறை",
      step2Desc: "முழு நறுமண மசாலாக்களுடன் அரைவேக்காடாக சமைக்கப்பட்ட சீரக சம்பா அரிசி, புதினா, கொத்தமல்லி மற்றும் குங்குமப்பூ பாலுடன் அடுக்கப்படுகிறது.",
      step3Title: "03 · சீல் & மெதுவான தம்",
      step3Desc: "கோதுமை மாவினால் பாத்திரத்தின் விளிம்பு காற்றுப்புகாமல் சீல் செய்யப்பட்டு, எரியும் தணலில் பக்குவமாக வேகவைக்கப்படுகிறது."
    },
    spices: {
      badge: "இயற்கை மூலப் பொருட்கள்",
      title: "நறுமணப் பொருட்களின் சங்கமம்",
      subtitle: "செயற்கை சுவையூட்டிகள் எதுவுமின்றி, வறுத்து அரைத்த முழு மசாலாக்களின் கலவையே எங்கள் பிரியாணியின் ரகசியம்.",
      cardamom: {
        name: "பச்சை ஏலக்காய்",
        desc: "மேற்குத் தொடர்ச்சி மலையிலிருந்து பெறப்படும் உயர்ந்த நறுமணமும் இனிப்புத் தன்மையும் கொண்ட ஏலக்காய்."
      },
      starAnise: {
        name: "அன்னாசிப் பூ",
        desc: "பிரியாணி மசாலாவிற்கு தனித்துவமான கார நறுமணத்தை வழங்கும் எட்டிதழ் அன்னாசிப் பூ."
      },
      cinnamon: {
        name: "இலவங்கப் பட்டை",
        desc: "கசப்புத் தன்மையற்ற இனிமையான மர வாசனை தரும் உண்மையான சுருள் பட்டை."
      },
      bayLeaf: {
        name: "பிரியாணி இலை",
        desc: "பாண்டத்தில் தம் ஏறும்போது ஆழமான மூலிகை வாசனையை வெளிப்படுத்தும் காட்டு இலை."
      },
      saffron: {
        name: "காஷ்மீர் குங்குமப்பூ",
        desc: "வெதுவெதுப்பான பாலில் ஊறவைத்து சேர்க்கப்படும் தங்க நிறமும் அரச நறுமணமும் தரும் குங்குமப்பூ."
      },
      riceGrain: {
        name: "சீரக சம்பா அரிசி",
        desc: "மசாலா சாற்றை முழுமையாக உறிஞ்சி தனித்தனி மணிகளாக மலரும் நறுமணச் சீரக சம்பா."
      }
    },
    bananaLeaf: {
      badge: "புனிதமான பாரம்பரியம்",
      title: "வாழை இலை விருந்து தருணம்",
      subtitle: "தென்னிந்திய பாரம்பரியத்தில் சுடச்சுட தம் பிரியாணி வாழை இலையில் பரிமாறப்படும்போது சுவை பன்மடங்காகிறது.",
      riceDesc: "ஆவி பறக்கும் நறுமண பிரியாணி சாதம்.",
      eggDesc: "பிரியாணி மசாலா தடவிய அவித்த முட்டை.",
      chicken65Desc: "கறிவேப்பிலை மணத்துடன் கூடிய மொறுமொறுப்பான சிக்கன் 65.",
      raitaDesc: "குளிர்ந்த வெங்காயத் தயிர் பச்சடி.",
      dalchaDesc: "புளிப்பு மற்றும் காரம் கலந்த செட்டிநாட்டு கத்திரிக்காய் தால்ச்சா."
    },
    menu: {
      badge: "சுவை வகைகள்",
      title: "எங்கள் உணவுப் பட்டியல்",
      subtitle: "தரமான பொருட்கள் மற்றும் பாரம்பரிய முறைகளில் தயாரிக்கப்பட்ட உணவு வகைகள்.",
      searchPlaceholder: "பிரியாணி, ஸ்டார்ட்டர்ஸ், ஷவர்மா தேட...",
      allDishes: "அனைத்தும்",
      vegOnly: "சைவம் மட்டும்",
      spicy: "காரமானது",
      bestseller: "அதிகம் விரும்புவது",
      chefSpecial: "செஃப் ஸ்பெஷல்",
      addToCart: "சேர்க்கவும்",
      added: "சேர்க்கப்பட்டது ✓",
      portion: "அளவு",
      samplePriceNotice: "*வளர்ச்சி நோக்கத்திற்கான மாதிரி விலைகள். ஆர்டர் செய்யும்போது உறுதி செய்யப்படும்."
    },
    cart: {
      title: "உங்கள் ஆர்டர் பை",
      emptyTitle: "ஆர்டர் பை காலியாக உள்ளது",
      emptySubtitle: "மெனுவிலிருந்து உங்களுக்குப் பிடித்த பிரியாணி, ஸ்டார்ட்டர்ஸ் மற்றும் பானங்களை தேர்வு செய்யவும்.",
      subtotal: "மொத்தத் தொகை",
      orderViaWhatsApp: "வாட்ஸ்அப் மூலம் ஆர்டர் அனுப்ப",
      confirmationNote: "குறிப்பு: உணவகத்தின் உறுதிப்படுத்தலுக்கு பிறகே உணவு சமைக்கப்படும்.",
      clearCart: "பையை காலி செய்",
      itemsCount: "உணவுகள்"
    },
    bulk: {
      badge: "நிகழ்ச்சி விருந்துகள்",
      title: "மொத்த ஆர்டர் & கேட்டரிங்",
      subtitle: "குடும்ப விழாக்கள், அலுவலக கூட்டங்கள் மற்றும் விசேஷங்களுக்கு சுவையான HMR பிரியாணியை ஆர்டர் செய்யுங்கள்.",
      nameLabel: "உங்கள் பெயர்",
      namePlaceholder: "எ.கா: ரமேஷ் குமார்",
      phoneLabel: "வாட்ஸ்அப் / அலைபேசி எண்",
      phonePlaceholder: "எ.கா: 98422 12345",
      dateLabel: "நிகழ்ச்சி தேதி",
      guestsLabel: "எதிர்பார்க்கப்படும் விருந்தினர்கள்",
      guestsPlaceholder: "எ.கா: 25, 50, 100+",
      dishesLabel: "விருப்பமான உணவுகள்",
      dishesPlaceholder: "எ.கா: 30 மட்டன் பிரியாணி, சிக்கன் 65, ரோஸ் மில்க்",
      messageLabel: "கூடுதல் விவரங்கள் / முகவரி",
      messagePlaceholder: "நிகழ்ச்சி முகவரி அல்லது சிறப்பு தேவைகளை குறிப்பிடவும்...",
      submitButton: "வாட்ஸ்அப் மூலம் அனுப்ப",
      successMessage: "விவரங்கள் தயாராகிவிட்டன! வாட்ஸ்அப்பிற்கு செல்கிறது...",
      validationError: "தயவுசெய்து அனைத்து விவரங்களையும் சரியாக நிரப்பவும்."
    },
    reviews: {
      badge: "வாடிக்கையாளர் கருத்துக்கள்",
      title: "கோவையின் நன்மதிப்பைப் பெற்றது",
      subtitle: "ஆர்.எஸ். புரம் கிளையில் உணவருந்திய ஆயிரக்கணக்கான உணவுப் பிரியர்களின் அன்புப் பகிர்வுகள்.",
      ratingText: "4.1 மதிப்பீடு",
      basedOn: "8,700+ கூகுள் மதிப்புரைகளின் அடிப்படையில்",
      viewGoogleReviews: "கூகுள் மேப்ஸில் அனைத்து மதிப்புரைகளையும் பார்க்க",
      unverifiedNotice: "*உரிமையாளரால் சரிபார்க்கப்பட வேண்டிய மாதிரி வாடிக்கையாளர் கருத்துக்கள்."
    },
    visit: {
      badge: "முகவரி & நேரம்",
      title: "எங்கள் ஆர்.எஸ். புரம் உணவகம்",
      subtitle: "தனித்துவமான வண்ண முகப்பு கொண்ட எங்களின் ஆர்.எஸ். புரம் உணவகத்திற்கு குடும்பத்துடன் வருகை தருக.",
      addressHeading: "உணவக முகவரி",
      hoursHeading: "திறந்திருக்கும் நேரம்",
      contactHeading: "தொடர்பு கொள்ள",
      getDirections: "கூகுள் மேப்ஸில் வழி பார்க்க",
      callNow: "உணவகத்தை அழைக்க",
      landmark: "5, E ஆரோக்கியசாமி சாலை, ஆர்.எஸ். புரம், கோவை (போஸ்ட் ஆபீஸ் அருகில்)"
    },
    cta: {
      title: "சுவையான தம் பிரியாணி சாப்பிட தயாரா?",
      subtitle: "எங்கள் தம் பாண்டங்களில் சுடச்சுட பிரியாணி தயாராகிறது. வாட்ஸ்அப்பில் ஆர்டர் செய்து சுவைத்திடுங்கள்.",
      orderWhatsApp: "வாட்ஸ்அப் மூலம் உடனடியாக ஆர்டர் செய்ய",
      bulkBooking: "மொத்த விருந்து முன்பதிவு செய்ய"
    },
    footer: {
      tagline: "மல்டி குசின் பேமிலி ரெஸ்டாரண்ட் · கோவையின் பாரம்பரிய தம் பிரியாணி மையம்.",
      quickLinks: "முக்கிய இணைப்புகள்",
      hours: "சமையல் நேரம்",
      location: "இருப்பிடம்",
      copyright: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. HMR பிரியாணி ஹட், கோவை.",
      disclaimer: "உணவுகள், விலை மற்றும் விவரங்கள் மாற்றத்திற்கு உட்பட்டவை."
    }
  }
};
