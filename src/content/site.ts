/**
 * ============================================================================
 * HMR BIRIYANI HUT — CENTRALIZED SITE CONTENT & RESTAURANT CONFIGURATION
 * ============================================================================
 * Location: 5, E Arokiasamy Rd, R.S. Puram, Coimbatore, Tamil Nadu
 * 
 * NOTE TO CLIENT / RESTAURANT OWNER:
 * Attributes marked with [PLACEHOLDER - TO BE VERIFIED] are development
 * placeholders. Please update phone, hours, and verified menu prices before
 * production deployment.
 */

export interface MenuItem {
  id: string;
  nameEn: string;
  nameTa: string;
  category: 'biryani' | 'starters' | 'shawarma' | 'parotta' | 'beverages';
  price: number; // in INR
  descriptionEn: string;
  descriptionTa: string;
  isVegetarian: boolean;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  spiceLevel: 1 | 2 | 3;
  portionEn: string;
  portionTa: string;
  image: string; // references /images/...
  isPricePlaceholder: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  commentEn: string;
  commentTa: string;
  visitType: string;
  isPlaceholder: boolean;
}

export const SITE_CONFIG = {
  restaurant: {
    name: "HMR Biriyani Hut",
    nameTamil: "HMR பிரியாணி ஹட்",
    tagline: "Multi Cuisine Family Restaurant",
    taglineTamil: "மல்டி குசின் பேமிலி ரெஸ்டாரண்ட்",
    category: "Biryani restaurant, family dining",
    address: {
      street: "5, E Arokiasamy Rd",
      area: "R.S. Puram",
      city: "Coimbatore",
      state: "Tamil Nadu",
      pincode: "641002",
      full: "5, E Arokiasamy Rd, R.S. Puram, Coimbatore, Tamil Nadu 641002",
      landmark: "Near Post Office Rd, R.S. Puram"
    },
    coordinates: {
      lat: 11.0094,
      lng: 76.9515
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4868018698184!2d76.9493113!3d11.0094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590637c3529f%3A0xb35f29910a30b42c!2sE%20Arokiasamy%20Rd%2C%20R.S.%20Puram%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=HMR+Biriyani+Hut+E+Arokiasamy+Rd+RS+Puram+Coimbatore",
    ratings: {
      stars: 4.1,
      reviewCount: 8700,
      badgeText: "4.1★ · 8,700+ Google Reviews",
      isVerified: false // Reference data to be confirmed with official profile
    },
    priceRange: {
      display: "₹200–₹400 per person",
      min: 200,
      max: 400
    },
    contact: {
      // [PLACEHOLDER - UPDATE WITH RESTAURANT OFFICIAL NUMBER]
      phoneDisplay: "+91 98422 12345",
      phoneDial: "+919842212345",
      whatsappNumber: "919842212345",
      email: "contact@hmrbiriyanihut.com",
      isPlaceholder: true
    },
    hours: {
      // [PLACEHOLDER - UPDATE WITH OFFICIAL HOURS]
      display: "11:30 AM – 11:00 PM (All 7 Days)",
      weekdays: "11:30 AM – 11:00 PM",
      weekends: "11:00 AM – 11:30 PM",
      isPlaceholder: true
    },
    servingStyle: {
      en: "Dum biryani served piping hot on a fresh green banana leaf with pan-roasted boiled egg, crisp onion raita, and slow-simmered brinjal gravy.",
      ta: "பசுமையான வாழை இலையில் ஆவி பறக்கும் தம் பிரியாணி, மசாலா அவித்த முட்டை, தயிர் வெங்காய பச்சடி மற்றும் கத்திரிக்காய் தால்ச்சாவுடன் பாரம்பரிய பரிமாறல்."
    }
  },

  // Navigation Links
  navLinks: [
    { id: 'hero', href: '#hero', labelEn: 'Home', labelTa: 'முகப்பு' },
    { id: 'story', href: '#story', labelEn: 'Our Story', labelTa: 'தம் வரலாறு' },
    { id: 'spices', href: '#spices', labelEn: 'Spices', labelTa: 'நறுமணம்' },
    { id: 'banana-leaf', href: '#banana-leaf', labelEn: 'Banana Leaf', labelTa: 'வாழை இலை' },
    { id: 'menu', href: '#menu', labelEn: 'Menu', labelTa: 'உணவுப் பட்டியல்' },
    { id: 'reviews', href: '#reviews', labelEn: 'Reviews', labelTa: 'மதிப்புரைகள்' },
    { id: 'interior', href: '#interior', labelEn: 'Inside HMR', labelTa: 'அரங்கம்' },
    { id: 'bulk', href: '#bulk', labelEn: 'Party Orders', labelTa: 'மொத்த விருந்து' },
    { id: 'visit', href: '#visit', labelEn: 'Visit Us', labelTa: 'முகவரி' },
  ],

  // 3D Dum Process Story Cards
  dumStory: [
    {
      step: "01",
      titleEn: "Marinate with Passion",
      titleTa: "01 · மசாலா ஊறவைத்தல்",
      subtitleEn: "Farm-Fresh Meat & Coastal Spices",
      subtitleTa: "பண்ணை இறைச்சி & செட்டிநாட்டு மசாலா",
      descriptionEn: "Tender meat pieces are immersed in hung curd, freshly ground ginger-garlic, crushed hill chillies, and Coimbatore's traditional roasted spices, resting until every fiber absorbs the essence.",
      descriptionTa: "இறைச்சித் துண்டுகள் நாட்டுத் தயிர், அம்மியில் அரைத்த இஞ்சி-பூண்டு மற்றும் நறுமண மசாலாக்களுடன் கலக்கப்பட்டு சுவை ஊறும் வரை பக்குவமாக வைக்கப்படுகிறது.",
      image: "/images/dum-marinate.webp"
    },
    {
      step: "02",
      titleEn: "Layering the Fragrance",
      titleTa: "02 · அரிசி அடுக்கு முறை",
      subtitleEn: "Seeraga Samba & Golden Ghee",
      subtitleTa: "சீரக சம்பா அரிசி & தூய நெய்",
      descriptionEn: "Aged seeraga samba rice, parboiled in whole spices, is layered gracefully with marinated meat, garden mint, crisp fried onions (birista), and pure cow ghee.",
      descriptionTa: "வாசனைப் பொருட்களுடன் அரைவேக்காடாக சமைக்கப்பட்ட சீரக சம்பா அரிசி, வறுத்த வெங்காயம், புதிய புதினா மற்றும் நெய்யுடன் அடுக்கப்படுகிறது.",
      image: "/images/dum-layer.webp"
    },
    {
      step: "03",
      titleEn: "Dough Seal & Slow Dum",
      titleTa: "03 · மாவு சீல் & மெதுவான தம்",
      subtitleEn: "Trapping the Soul over Embers",
      subtitleTa: "கரியடுப்பு தணலில் நறுமண சீல்",
      descriptionEn: "The heavy copper handi is hermetically sealed with fresh wheat dough. Placed over burning coals and charcoal embers, the gentle pressure locks in pure moisture and incomparable aroma.",
      descriptionTa: "செம்புப் பாத்திரம் கோதுமை மாவினால் காற்றுப்புகாமல் சீல் செய்யப்பட்டு, தணல் அடுப்பில் பக்குவமாக தம் போடப்படுகிறது.",
      image: "/images/dum-seal.webp"
    }
  ],

  // Spice Story Highlights
  spices: [
    {
      nameEn: "Green Cardamom",
      nameTa: "ஏலக்காய்",
      origin: "Western Ghats",
      notesEn: "High floral perfume and lingering gentle sweetness that blossoms as the lid lifts.",
      notesTa: "தம் திறக்கும்போது பரவும் புத்துணர்ச்சியூட்டும் பூவிதழ் நறுமணம்."
    },
    {
      nameEn: "Star Anise",
      nameTa: "அன்னாசிப் பூ",
      origin: "Selected Pods",
      notesEn: "Subtle licorice warmth that gives depth to the rich biryani gravy base.",
      notesTa: "பிரியாணி மசாலாவிற்கு ஆழமான சுவையும் நறுமணமும் தரும் பூ வடிவம்."
    },
    {
      nameEn: "Ceylon Cinnamon",
      nameTa: "சுருள் பட்டை",
      origin: "True Quills",
      notesEn: "Sweet woody warmth without harsh bite, naturally infusing the rice grains.",
      notesTa: "கசப்பற்ற இனிமையான மர நறுமணம், அரிசி மணிகளில் கலக்கிறது."
    },
    {
      nameEn: "Tejpatta Bay Leaf",
      nameTa: "பிரியாணி இலை",
      origin: "Hill Forests",
      notesEn: "Earthy herbal undertones that round out the intense meat and ghee flavors.",
      notesTa: "நெய் மற்றும் இறைச்சியின் சுவையை சமன் செய்யும் மூலிகை இலை."
    },
    {
      nameEn: "Kashmir Saffron",
      nameTa: "குங்குமப்பூ",
      origin: "Pampore Valley",
      notesEn: "Steeped in warm whole milk to bestow royal amber hue and delicate fragrance.",
      notesTa: "பாலில் கரைத்து சேர்க்கப்படும் தங்க நிறமும் அரச நறுமணமும் கொண்ட பூ."
    },
    {
      nameEn: "Seeraga Samba Rice",
      nameTa: "சீரக சம்பா",
      origin: "Tamil Nadu",
      notesEn: "The tiny, fragrant southern grain that absorbs spiced juices without becoming soggy.",
      notesTa: "தென்னிந்தியாவின் பாரம்பரிய நறுமணச் சிற்றுருண்டை அரிசி."
    }
  ],

  // Menu Categories
  categories: [
    { id: 'all', nameEn: 'All Dishes', nameTa: 'அனைத்து உணவுகள்' },
    { id: 'biryani', nameEn: 'Dum Biryani', nameTa: 'தம் பிரியாணி' },
    { id: 'starters', nameEn: 'Starters', nameTa: 'ஸ்டார்ட்டர்ஸ்' },
    { id: 'shawarma', nameEn: 'Shawarma & Grills', nameTa: 'ஷவர்மா & கிரில்' },
    { id: 'parotta', nameEn: 'Parotta & Gravies', nameTa: 'பரோட்டா & குழம்பு' },
    { id: 'beverages', nameEn: 'Beverages', nameTa: 'குளிர்பானங்கள்' }
  ],

  // Menu Items (Realistic prices flagged with isPricePlaceholder for verification)
  menuItems: [
    // BIRYANI
    {
      id: 'chicken-biryani',
      nameEn: 'Signature Chicken Dum Biryani',
      nameTa: 'பாரம்பரிய சிக்கன் தம் பிரியாணி',
      category: 'biryani',
      price: 240,
      descriptionEn: 'Slow-cooked in a sealed handi with tender chicken, seeraga samba rice, ghee and fresh herbs. Served on banana leaf with boiled egg, onion raita & brinjal gravy.',
      descriptionTa: 'சீல் வைக்கப்பட்ட செம்புப் பாத்திரத்தில் சீரக சம்பா அரிசி மற்றும் நாட்டு மசாலாவுடன் வெந்த பிரியாணி. முட்டை, ராய்தா மற்றும் கத்திரிக்காய் குழம்புடன்.',
      isVegetarian: false,
      isBestseller: true,
      spiceLevel: 2,
      portionEn: 'Served on banana leaf with egg & raita',
      portionTa: 'வாழை இலையில் முட்டை & பச்சடியுடன்',
      image: '/images/menu-chicken-biryani.webp',
      isPricePlaceholder: true
    },
    {
      id: 'mutton-biryani',
      nameEn: 'HMR Special Mutton Dum Biryani',
      nameTa: 'HMR சிறப்பு மட்டன் தம் பிரியாணி',
      category: 'biryani',
      price: 340,
      descriptionEn: 'Succulent baby mutton slow-cooked over burning coals with fragrant rice and whole spices. Served with masala egg, raita & rich dalcha.',
      descriptionTa: 'மென்மையான ஆட்டுக்கறி, நறுமண மசாலா மற்றும் நெய்யில் பக்குவமாக சமைக்கப்பட்ட பிரத்யேக மட்டன் பிரியாணி.',
      isVegetarian: false,
      isBestseller: true,
      isChefSpecial: true,
      spiceLevel: 2,
      portionEn: 'Rich handi portion (Serves 1-2)',
      portionTa: '1 பாண்டம் (1-2 நபர்களுக்கு)',
      image: '/images/menu-mutton-biryani.webp',
      isPricePlaceholder: true
    },
    {
      id: 'egg-biryani',
      nameEn: 'Golden Masala Egg Biryani',
      nameTa: 'மசாலா முட்டை தம் பிரியாணி',
      category: 'biryani',
      price: 180,
      descriptionEn: 'Aromatic dum rice layered with two pan-roasted spicy eggs, caramelized onions, and mint. Served with onion raita & brinjal gravy.',
      descriptionTa: 'மசாலா தடவி பொரித்த 2 முட்டைகளுடன் கூடிய சுவையான தம் பிரியாணி சாதம்.',
      isVegetarian: false,
      spiceLevel: 1,
      portionEn: 'Served with 2 Eggs & Gravy',
      portionTa: '2 முட்டைகள் & குழம்புடன்',
      image: '/images/menu-egg-biryani.webp',
      isPricePlaceholder: true
    },
    {
      id: 'veg-biryani',
      nameEn: 'Royal Vegetable Dum Biryani',
      nameTa: 'ராயல் காய்கறி தம் பிரியாணி',
      category: 'biryani',
      price: 170,
      descriptionEn: 'Garden vegetables, green peas, and paneer cubes simmered in whole spices and saffron rice in sealed dum style.',
      descriptionTa: 'புதிய காய்கறிகள், பட்டாணி மற்றும் பன்னீர் துண்டுகள் சேர்ந்த சைவ தம் பிரியாணி.',
      isVegetarian: true,
      spiceLevel: 1,
      portionEn: 'Served with Veg Raita & Salna',
      portionTa: 'வெஜிடபிள் ராய்தா & சால்னாவுடன்',
      image: '/images/menu-veg-biryani.webp',
      isPricePlaceholder: true
    },

    // STARTERS
    {
      id: 'chicken-65',
      nameEn: 'Coimbatore Crispy Chicken 65',
      nameTa: 'கோவை மொறுமொறு சிக்கன் 65',
      category: 'starters',
      price: 210,
      descriptionEn: 'Boneless tender chicken tossed in signature South Indian red spices, crispy curry leaves, and green chillies on a stainless steel plate.',
      descriptionTa: 'கறிவேப்பிலை, பச்சை மிளகாய் மற்றும் சிறப்பு சிவப்பு மசாலாக்களுடன் பொரித்த மொறுமொறு சிக்கன் 65.',
      isVegetarian: false,
      isBestseller: true,
      spiceLevel: 3,
      portionEn: '8-10 Crispy Pieces with Lemon & Onion',
      portionTa: '8-10 துண்டுகள் எலுமிச்சை & வெங்காயத்துடன்',
      image: '/images/menu-chicken-65.webp',
      isPricePlaceholder: true
    },

    // PAROTTA & GRAVIES
    {
      id: 'kerala-parotta',
      nameEn: 'Layered Flaky Parotta with Chicken Salna',
      nameTa: 'அடுக்கு பரோட்டா & நாட்டுக்கோழி சால்னா',
      category: 'parotta',
      price: 130,
      descriptionEn: 'Two freshly beaten, ultra-flaky golden parottas served with a bowl of aromatic, slow-simmered chicken salna gravy.',
      descriptionTa: 'மொறுமொறுப்பான அடுக்கு பரோட்டாக்கள் மற்றும் சுவையான நறுமண சிக்கன் சால்னா.',
      isVegetarian: false,
      isBestseller: true,
      spiceLevel: 2,
      portionEn: '2 Flaky Parottas + Rich Chicken Salna',
      portionTa: '2 பரோட்டா + சிக்கன் சால்னா',
      image: '/images/menu-parotta.webp',
      isPricePlaceholder: true
    },

    // SHAWARMA & GRILLS
    {
      id: 'chicken-shawarma',
      nameEn: 'Classic Rumali Chicken Shawarma',
      nameTa: 'கிளாசிக் ரூமாலி சிக்கன் ஷவர்மா',
      category: 'shawarma',
      price: 140,
      descriptionEn: 'Spit-roasted tender chicken shavings rolled inside soft rumali bread with homemade garlic mayonnaise and pickled vegetables.',
      descriptionTa: 'மென்மையான ரூமாலி ரொட்டியில் சுற்றப்பட்ட கிரில் சிக்கன் மற்றும் பூண்டு மயோனைஸ் ரோல்.',
      isVegetarian: false,
      isBestseller: true,
      spiceLevel: 1,
      portionEn: '1 Jumbo Shawarma Roll Cut in Half',
      portionTa: '1 பெரிய ரோல்',
      image: '/images/menu-shawarma.webp',
      isPricePlaceholder: true
    },

    // BEVERAGES
    {
      id: 'lime-soda',
      nameEn: 'Fresh Mint Lime Soda (Chilled)',
      nameTa: 'புதினா எலுமிச்சை சோடா (குளிர்ந்தது)',
      category: 'beverages',
      price: 50,
      descriptionEn: 'Freshly squeezed Key lime with crushed garden mint, rock salt, and ice-cold sparkling soda in a condensation-kissed tall glass.',
      descriptionTa: 'புதிய எலுமிச்சை பழச்சாறு, புதினா இலைகள் மற்றும் சோடா கலந்த குளுமையான புத்துணர்ச்சி பானம்.',
      isVegetarian: true,
      spiceLevel: 1,
      portionEn: '350ml Tall Chilled Glass',
      portionTa: '350 மிலி கிளாஸ்',
      image: '/images/menu-lime-soda.webp',
      isPricePlaceholder: true
    }
  ] as MenuItem[],

  // Reviews (5 placeholder reviews clearly marked for owner verification)
  reviews: [
    {
      id: 'rev-1',
      author: "Karthik Subramanian",
      rating: 5,
      date: "2 weeks ago",
      commentEn: "Hands down the best mutton biryani in R.S. Puram! The seeraga samba rice cooked in sealed handi was incredibly fragrant and meat was melt-in-mouth tender.",
      commentTa: "ஆர்.எஸ். புரத்தில் சிறந்த மட்டன் பிரியாணி! சீரக சம்பா அரிசி மணம் அருமை, கறி மிகவும் மென்மையாக வெந்திருந்தது.",
      visitType: "Dine-in with Family",
      isPlaceholder: true
    },
    {
      id: 'rev-2',
      author: "Priya Natarajan",
      rating: 5,
      date: "1 month ago",
      commentEn: "The traditional banana leaf serving experience takes it to another level. The brinjal dalcha and onion raita are authentic Coimbatore style. Don't miss their Chicken 65!",
      commentTa: "வாழை இலையில் பரிமாறுவது அருமையான உணர்வு. கத்திரிக்காய் தால்ச்சா மற்றும் சிக்கன் 65 மிகவும் சுவை.",
      visitType: "Dinner",
      isPlaceholder: true
    },
    {
      id: 'rev-3',
      author: "Arun Prakash M",
      rating: 4,
      date: "3 weeks ago",
      commentEn: "Ordered a 25-person bulk handi for a birthday celebration. Delivered steaming hot, sealed with dough, and everyone loved the authentic spices.",
      commentTa: "பிறந்தநாள் விழாவிற்காக மொத்த ஆர்டர் செய்தோம். சூடான தம் பாண்டத்தில் வந்து சேர்ந்தது, அனைவரும் பாராட்டினார்கள்.",
      visitType: "Party Catering",
      isPlaceholder: true
    },
    {
      id: 'rev-4',
      author: "Deepak Sundaram",
      rating: 5,
      date: "Just yesterday",
      commentEn: "Crispy flaky parottas and rich chicken salna after 9 PM is heavenly here. Quick service and genuine hospitality right in the heart of RS Puram.",
      commentTa: "இரவு நேரத்தில் சூடான அடுக்கு பரோட்டாவும் சால்னாவும் அற்புதம். வேகமான சேவை மற்றும் உபசரிப்பு.",
      visitType: "Late Dinner",
      isPlaceholder: true
    },
    {
      id: 'rev-5',
      author: "Ananya Ramesh",
      rating: 4,
      date: "2 months ago",
      commentEn: "Love the shawarma counter and the chilled rose milk after finishing a spicy chicken biryani. Great family ambiance in the AC section.",
      commentTa: "காரசாரமான சிக்கன் பிரியாணிக்கு பிறகு குளிர்ந்த ரோஸ் மில்க் குடிப்பது சுகம். குடும்பத்துடன் வர சிறந்த இடம்.",
      visitType: "Family Lunch",
      isPlaceholder: true
    }
  ]
};
