const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const navDropdowns = document.querySelectorAll("[data-nav-dropdown]");
const year = document.querySelector("[data-year]");
const languageToggle = document.querySelector("[data-language-toggle]");

const arabicTranslations = {
  '.site-nav > a[href="#about"]': "من نحن",
  '.site-nav > a[href="#group"]': "المجموعة",
  "[data-nav-business-label]": "الأعمال",
  '.nav-dropdown-menu a[href="#international-trading"]': "التجارة الدولية",
  '.nav-dropdown-menu a[href="#seedi"]': "عمليات القيمة المضافة",
  '.nav-dropdown-menu a[href="#construction-materials"]': "مواد البناء",
  '.site-nav > a[href="#ceo"]': "رسالة ترحيب",
  '.site-nav > a[href="#contact"]': "تواصل معنا",
  ".hero-content h1": "جيمونا للتجارة والاستثمار",
  ".hero-content > p": "نبني أعمالنا على الثقة وتقودنا الشراكات. شركة مساهمة مصرية تربط بين مرونة الإمداد وانضباط التوزيع والثقة المؤسسية طويلة الأجل.",
  ".about .section-kicker": "عن جيمونا",
  ".about h2": "هدف في كل منتج. ونزاهة في كل شراكة.",
  ".about-heading > p": "تأسست جيمونا وفقًا لقوانين جمهورية مصر العربية كشركة مساهمة مصرية تخدم قطاعات السلع الزراعية والسلع الاستهلاكية سريعة التداول من خلال قنوات التجارة الدولية وعمليات القيمة المضافة، مع قدرات متنامية في مواد البناء. نربط الشبكات الدولية بالسوق المصري لبناء سلاسل إمداد موثوقة وقيمة مستدامة.",
  ".vision-card .section-kicker": "رؤيتنا",
  ".vision-card > p:last-child": "أن نحلم بلا حدود، وأن نقدم أعمالنا بالتميز والنزاهة، وأن نصنع قيمة مستدامة لكل منزل وشركة ومشروع نصل إليه.",
  ".mission-card .section-kicker": "رسالتنا",
  ".mission-card > p:last-child": "تقديم منتجات عالية الجودة وحلول مبتكرة في الأغذية والتجارة الدولية ومواد البناء، انطلاقًا من قيمنا وأفضل الممارسات والشراكات القوية لخلق قيمة لأصحاب المصلحة.",
  ".values-heading .section-kicker": "قيمنا",
  ".values-heading h2": "المبادئ التي يجسدها اسم جيمونا.",
  ".values-grid article:nth-child(1) h3": "النمو",
  ".values-grid article:nth-child(1) p": "نسعى إلى تحقيق نمو مستدام من خلال التطوير المستمر لمنتجاتنا وعملياتنا وشراكاتنا وانتشارنا في الأسواق.",
  ".values-grid article:nth-child(2) h3": "التمكين",
  ".values-grid article:nth-child(2) p": "نُمكّن أصحاب المصلحة عبر خلق الفرص ودعم الابتكار وتشجيع التعاون.",
  ".values-grid article:nth-child(3) h3": "الدافع",
  ".values-grid article:nth-child(3) p": "مدفوعون بالطموح وروح المسؤولية والالتزام، ونحوّل التحديات معًا إلى فرص.",
  ".values-grid article:nth-child(4) h3": "التفاؤل",
  ".values-grid article:nth-child(4) p": "عقلية إيجابية موجهة بالأهداف وتركز على تحقيق نتائج مؤثرة وفي الوقت المناسب عبر جميع العمليات والعلاقات.",
  ".values-grid article:nth-child(5) h3": "الرعاية",
  ".values-grid article:nth-child(5) p": "نرعى الأفراد والابتكار والاستدامة والشراكات الاستراتيجية.",
  ".values-grid article:nth-child(6) h3": "المساءلة",
  ".values-grid article:nth-child(6) p": "نتحمل المسؤولية الكاملة عن التزاماتنا تجاه أهدافنا وأصحاب المصلحة.",
  ".origin-copy .section-kicker": "المعنى وراء جيمونا",
  ".origin-copy h2": "مستوحاة من مدينة تاجرت وأعادت البناء وصمدت.",
  ".origin-copy > p:last-child": "استمدت جيمونا اسمها من جيمونا ديل فريولي، المدينة الإيطالية التاريخية المعروفة بدورها الاستراتيجي في التجارة والتمويل والخدمات اللوجستية. ويعكس إرثها في التجارة والمرونة وإعادة البناء القيم التي تشكل جيمونا اليوم: الشراكات الاستراتيجية والموثوقية والتميز التشغيلي والقدرة على التكيف والنمو.",
  ".origin-points article:nth-child(1) h3": "بوابة إقليمية",
  ".origin-points article:nth-child(1) p": "مركز لوجستي تاريخي يربط بين طرق وأسواق ومناطق متعددة.",
  ".origin-points article:nth-child(2) h3": "الانضباط التجاري",
  ".origin-points article:nth-child(2) p": "مدينة قامت على موقع جغرافي استراتيجي وقوة مالية وقدرات راسخة للتبادل التجاري.",
  ".origin-points article:nth-child(3) h3": "المرونة",
  ".origin-points article:nth-child(3) p": "أصبحت إعادة إعمار المدينة بعد الزلزال رمزًا للإصرار والقوة تحت الضغوط.",
  ".group .section-kicker": "ما نقوم به",
  ".group .section-heading h2": "تنوع مدروس وتركيز منضبط.",
  ".capability-grid article:nth-child(1) h3": "التجارة الدولية",
  ".capability-grid article:nth-child(1) p": "نستورد ونصدر ونوزع السلع الزراعية الاستراتيجية، مع التركيز على السكر والأرز ودقيق القمح والزيوت النباتية وحبوب البن الخضراء والبرسيم وقش القمح ولب بنجر السكر.",
  ".capability-grid article:nth-child(2) h3": "عمليات القيمة المضافة",
  ".capability-grid article:nth-child(2) p": "نضع احتياجات العملاء في مقدمة أولوياتنا عند تطوير وتصنيع وتعبئة علاماتنا التجارية المحلية، مع التركيز المستمر على الجودة والكفاءة والموثوقية عبر مجموعة منتجاتنا.",
  ".capability-grid article:nth-child(3) h3": "تجارة وتصنيع الصلب",
  ".capability-grid article:nth-child(3) p": "نتاجر في منتجات الصلب المحلية والدولية ونصنعها، بما يشمل اللفائف المدرفلة على الساخن والبارد والكمرات والألواح المموجة وصفائح الصلب، لدعم مشروعات البنية التحتية الوطنية والتنمية الصناعية.",
  ".international-trading .section-kicker": "التجارة الدولية",
  ".international-trading h2": "نربط الأسواق ونصنع الفرص.",
  ".international-trading-copy p": "نربط الأسواق العالمية بمصر من خلال حلول موثوقة للاستيراد والتصدير. نستورد منتجات مختارة من موردين دوليين موثوقين لخدمة السوق المصري، كما نصدر منتجات مصرية عالية الجودة إلى الأسواق الدولية. وتستفيد جيمونا من شراكات وتحالفات استراتيجية قوية مع جهات عالمية متعددة لتأمين منتجات عالية الجودة وتحقيق قيمة تنافسية عبر مختلف الأنشطة التجارية. ونواصل استكشاف فرص وأسواق وقنوات إمداد جديدة لبناء شراكات وفرص تجارية مستدامة وقابلة للتوسع.",
  ".seedi-copy .section-kicker": "عمليات القيمة المضافة",
  ".seedi-copy h2": "تقرب سيدي المجموعة من المستهلكين وشركاء قنوات التوزيع.",
  ".seedi-copy > p:not(.section-kicker)": "سيدي هي العلامة الاستهلاكية لجيمونا، وتقوم بتعبئة وتوزيع مجموعة مختارة بعناية من السلع الأساسية اليومية، بما في ذلك الأرز والسكر والزيوت النباتية ودقيق القمح. وبالاعتماد على مصادر موثوقة وعمليات تعبئة دقيقة ورقابة مستمرة على الجودة، تقدم سيدي منتجات متميزة مصممة لتلبية متطلبات الأسواق المحلية والدولية.",
  ".seedi-tags span:nth-child(1)": "الأسواق الرقمية",
  ".seedi-tags span:nth-child(2)": "الموزعون",
  ".seedi-tags span:nth-child(3)": "تجار الجملة",
  ".seedi-tags span:nth-child(4)": "هوريكا",
  ".seedi-button": "اضغط هنا لمعرفة المزيد عن سيدي",
  ".seedi-portfolio .section-kicker": "منتجاتنا",
  ".seedi-portfolio h2": "سلع أساسية. جودة موثوقة.",
  ".commodity-list li:nth-child(1)": "السكر",
  ".commodity-list li:nth-child(2)": "دقيق القمح",
  ".commodity-list li:nth-child(3)": "الزيوت النباتية",
  ".commodity-list li:nth-child(4)": "الأرز",
  ".steel-copy .section-kicker": "تجارة وتصنيع الصلب",
  ".steel-copy h2": "توريد الصلب والمساهمة في نمو البنية التحتية الوطنية.",
  ".steel-copy > p:last-child": "بفضل خبرتها الواسعة، تقدم جيمونا معرفة عميقة بالقطاع في تجارة وتصنيع منتجات مختارة من الصلب. نتاجر ونصنع مجموعة تشمل اللفائف المدرفلة على الساخن والبارد والكمرات وصفائح الصلب والأنابيب والألواح المموجة والأسطح المعدنية. ومن خلال الخبرات الراسخة والشركاء الأقوياء والالتزام بمعايير الجودة التنافسية، ندعم التنمية الصناعية ومشروعات البنية التحتية الوطنية.",
  ".strategy .section-kicker": "كيف ننمو",
  ".strategy h2": "نبني نموًا مستدامًا من خلال قدرات تنافسية وشراكات استراتيجية.",
  ".strategy-grid article:nth-child(1) h3": "تطوير الأسواق",
  ".strategy-grid article:nth-child(1) p": "نوسع حضورنا المحلي عبر قنوات توزيع وأسواق وشبكات تنفيذ استراتيجية، مع خلق فرص تصدير مستدامة تربط المنتجات المصرية بالأسواق الدولية.",
  ".strategy-grid article:nth-child(2) h3": "تطوير العلامات التجارية",
  ".strategy-grid article:nth-child(2) p": "نطور علامات استهلاكية تلائم احتياجات السوق المتغيرة مع تحكم وثيق في التوريد والجودة والتعبئة والتموضع السوقي لابتكار منتجات موثوقة.",
  ".strategy-grid article:nth-child(3) h3": "الشراكات الاستراتيجية",
  ".strategy-grid article:nth-child(3) p": "نبني شراكات طويلة الأجل مع الموردين والموزعين والعملاء وقادة الصناعة لتسريع النمو وتعزيز القدرات وتوسيع الانتشار وتحقيق فرص أعمال قابلة للتوسع.",
  ".strategy-grid article:nth-child(4) h3": "التميز التشغيلي",
  ".strategy-grid article:nth-child(4) p": "نستثمر في التصنيع المتقدم ورأس المال الفكري والحوكمة وإدارة المخاطر والامتثال لتعزيز أداء الأعمال ودعم النمو المستدام.",
  ".ceo-letter .section-kicker": "رسالة ترحيب",
  ".ceo-letter > p:nth-of-type(2)": "أسسنا جيمونا برؤية واضحة: بناء شركة موثوقة ومرنة تربط الأسواق وتعزز سلاسل الإمداد وتخلق قيمة مستدامة لعملائنا وشركائنا. ونؤمن بأن النمو المستدام يقوم على أسس قوية وعلاقات موثوقة والقدرة على التكيف مع ديناميكيات السوق المتغيرة.",
  ".ceo-letter > p:nth-of-type(3)": "في جيمونا، نولي أهمية كبيرة للعنصر البشري وثقة المستهلك ومجتمعاتنا، ونعتز بالتعامل مع هذه الجوانب بأقصى درجات السلوك الأخلاقي والامتثال القانوني والاستدامة.",
  ".ceo-letter > p:nth-of-type(4)": "ومع استمرار توسعنا في مصر والأسواق الدولية، نظل ملتزمين بالجودة والتميز التشغيلي والابتكار والشراكات طويلة الأجل لتجاوز توقعات الأفراد والمؤسسات التي نخدمها.",
  ".ceo-letter > p:nth-of-type(5)": "نتطلع إلى بناء مستقبل جيمونا معًا.",
  ".ceo-letter .signature": "هاني إبراهيم<br><span>رئيس مجلس الإدارة والرئيس التنفيذي</span>",
  ".contact .section-kicker": "تعاون مع جيمونا",
  ".contact h2": "لنبنِ أعمالًا مرنة معًا.",
  ".contact-intro": "ترحب جيمونا بالمحادثات التجارية الجادة.",
  ".contact-details > a small": "راسلنا",
  ".contact-phone-group small": "اتصل بنا",
  ".social-area > span": "تابع جيمونا",
  "[data-footer-company]": "جيمونا للتجارة والاستثمار ش.م.م."
};

