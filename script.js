const translations = {
  ar: {
    pageTitle: "كيشيب | تحميل التطبيق",
    eyebrow: "من أرض الحضارة إلى العالم",
    heroTitle: "اكتشف قصة مقتنياتك مع",
    kishib: "كيشيب",
    heroDescription:
      "تطبيق يساعدك على استكشاف التحف والمقتنيات القديمة من خلال الصورة بطريقة واضحة وسريعة.",
    comingSoon: "قريباً",
    availability: "متوفر الآن على Android — نسخة iPhone قريباً",
    stayConnected: "ابقَ على تواصل",
    contactKishib: "تواصل مع كيشيب",
    contactUs: "تواصل معنا",
    information: "المعلومات",
    support: "الدعم الفني",
    website: "الموقع الرسمي",
    copyright: "جميع الحقوق محفوظة"
  },

  en: {
    pageTitle: "KISHIB | Download the App",
    eyebrow: "From the Land of Civilization to the World",
    heroTitle: "Discover the Story of Your Collectibles with",
    kishib: "KISHIB",
    heroDescription:
      "An app that helps you explore antiques and vintage collectibles through an image, clearly and quickly.",
    comingSoon: "Soon",
    availability: "Available now on Android — iPhone version coming soon",
    stayConnected: "Stay Connected",
    contactKishib: "Contact KISHIB",
    contactUs: "Contact Us",
    information: "Information",
    support: "Technical Support",
    website: "Official Website",
    copyright: "All rights reserved"
  },

  ku: {
    pageTitle: "کیشیب | داگرتنی ئەپ",
    eyebrow: "لە خاکی شارستانییەتەوە بۆ جیهان",
    heroTitle: "چیرۆکی کەلوپەلەکانت بدۆزەرەوە لەگەڵ",
    kishib: "کیشیب",
    heroDescription:
      "ئەپێک کە یارمەتیت دەدات کەلوپەلە کۆن و شوێنەوارییەکان لە ڕێگەی وێنەوە بە شێوەیەکی ڕوون و خێرا بناسیتەوە.",
    comingSoon: "بەم زووانە",
    availability:
      "ئێستا بۆ Android بەردەستە — وەشانی iPhone بەم زووانە",
    stayConnected: "لە پەیوەندیدا بە",
    contactKishib: "پەیوەندی بە کیشیبەوە بکە",
    contactUs: "پەیوەندیمان پێوە بکە",
    information: "زانیاری",
    support: "پشتیوانی تەکنیکی",
    website: "ماڵپەڕی فەرمی",
    copyright: "هەموو مافەکان پارێزراون"
  }
};

const languageButtons = document.querySelectorAll(".language-button");
const translatedElements = document.querySelectorAll("[data-i18n]");

function changeLanguage(language) {
  const selectedTranslations = translations[language];

  if (!selectedTranslations) {
    return;
  }

  document.documentElement.lang = language;

  if (language === "en") {
    document.documentElement.dir = "ltr";
  } else {
    document.documentElement.dir = "rtl";
  }

  document.title = selectedTranslations.pageTitle;

  translatedElements.forEach((element) => {
    const translationKey = element.dataset.i18n;
    const translatedText = selectedTranslations[translationKey];

    if (translatedText) {
      element.textContent = translatedText;
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.language === language
    );
  });

  localStorage.setItem("kishib-language", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    changeLanguage(button.dataset.language);
  });
});

const savedLanguage =
  localStorage.getItem("kishib-language") || "ar";

changeLanguage(savedLanguage);

const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}