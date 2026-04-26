"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    "hero.title": "احجز شاليه أحلامك في الساحل الشمالي",
    "hero.subtitle": "أفضل شاليهات قرية غزالة الوادي بأسعار مميزة وتجربة حجز سهلة وسريعة",
    "hero.book_now": "احجز الآن",
    "hero.explore": "استكشف الشاليهات",
    "hero.verified": "وحدات موثقة",
    "hero.secure": "حجز آمن",
    "hero.whatsapp": "دعم واتساب",
    "nav.home": "الرئيسية",
    "nav.chalets": "الشاليهات",
    "nav.pricing": "التسعير",
    "nav.how_it_works": "كيف يعمل",
    "nav.reviews": "آراء العملاء",
    "nav.location": "الموقع",
    "nav.contact": "تواصل معنا",
    "featured.title": "الشاليهات المميزة",
    "featured.subtitle": "اختر من بين أفضل الشاليهات الفاخرة في قرية غزالة الوادي",
    "featured.per_night": "/ ليلة",
    "featured.rooms": "غرف",
    "featured.sea_view": "إطلالة بحر",
    "featured.details": "عرض التفاصيل",
    "why.title": "لماذا Moodstay؟",
    "why.subtitle": "نقدم لك تجربة حجز فريدة تجمع بين الفخامة والسهولة",
    "why.fast_booking": "حجز سريع",
    "why.fast_booking_desc": "احجز شاليهك في دقائق معدودة بدون تعقيد",
    "why.verified": "شاليهات موثقة",
    "why.verified_desc": "جميع الوحدات مفحوصة وموثقة بأعلى معايير الجودة",
    "why.whatsapp": "دعم واتساب مباشر",
    "why.whatsapp_desc": "تواصل معنا مباشرة عبر واتساب للاستفسار والحجز",
    "why.prices": "أفضل الأسعار",
    "why.prices_desc": "أسعار تنافسية مع خصومات حصرية للإقامات الطويلة",
    "pricing.title": "التسعير الذكي",
    "pricing.subtitle": "أسعار مرنة تناسب جميع الميزانيات والمواسم",
    "pricing.weekend": "أسعار الويك إند",
    "pricing.weekend_desc": "عروض خاصة لعطلات نهاية الأسبوع",
    "pricing.season": "أسعار المواسم",
    "pricing.season_desc": "تسعير مخصص حسب موسم الصيف والإجازات",
    "pricing.long_stay": "خصومات الإقامة الطويلة",
    "pricing.long_stay_desc": "وفر حتى 5% عند الحجز لأكثر من 5 ليالٍ",
    "how.title": "كيف يعمل الموقع؟",
    "how.subtitle": "3 خطوات بسيطة لحجز شاليه أحلامك",
    "how.step1": "اختر الشاليه",
    "how.step1_desc": "تصفح مجموعتنا المتنوعة من الشاليهات الفاخرة واختر ما يناسبك",
    "how.step2": "حدد التاريخ",
    "how.step2_desc": "اختر تاريخ الوصول والمغادرة المناسب لك",
    "how.step3": "أكد الحجز",
    "how.step3_desc": "أكد حجزك واستلم تأكيد فوري عبر واتساب أو البريد",
    "reviews.title": "آراء عملائنا",
    "reviews.subtitle": "ماذا يقول ضيوفنا عن تجربتهم مع Moodstay",
    "location.title": "موقعنا",
    "location.subtitle": "قرية غزالة الوادي - الساحل الشمالي الكيلو 142",
    "share.title": "شارك الموقع",
    "share.subtitle": "شارك تجربتك مع أصدقائك وعائلتك",
    "share.copy": "نسخ الرابط",
    "share.copied": "تم النسخ!",
    "cta.title": "جاهز لعطلتك القادمة؟",
    "cta.subtitle": "لا تفوت فرصة الاستمتاع بإجازة فاخرة لا تُنسى",
    "cta.book": "احجز الآن",
    "cta.whatsapp": "تواصل واتساب",
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.contact": "تواصل معنا",
    "lang.ar": "العربية",
    "lang.en": "English",
  },
  en: {
    "hero.title": "Book Your Dream Chalet in North Coast",
    "hero.subtitle": "Best chalets in Ghazala El Wadi Village with special prices and easy booking experience",
    "hero.book_now": "Book Now",
    "hero.explore": "Explore Chalets",
    "hero.verified": "Verified Units",
    "hero.secure": "Secure Booking",
    "hero.whatsapp": "WhatsApp Support",
    "nav.home": "Home",
    "nav.chalets": "Chalets",
    "nav.pricing": "Pricing",
    "nav.how_it_works": "How It Works",
    "nav.reviews": "Reviews",
    "nav.location": "Location",
    "nav.contact": "Contact Us",
    "featured.title": "Featured Chalets",
    "featured.subtitle": "Choose from the best luxury chalets in Ghazala El Wadi Village",
    "featured.per_night": "/ night",
    "featured.rooms": "rooms",
    "featured.sea_view": "Sea View",
    "featured.details": "View Details",
    "why.title": "Why Moodstay?",
    "why.subtitle": "We offer you a unique booking experience combining luxury and ease",
    "why.fast_booking": "Fast Booking",
    "why.fast_booking_desc": "Book your chalet in minutes without complications",
    "why.verified": "Verified Chalets",
    "why.verified_desc": "All units are inspected and verified with highest quality standards",
    "why.whatsapp": "Direct WhatsApp Support",
    "why.whatsapp_desc": "Contact us directly via WhatsApp for inquiries and booking",
    "why.prices": "Best Prices",
    "why.prices_desc": "Competitive prices with exclusive discounts for long stays",
    "pricing.title": "Smart Pricing",
    "pricing.subtitle": "Flexible prices suitable for all budgets and seasons",
    "pricing.weekend": "Weekend Prices",
    "pricing.weekend_desc": "Special offers for weekend getaways",
    "pricing.season": "Season Prices",
    "pricing.season_desc": "Custom pricing based on summer season and holidays",
    "pricing.long_stay": "Long Stay Discounts",
    "pricing.long_stay_desc": "Save up to 5% when booking more than 5 nights",
    "how.title": "How It Works?",
    "how.subtitle": "3 simple steps to book your dream chalet",
    "how.step1": "Choose Your Chalet",
    "how.step1_desc": "Browse our diverse collection of luxury chalets and choose what suits you",
    "how.step2": "Select Dates",
    "how.step2_desc": "Choose your check-in and check-out dates",
    "how.step3": "Confirm Booking",
    "how.step3_desc": "Confirm your booking and receive instant confirmation via WhatsApp or email",
    "reviews.title": "What Our Guests Say",
    "reviews.subtitle": "What our guests say about their experience with Moodstay",
    "location.title": "Our Location",
    "location.subtitle": "Ghazala El Wadi Village - North Coast Km 142",
    "share.title": "Share the Site",
    "share.subtitle": "Share your experience with friends and family",
    "share.copy": "Copy Link",
    "share.copied": "Copied!",
    "cta.title": "Ready for Your Next Vacation?",
    "cta.subtitle": "Don't miss the chance to enjoy an unforgettable luxury vacation",
    "cta.book": "Book Now",
    "cta.whatsapp": "WhatsApp Us",
    "footer.rights": "All rights reserved",
    "footer.contact": "Contact Us",
    "lang.ar": "العربية",
    "lang.en": "English",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "ar",
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("ar");

  const t = (key: string): string => {
    return translations[lang][key as keyof (typeof translations)["ar"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