const originalContent = new Map();

Object.keys(arabicTranslations).forEach((selector) => {
  const element = document.querySelector(selector);
  if (element) originalContent.set(selector, element.innerHTML);
});

function applyLanguage(language) {
  const isArabic = language === "ar";

  Object.entries(arabicTranslations).forEach(([selector, translation]) => {
    const element = document.querySelector(selector);
    if (!element) return;
    element.innerHTML = isArabic ? translation : originalContent.get(selector);
  });

  document.documentElement.lang = isArabic ? "ar" : "en";
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.body.classList.toggle("is-arabic", isArabic);
  document.title = isArabic
    ? "جيمونا للتجارة والاستثمار"
    : "Gemona Group | Built on Trust, Driven by Partnerships";
  languageToggle.textContent = isArabic ? "English" : "العربية";
  languageToggle.setAttribute(
    "aria-label",
    isArabic ? "View the website in English" : "عرض الموقع باللغة العربية"
  );

  try {
    localStorage.setItem("gemona-language", language);
  } catch (error) {
    // Language preference persistence is optional.
  }
}

languageToggle.addEventListener("click", () => {
  applyLanguage(document.documentElement.lang === "ar" ? "en" : "ar");
});

let savedLanguage = "en";
try {
  savedLanguage = localStorage.getItem("gemona-language") === "ar" ? "ar" : "en";
} catch (error) {
  // The English version remains the default when storage is unavailable.
}

applyLanguage(savedLanguage);

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
}

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

function closeDropdown(dropdown) {
  dropdown.classList.remove("is-open");
  dropdown.querySelector("[data-dropdown-toggle]").setAttribute("aria-expanded", "false");
}

function closeAllDropdowns(except = null) {
  navDropdowns.forEach((dropdown) => {
    if (dropdown !== except) closeDropdown(dropdown);
  });
}

navDropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector("[data-dropdown-toggle]");
  toggle.addEventListener("click", () => {
    const willOpen = !dropdown.classList.contains("is-open");
    closeAllDropdowns(dropdown);
    dropdown.classList.toggle("is-open", willOpen);
    toggle.setAttribute("aria-expanded", String(willOpen));
  });
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    closeAllDropdowns();
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("[data-nav-dropdown]")) {
    closeAllDropdowns();
  }
});

document.addEventListener("keydown", (event) => {
  const openDropdown = document.querySelector("[data-nav-dropdown].is-open");
  if (event.key === "Escape" && openDropdown) {
    const toggle = openDropdown.querySelector("[data-dropdown-toggle]");
    closeDropdown(openDropdown);
    toggle.focus();
  }
});

year.textContent = new Date().getFullYear();
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
