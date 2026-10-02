/**
 * ==========================================================================
 * RAFID RIZWAN SAKIR — PORTFOLIO 2026 JAVASCRIPT CONTROLLER
 * Full Interactive Engine: Scroll-Triggered Left & Right Side-in Animations,
 * Downward Curtain Unroll Reveal, Character-by-Character Typewriter Effect,
 * 3D Tilts, Audio Synthesizer, and Complete User-Only Admin Control Center.
 * (Native cursor restored per user request)
 * ==========================================================================
 */

(function () {
  'use strict';

  const TOOL_SVG_MAP = {
    figma: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4V2H8zm8 0h-4v8h4a4 4 0 1 0 0-8zm-8 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4v-8H8zm8 0h-4v8h4a4 4 0 1 0 0-8zm-8 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4v-4H8z" /></svg>`,
    chatgpt: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22.28 9.68a5.98 5.98 0 0 0-.52-4.96 6.05 6.05 0 0 0-6.51-2.85A6.06 6.06 0 0 0 10.72.63a6.04 6.04 0 0 0-5.78 4.2 6.06 6.06 0 0 0-4.05 2.94 6.04 6.04 0 0 0 .74 7.11 5.98 5.98 0 0 0 .51 4.96 6.05 6.05 0 0 0 6.52 2.85 6.06 6.06 0 0 0 4.52 1.25 6.04 6.04 0 0 0 5.78-4.2 6.06 6.06 0 0 0 4.05-2.94 6.04 6.04 0 0 0-.73-7.12zm-8.32 12.16a4.42 4.42 0 0 1-2.9-1.07l.14-.08 4.83-2.79a.83.83 0 0 0 .42-.72v-6.82l2.05 1.18a.08.08 0 0 1 .05.06v5.82a4.44 4.44 0 0 1-4.59 4.42zm-8.91-4.2a4.42 4.42 0 0 1-.54-3.04l.14.09 4.83 2.79a.83.83 0 0 0 .83 0l5.9-3.41v2.37a.08.08 0 0 1-.03.07l-5.04 2.91a4.44 4.44 0 0 1-6.09-1.78zm-1.46-8.97a4.42 4.42 0 0 1 2.36-1.97v5.74a.83.83 0 0 0 .41.72l5.9 3.41-2.05 1.18a.08.08 0 0 1-.08 0l-5.04-2.91a4.44 4.44 0 0 1-1.5-6.17zm15.42 3.19l-4.83-2.79a.83.83 0 0 0-.83 0l-5.9 3.41V9.11a.08.08 0 0 1 .03-.07l5.04-2.91a4.44 4.44 0 0 1 6.49 4.73zm1.46 8.97a4.42 4.42 0 0 1-2.36 1.97v-5.74a.83.83 0 0 0-.41-.72l-5.9-3.41 2.05-1.18a.08.08 0 0 1 .08 0l5.04 2.91a4.44 4.44 0 0 1 1.5 6.17zm-6.17-5.03l-2.71-1.56 2.71-1.56 2.71 1.56-2.71 1.56z"/></svg>`,
    gemini: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="gemini-icon-grad-dyn" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4285F4"/><stop offset="50%" stop-color="#9B51E0"/><stop offset="100%" stop-color="#FF5483"/></linearGradient></defs><path d="M12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24Z" fill="url(#gemini-icon-grad-dyn)"/></svg>`,
    midjourney: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l9 5 9-5"/><path d="M3 17l9-14 9 14"/><path d="M12 3v19"/><path d="M7.5 13.5l4.5 2.5 4.5-2.5"/></svg>`,
    claude: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M13.8 2.2c-.3 0-.6.2-.7.5l-2.4 6.7-5.8-4.1c-.2-.2-.6-.1-.8.1l-1.8 2.5c-.2.2-.1.6.1.8l5.8 4.1-7.1.6c-.3 0-.5.3-.5.6v3.1c0 .3.2.6.5.6l7.1.6-5.8 4.1c-.2.2-.3.6-.1.8l1.8 2.5c.2.2.6.3.8.1l5.8-4.1 2.4 6.7c.1.3.4.5.7.5h3.1c.3 0 .6-.2.7-.5l2.4-6.7 5.8 4.1c.2.2.6.1.8-.1l1.8-2.5c.2-.2.1-.6-.1-.8l-5.8-4.1 7.1-.6c.3 0 .5-.3.5-.6v-3.1c0-.3-.2-.6-.5-.6l-7.1-.6 5.8-4.1c.2-.2.3-.6.1-.8l-1.8-2.5c-.2-.2-.6-.3-.8-.1l-5.8 4.1-2.4-6.7c-.1-.3-.4-.5-.7-.5h-3.1z"/></svg>`
  };

  // ==========================================================================
  // 1. DEFAULT PORTFOLIO DATA (Initial State with all 10 Slides)
  // ==========================================================================
  const defaultPortfolioData = {
    profile: {
      name: "DANGER SHAWON",
      firstName: "DANGER",
      lastName: "SHAWON",
      role: "GRAPHIC DESIGNER • DINAJPUR, BANGLADESH",
      year: "2026",
      availability: "AVAILABLE FOR CLIENT PROJECTS",
      adminPasscode: "sakir2026"
    },
    theme: {
      preset: "signature-red",
      accentColor: "#E03126",
      creamBg: "#FCF9EF",
      darkStageBg: "#111114",
      darkCardBg: "#181B24",
      textColor: "#111114"
    },
    hero: {
      eyebrow: "Graphic Designer",
      title: "PORTFOLIO",
      tornText: "FOLIO",
      year: "2026",
      stickerText: "Sleep design repeat",
      mascotImage: "./assets/images/hero-mascot.png",
      stickerImage: "./assets/images/hero-sticker.png",
      slideImage: "./assets/images/slide-1-hero.png"
    },
    about: {
      namePrefix: "DANGER",
      nameAccent: "SHAWON",
      subtitle: "GRAPHIC DESIGNER • DINAJPUR, BANGLADESH",
      paragraphs: [
        "I didn't start as a designer.",
        "I studied Marketing at one of the top universities in Bangladesh.\nI was taught how brands think, how markets work, and how business speaks.",
        "But something was missing. Understanding a brand wasn't enough for me. I wanted to build its visual soul.",
        "So I stepped into Design.\nI took my business foundation, merged it with raw creativity, and taught myself how to turn complex strategies into clean visual identities.",
        "I learned the fundamentals,\nchallenged myself, practiced relentlessly,\nand slowly built my own visual language.",
        "Every project you see here represents\nmy commitment to becoming\na better designer—\none step at a time."
      ],
      quote: "Built from curiosity, discipline, and the courage to start.",
      portraitImage: "./assets/images/sakir-portrait.png",
      slideImage: "./assets/images/slide-2-about.png"
    },
    skills: {
      whatIDo: [
        "Branding",
        "Visual Identity",
        "Typography",
        "Logo Design",
        "Poster Design",
        "Packaging Design",
        "Social Media Design"
      ],
      softSkills: [
        "Creative Direction",
        "Visual Storytelling",
        "Attention to Details",
        "Problem Solving",
        "Adaptability",
        "Communication"
      ],
      tools: {
        visual: [
          { id: "ai", name: "Adobe Illustrator", badge: "Ai", bg: "#330000", color: "#FF9A00", border: "#FF9A00" },
          { id: "ps", name: "Adobe Photoshop", badge: "Ps", bg: "#001E36", color: "#31A8FF", border: "#31A8FF" },
          { id: "ae", name: "Affinity / After Effects", badge: "a", bg: "#1B3624", color: "#7EE68D", border: "#7EE68D" },
          { id: "figma", name: "Figma", type: "svg", svgType: "figma", bg: "#1E1E1E", color: "#F24E1E", border: "#F24E1E" },
          { id: "canva", name: "Canva", type: "canva", badge: "Canva", bg: "#00C4CC", color: "#FFFFFF" },
          { id: "powerpoint", name: "PowerPoint", badge: "P", bg: "#D24726", color: "#FFFFFF" }
        ],
        genai: [
          { id: "chatgpt", name: "ChatGPT (OpenAI)", type: "svg", svgType: "chatgpt" },
          { id: "gemini", name: "Google Gemini", type: "svg", svgType: "gemini" },
          { id: "midjourney", name: "Midjourney", type: "svg", svgType: "midjourney" },
          { id: "claude", name: "Claude / Anthropic", type: "svg", svgType: "claude" }
        ]
      },
      languages: [
        { lang: "English", level: "Fluent" },
        { lang: "Bengali", level: "Native" },
        { lang: "Hindi", level: "Conversational" },
        { lang: "Urdu", level: "Conversational" }
      ],
      hobbies: [
        "Photography",
        "Sketching",
        "Video Games",
        "Movie/Tv Show",
        "Football"
      ],
      contact: {
        email: "rafid.sakir@gmail.com",
        phone: "+88 01568720531",
        whatsapp: "+88 01568720531",
        linkedin: "Rafid Rizwan Sakir",
        linkedinUrl: "https://www.linkedin.com",
        behance: "rrsakir",
        behanceUrl: "https://www.behance.net/rrsakir",
        qrImage: "./assets/images/contact-qr.png"
      },
      slideImage: "./assets/images/slide-3-skills.png"
    },
    contents: {
      title: "CONTENTS",
      categories: [
        {
          name: "BRANDING",
          items: ["Logofolio", "Branding Design"]
        },
        {
          name: "PACKAGING",
          items: ["Product Packaging", "Label Design"]
        },
        {
          name: "STATIONERY",
          items: ["Business Card", "ID Card", "Letterhead & Invoice", "Envelope Design"]
        },
        {
          name: "DIGITAL",
          items: ["Social Media Post", "YouTube Thumbnail"]
        },
        {
          name: "PRINT DESIGN",
          items: ["Flyer Design", "Brochure Design", "Poster Design", "Banner Design", "Calendar Design", "Food Menu"]
        },
        {
          name: "APPAREL",
          items: ["T-shirt Design"]
        },
        {
          name: "CREATIVE",
          items: ["Book Cover Design", "Photo Manipulation"]
        }
      ],
      slideImage: "./assets/images/slide-4-contents.png"
    },
    logofolio: {
      eyebrow: "BRANDING",
      title: "LOGOFOLIO",
      logos: [
        {
          id: "sonicwave",
          name: "SonicWave",
          category: "Audio & Acoustics",
          description: "SonicWave features a fluid acoustic soundwave 'S' monogram designed for high-fidelity audio engineering, spatial hardware, and sonic branding systems.",
          image: "./assets/images/logo-sonicwave.png",
          colors: ["#143627", "#1E4F39", "#A8E6CF", "#FFFFFF"]
        },
        {
          id: "freshburst",
          name: "Fresh Burst",
          category: "Beverage & Juice",
          description: "Fresh Burst captures the fizzy exuberance of cold-pressed organic fruit juices. Custom bubble display typography with an explosive citrus fruit wheel.",
          image: "./assets/images/logo-freshburst.png",
          colors: ["#111111", "#FF5964", "#FEE440", "#2EC4B6"]
        },
        {
          id: "leafspice",
          name: "Leaf & Spice",
          category: "Organic Food & Spice",
          description: "Leaf & Spice bridges sustainable organic agriculture and warm culinary flavor. A geometric tree motif radiating colorful botanical leaves.",
          image: "./assets/images/logo-leafspice.png",
          colors: ["#F8F8F8", "#E76F51", "#2A9D8F", "#E9C46A"]
        },
        {
          id: "sakir",
          name: "SAKIR",
          category: "Personal Identity",
          description: "Personal monogram for Rafid Rizwan Sakir. Aerodynamic avian wings soaring upward with razor-sharp geometric precision.",
          image: "./assets/images/logo-sakir.png",
          colors: ["#FFFFFF", "#0A1128", "#1C3144", "#E03126"]
        },
        {
          id: "thesparitul",
          name: "The Spa Ritual",
          category: "Wellness & Sanctuary",
          description: "The Spa Ritual embodies neoclassical tranquility. A minimalist architectural triumphal arch column conveying serenity and rejuvenation.",
          image: "./assets/images/logo-the-spa-ritual.png",
          colors: ["#CFC3B0", "#2B2825", "#F5F2EB", "#8A7E72"]
        },
        {
          id: "deepblue",
          name: "DEEP BLUE",
          category: "Luxury Marine",
          description: "DEEP BLUE crafts yachting lifestyle and ocean conservation branding. A radiant golden fin silhouette atop deep oceanic obsidian navy.",
          image: "./assets/images/logo-deepblue.png",
          colors: ["#101B2E", "#D4AF37", "#1E304A", "#F5F6F9"]
        }
      ],
      slideImage: "./assets/images/slide-5-logofolio.png"
    },
    // Slides 6 to 10 project definitions
    showcases: {
      slide6: {
        category: "BRANDING",
        title: "BRANDING DESIGN",
        desc: "VESTRA Minimalist Apparel & DURONTO High-Velocity Athletics",
        slideImage: "./assets/images/slide-6-branding-design.png"
      },
      slide7: {
        category: "STATIONERY",
        title: "BUSINESS CARD",
        desc: "6 Curated Identity Cards: Fresh Burst, Knight Owl, Dubai Point, Sakir, Spark, Magnito",
        slideImage: "./assets/images/slide-7-business-card.png"
      },
      slide8: {
        category: "STATIONERY",
        title: "ID CARD DESIGN",
        desc: "Corporate Identification & Lanyard Systems (Executive Purple, Dual Green/Red, Plexicon Matte)",
        slideImage: "./assets/images/slide-8-id-card.png"
      },
      slide9: {
        category: "PRINT DESIGN",
        title: "FLYER DESIGN",
        desc: "Smart Ideas Corporate Flyer, Yellow Fashion Retail Sale, and Dubai Point Capabilities Print",
        slideImage: "./assets/images/slide-9-flyer-design.png"
      },
      slide10: {
        category: "PRINT DESIGN",
        title: "BROCHURE DESIGN",
        desc: "Modern Plant Studio Botanical Trifold & Plexicon High-Impact Corporate Brochure",
        slideImage: "./assets/images/slide-10-brochure-design.png"
      },
      slide11: {
        category: "PRINT DESIGN",
        title: "POSTER DESIGN",
        desc: "Curated High-Impact Automotive & Typographic Posters: Porsche 911 Heritage Red, Journey Typographic Tunnel, and GT3RS Studio Showcase",
        slideImage: "./assets/images/slide-11-poster-design.png"
      },
      slide12: {
        category: "PRINT DESIGN",
        title: "BANNER DESIGN",
        desc: "Commercial Metro Billboard Display & Roll-Up Exhibition Stand for Fresh Burst Organic Fruit Juices",
        slideImage: "./assets/images/slide-12-banner-design.png"
      }
    },
    extraSlides: []
  };

  // Theme Presets Configuration
  const THEME_PRESETS = {
    "signature-red": {
      name: "Signature Red",
      accentColor: "#E03126",
      creamBg: "#FCF9EF",
      darkStageBg: "#111114",
      darkCardBg: "#181B24",
      textColor: "#111114"
    },
    "cyber-cyan": {
      name: "Cyber Cyan",
      accentColor: "#00F0FF",
      creamBg: "#F0F7FA",
      darkStageBg: "#0B111A",
      darkCardBg: "#111D2D",
      textColor: "#0A1017"
    },
    "royal-gold": {
      name: "Royal Gold",
      accentColor: "#D4AF37",
      creamBg: "#FAF6EE",
      darkStageBg: "#12100C",
      darkCardBg: "#1E1A14",
      textColor: "#14110A"
    },
    "emerald-mint": {
      name: "Emerald Mint",
      accentColor: "#10B981",
      creamBg: "#F0F9F5",
      darkStageBg: "#0A1510",
      darkCardBg: "#10231A",
      textColor: "#08140E"
    },
    "sunset-coral": {
      name: "Sunset Coral",
      accentColor: "#FF5733",
      creamBg: "#FAF2EE",
      darkStageBg: "#150D0E",
      darkCardBg: "#241618",
      textColor: "#140A0B"
    },
    "electric-violet": {
      name: "Electric Violet",
      accentColor: "#A855F7",
      creamBg: "#F7F2FA",
      darkStageBg: "#120B1A",
      darkCardBg: "#1D122B",
      textColor: "#100918"
    }
  };

  const STORAGE_KEY = 'sakir_portfolio_data_2026';
  const IDB_NAME = 'DangerShawonDB';
  const IDB_STORE = 'portfolioStore';
  const IDB_KEY = 'user_portfolio';

  // ==========================================================================
  // INDEXEDDB RESILIENT STORAGE ENGINE (No 5MB quota limit, survives reloads)
  // ==========================================================================
  function getIDB() {
    return new Promise((resolve) => {
      if (!window.indexedDB) return resolve(null);
      const req = indexedDB.open(IDB_NAME, 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          db.createObjectStore(IDB_STORE);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    });
  }

  async function idbLoad() {
    try {
      const db = await getIDB();
      if (!db) return null;
      return new Promise((resolve) => {
        const tx = db.transaction(IDB_STORE, 'readonly');
        const store = tx.objectStore(IDB_STORE);
        const req = store.get(IDB_KEY);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      });
    } catch (e) {
      return null;
    }
  }

  async function idbSave(data) {
    try {
      const db = await getIDB();
      if (!db) return false;
      return new Promise((resolve) => {
        const tx = db.transaction(IDB_STORE, 'readwrite');
        const store = tx.objectStore(IDB_STORE);
        const req = store.put(data, IDB_KEY);
        req.onsuccess = () => resolve(true);
        req.onerror = () => resolve(false);
      });
    } catch (e) {
      return false;
    }
  }

  // Deep merge utility: base object overridden by user customizations
  function mergePortfolioData(base, override) {
    if (!override) return JSON.parse(JSON.stringify(base || {}));
    const out = JSON.parse(JSON.stringify(base || {}));
    function deepMerge(target, src) {
      for (const k in src) {
        if (src[k] !== undefined && src[k] !== null) {
          if (Array.isArray(src[k])) {
            target[k] = JSON.parse(JSON.stringify(src[k]));
          } else if (typeof src[k] === 'object') {
            if (!target[k] || typeof target[k] !== 'object' || Array.isArray(target[k])) {
              target[k] = {};
            }
            deepMerge(target[k], src[k]);
          } else {
            if (typeof src[k] === 'string' && src[k].trim() === '' && target[k]) {
              continue;
            }
            target[k] = src[k];
          }
        }
      }
    }
    deepMerge(out, override);
    return out;
  }

  let portfolioData = loadPortfolioData();

  function loadPortfolioData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const merged = mergePortfolioData(defaultPortfolioData, parsed);
        if (!merged.theme) merged.theme = Object.assign({}, defaultPortfolioData.theme);
        if (!merged.skills) merged.skills = JSON.parse(JSON.stringify(defaultPortfolioData.skills));
        if (!merged.skills.tools) merged.skills.tools = JSON.parse(JSON.stringify(defaultPortfolioData.skills.tools));
        if (!merged.skills.tools.visual || merged.skills.tools.visual.length === 0) {
          merged.skills.tools.visual = JSON.parse(JSON.stringify(defaultPortfolioData.skills.tools.visual));
        }
        if (!merged.skills.tools.genai || merged.skills.tools.genai.length === 0) {
          merged.skills.tools.genai = JSON.parse(JSON.stringify(defaultPortfolioData.skills.tools.genai));
        }
        if (!merged.contents) merged.contents = JSON.parse(JSON.stringify(defaultPortfolioData.contents));
        if (!merged.logofolio) merged.logofolio = JSON.parse(JSON.stringify(defaultPortfolioData.logofolio));
        if (!merged.showcases) {
          merged.showcases = JSON.parse(JSON.stringify(defaultPortfolioData.showcases));
        } else {
          for (let i = 6; i <= 12; i++) {
            const k = `slide${i}`;
            const defS = defaultPortfolioData.showcases[k];
            if (!merged.showcases[k]) {
              merged.showcases[k] = Object.assign({}, defS);
            } else if (!merged.showcases[k].slideImage || merged.showcases[k].slideImage.trim() === '') {
              merged.showcases[k].slideImage = defS?.slideImage || '';
            }
          }
        }
        return merged;
      }
    } catch (e) {
      console.warn("Could not load from localStorage, using defaults:", e);
    }
    return JSON.parse(JSON.stringify(defaultPortfolioData));
  }

  function applyTheme(themeObj, updateInputs = false) {
    if (!themeObj) return;
    const root = document.documentElement;

    if (themeObj.accentColor) {
      root.style.setProperty('--accent-red', themeObj.accentColor);
      root.style.setProperty('--border-focus', themeObj.accentColor);
    }
    if (themeObj.creamBg) {
      root.style.setProperty('--bg-cream', themeObj.creamBg);
      document.querySelectorAll('.rip-dark-to-cream .torn-divider-svg path').forEach(p => {
        p.setAttribute('fill', themeObj.creamBg);
      });
    }
    if (themeObj.darkStageBg) {
      root.style.setProperty('--bg-dark-stage', themeObj.darkStageBg);
      document.querySelectorAll('.rip-header-to-dark .torn-divider-svg path').forEach(p => {
        p.setAttribute('fill', themeObj.darkStageBg);
      });
    }
    if (themeObj.darkCardBg) {
      root.style.setProperty('--bg-dark-card', themeObj.darkCardBg);
    }
    if (themeObj.textColor) {
      root.style.setProperty('--text-dark', themeObj.textColor);
    }

    if (updateInputs) {
      const pickAccent = document.getElementById('color-picker-accent');
      const hexAccent = document.getElementById('color-hex-accent');
      if (pickAccent && themeObj.accentColor) pickAccent.value = themeObj.accentColor;
      if (hexAccent && themeObj.accentColor) hexAccent.value = themeObj.accentColor;

      const pickCream = document.getElementById('color-picker-cream');
      const hexCream = document.getElementById('color-hex-cream');
      if (pickCream && themeObj.creamBg) pickCream.value = themeObj.creamBg;
      if (hexCream && themeObj.creamBg) hexCream.value = themeObj.creamBg;

      const pickDark = document.getElementById('color-picker-darkstage');
      const hexDark = document.getElementById('color-hex-darkstage');
      if (pickDark && themeObj.darkStageBg) pickDark.value = themeObj.darkStageBg;
      if (hexDark && themeObj.darkStageBg) hexDark.value = themeObj.darkStageBg;

      const pickCard = document.getElementById('color-picker-card');
      const hexCard = document.getElementById('color-hex-card');
      if (pickCard && themeObj.darkCardBg) pickCard.value = themeObj.darkCardBg;
      if (hexCard && themeObj.darkCardBg) hexCard.value = themeObj.darkCardBg;

      const pickText = document.getElementById('color-picker-text');
      const hexText = document.getElementById('color-hex-text');
      if (pickText && themeObj.textColor) pickText.value = themeObj.textColor;
      if (hexText && themeObj.textColor) hexText.value = themeObj.textColor;

      // Highlight active preset button
      document.querySelectorAll('.theme-preset-card').forEach(btn => {
        if (btn.getAttribute('data-preset') === themeObj.preset) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Update miniature live preview box
      const prevCream = document.getElementById('preview-mini-cream');
      if (prevCream && themeObj.creamBg) prevCream.style.backgroundColor = themeObj.creamBg;
      const prevDark = document.getElementById('preview-mini-dark');
      if (prevDark && themeObj.darkStageBg) prevDark.style.backgroundColor = themeObj.darkStageBg;
      const prevCard = document.getElementById('preview-mini-card');
      if (prevCard && themeObj.darkCardBg) prevCard.style.backgroundColor = themeObj.darkCardBg;
      const prevBtn = document.getElementById('preview-mini-btn');
      if (prevBtn && themeObj.accentColor) prevBtn.style.backgroundColor = themeObj.accentColor;
      const prevAccentText = document.getElementById('preview-mini-accent-text');
      if (prevAccentText && themeObj.accentColor) prevAccentText.style.color = themeObj.accentColor;
      const prevAccentTag = document.getElementById('preview-mini-accent-tag');
      if (prevAccentTag && themeObj.accentColor) prevAccentTag.style.color = themeObj.accentColor;
    }
  }

  async function syncWithServerDatabase() {
    try {
      let res = await fetch('/api/data').catch(() => null);
      if (!res || !res.ok) {
        // Fallback for static hosting like GitHub Pages, Vercel, Netlify
        res = await fetch('./data/portfolio.json').catch(() => null);
      }
      if (res && res.ok) {
        const serverData = await res.json();
        const idbData = await idbLoad();
        const storedStr = localStorage.getItem(STORAGE_KEY);
        let userLocalData = idbData;
        if (!userLocalData && storedStr) {
          try { userLocalData = JSON.parse(storedStr); } catch (e) {}
        }

        if (userLocalData) {
          // CRITICAL: User has edited/saved data in this browser!
          // We must PRESERVE user customizations over server defaults:
          portfolioData = mergePortfolioData(serverData, userLocalData);
        } else {
          portfolioData = mergePortfolioData(defaultPortfolioData, serverData);
        }

        if (!portfolioData.theme) {
          portfolioData.theme = Object.assign({}, defaultPortfolioData.theme);
        }
        if (!portfolioData.skills) portfolioData.skills = JSON.parse(JSON.stringify(defaultPortfolioData.skills));
        if (!portfolioData.skills.tools) portfolioData.skills.tools = JSON.parse(JSON.stringify(defaultPortfolioData.skills.tools));
        if (!portfolioData.skills.tools.visual || portfolioData.skills.tools.visual.length === 0) {
          portfolioData.skills.tools.visual = JSON.parse(JSON.stringify(defaultPortfolioData.skills.tools.visual));
        }
        if (!portfolioData.skills.tools.genai || portfolioData.skills.tools.genai.length === 0) {
          portfolioData.skills.tools.genai = JSON.parse(JSON.stringify(defaultPortfolioData.skills.tools.genai));
        }
        if (!portfolioData.contents) portfolioData.contents = JSON.parse(JSON.stringify(defaultPortfolioData.contents));
        if (!portfolioData.logofolio) portfolioData.logofolio = JSON.parse(JSON.stringify(defaultPortfolioData.logofolio));
        if (!portfolioData.showcases) {
          portfolioData.showcases = JSON.parse(JSON.stringify(defaultPortfolioData.showcases));
        } else {
          for (let i = 6; i <= 12; i++) {
            const k = `slide${i}`;
            const defS = defaultPortfolioData.showcases[k];
            if (!portfolioData.showcases[k]) {
              portfolioData.showcases[k] = Object.assign({}, defS);
            } else if (!portfolioData.showcases[k].slideImage || portfolioData.showcases[k].slideImage.trim() === '') {
              portfolioData.showcases[k].slideImage = defS?.slideImage || '';
            }
          }
        }

        await savePortfolioData(false);
        applyTheme(portfolioData.theme, false);
        renderPortfolio();
        populateAdminFields();
        console.log('[Backend Sync] Successfully synchronized and preserved user customizations.');
      }
    } catch (e) {
      console.log('[Backend Sync] Running in standalone/browser storage mode:', e.message);
    }
  }

  async function savePortfolioData(showUserToast = true) {
    // 1. Save to IndexedDB (virtually unlimited capacity, handles large images safely)
    await idbSave(portfolioData);

    // 2. Also try localStorage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolioData));
    } catch (e) {
      console.warn("localStorage quota exceeded, but IndexedDB safely saved all images and text!");
    }

    const indicator = document.getElementById('admin-save-indicator');
    if (indicator) {
      indicator.textContent = `✓ Auto-Saved to Database (${new Date().toLocaleTimeString()})`;
      indicator.style.color = "#4ECCA3";
    }

    if (showUserToast) {
      showToast("Changes permanently saved to database! 💾 (Persists on refresh)");
    }

    try {
      const res = await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(portfolioData)
      });
      if (res.ok && showUserToast) {
        showToast("Disk database (data/portfolio.json) updated! 🚀");
        if (indicator) {
          indicator.textContent = `✓ Disk Database Updated (${new Date().toLocaleTimeString()})`;
          indicator.style.color = "#4ECCA3";
        }
      }
    } catch (err) {}
  }

  // ==========================================================================
  // 2. AUDIO SYNTHESIS ENGINE (Native Web Audio API)
  // ==========================================================================
  let audioCtx = null;
  let soundEnabled = true;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playTone(freq = 440, type = 'sine', duration = 0.08, gainVal = 0.04) {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  function playClick() { playTone(600, 'sine', 0.05, 0.025); }
  function playHover() { playTone(880, 'triangle', 0.03, 0.012); }
  function playSuccess() {
    playTone(523, 'sine', 0.08, 0.03);
    setTimeout(() => playTone(659, 'sine', 0.08, 0.03), 80);
    setTimeout(() => playTone(784, 'sine', 0.12, 0.04), 160);
  }
  function playTornRip() {
    playTone(320, 'sawtooth', 0.05, 0.02);
    setTimeout(() => playTone(240, 'sawtooth', 0.07, 0.015), 40);
  }
  function playTypeTick() {
    playTone(1200 + Math.random() * 200, 'sine', 0.02, 0.008);
  }

  // ==========================================================================
  // 3. TOAST NOTIFICATION UTILITY
  // ==========================================================================
  function showToast(message, duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<span>✦</span> <span>${message}</span>`;
    container.appendChild(toast);
    playClick();

    setTimeout(() => {
      toast.style.animation = 'slideInRight 0.3s reverse forwards';
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, duration);
  }

  // ==========================================================================
  // 4. DOM RENDERING ENGINE (Binds state to live page)
  // ==========================================================================
  function renderPortfolio() {
    const data = portfolioData;

    const activeName = (data.profile.name || `${data.profile.firstName || ''} ${data.profile.lastName || ''}`).trim() || "DANGER SHAWON";
    const firstName = data.about?.namePrefix || data.profile.firstName || "DANGER";
    const lastName = data.about?.nameAccent || data.profile.lastName || "SHAWON";
    const userRole = data.about?.subtitle || data.profile.role || "GRAPHIC DESIGNER • DINAJPUR, BANGLADESH";

    // Dynamic Browser Tab Title
    document.title = `${activeName} — Portfolio ${data.profile.year || '2026'}`;

    // Header & Nav (if present)
    const navName = document.getElementById('nav-brand-name');
    if (navName) navName.textContent = activeName;
    const navSub = document.getElementById('nav-brand-sub');
    if (navSub) navSub.textContent = `PORTFOLIO '${(data.profile.year || "2026").slice(-2)}`;

    const behanceLink = document.getElementById('nav-behance-link');
    if (behanceLink && data.skills?.contact?.behanceUrl) {
      behanceLink.href = data.skills.contact.behanceUrl;
    }

    // Hero Section
    const heroName = document.getElementById('hero-designer-name');
    if (heroName) heroName.textContent = activeName;
    const heroYear = document.getElementById('hero-year-text');
    if (heroYear) heroYear.textContent = data.profile.year || "2026";
    const heroEyebrow = document.getElementById('hero-eyebrow-text');
    if (heroEyebrow) heroEyebrow.textContent = data.hero.eyebrow;
    const heroTornText = document.getElementById('hero-torn-text');
    if (heroTornText) heroTornText.textContent = data.hero.tornText;
    const heroYearBubble = document.getElementById('hero-year-bubble-text');
    if (heroYearBubble) heroYearBubble.textContent = data.hero.year;

    const mascotImg = document.getElementById('hero-mascot-img');
    if (mascotImg && data.hero.mascotImage) mascotImg.src = data.hero.mascotImage;
    const stickerImg = document.getElementById('hero-sticker-img');
    if (stickerImg && data.hero.stickerImage) stickerImg.src = data.hero.stickerImage;

    // About Section
    const aboutPrefix = document.getElementById('about-name-prefix');
    if (aboutPrefix) aboutPrefix.textContent = firstName;
    const aboutAccent = document.getElementById('about-name-accent');
    if (aboutAccent) aboutAccent.textContent = lastName;
    const aboutSub = document.getElementById('about-subtitle-text');
    if (aboutSub) aboutSub.textContent = userRole;

    // CRITICAL: Update typewriter data attributes so typewriter animation types the user's name
    const aboutNameTarget = document.querySelector('.about-name.dynamic-typewriter-target');
    if (aboutNameTarget) {
      aboutNameTarget.setAttribute('data-type-prefix', firstName + ' ');
      aboutNameTarget.setAttribute('data-type-accent', lastName);
      aboutNameTarget.setAttribute('data-type-text', `${firstName} ${lastName}`);
      aboutNameTarget.innerHTML = `<span id="about-name-prefix">${firstName} </span><span class="text-red" id="about-name-accent">${lastName}</span>`;
      aboutNameTarget.classList.remove('typing-active');
    }

    const paragraphsList = document.getElementById('about-paragraphs-list');
    if (paragraphsList && data.about.paragraphs) {
      paragraphsList.innerHTML = data.about.paragraphs.map((p, idx) => {
        const leadClass = idx === 0 ? 'story-lead' : '';
        const formatted = p.replace(/\n/g, '<br />');
        return `<p class="story-p ${leadClass}">${formatted}</p>`;
      }).join('');
    }

    const quoteBox = document.getElementById('about-quote-box');
    if (quoteBox && data.about.quote) {
      quoteBox.querySelector('.handwritten-quote').innerHTML = formatQuote(data.about.quote);
    }

    const portraitImg = document.getElementById('about-portrait-img');
    if (portraitImg && data.about.portraitImage) portraitImg.src = data.about.portraitImage;

    // Skills Bento Grid
    const listWhatIDo = document.getElementById('list-what-i-do');
    if (listWhatIDo && data.skills.whatIDo) {
      listWhatIDo.innerHTML = data.skills.whatIDo.map(item => `<li>${item}</li>`).join('');
    }

    const listSoftSkills = document.getElementById('list-soft-skills');
    if (listSoftSkills && data.skills.softSkills) {
      listSoftSkills.innerHTML = data.skills.softSkills.map(item => `<li>${item}</li>`).join('');
    }

    const listLanguages = document.getElementById('list-languages');
    if (listLanguages && data.skills.languages) {
      listLanguages.innerHTML = data.skills.languages.map(l => `
        <div class="lang-row">
          <span class="lang-name">${l.lang}</span>
          <span class="lang-level">${l.level}</span>
        </div>
      `).join('');
    }

    const listHobbies = document.getElementById('list-hobbies');
    if (listHobbies && data.skills.hobbies) {
      listHobbies.innerHTML = data.skills.hobbies.map(h => `<li>${h}</li>`).join('');
    }

    // Contact Details
    const emailText = document.getElementById('contact-email-text');
    if (emailText) emailText.textContent = data.skills.contact.email;
    const phoneText = document.getElementById('contact-phone-text');
    if (phoneText) phoneText.textContent = data.skills.contact.phone;
    const waLink = document.getElementById('contact-whatsapp-link');
    if (waLink) {
      const cleanNum = (data.skills.contact.whatsapp || '').replace(/[^0-9]/g, '');
      waLink.href = `https://wa.me/${cleanNum}`;
    }
    const linkedinText = document.getElementById('contact-linkedin-text');
    if (linkedinText) linkedinText.textContent = data.skills.contact.linkedin;
    const linkedinLink = document.getElementById('contact-linkedin-link');
    if (linkedinLink && data.skills.contact.linkedinUrl) linkedinLink.href = data.skills.contact.linkedinUrl;

    const behanceText = document.getElementById('contact-behance-text');
    if (behanceText) behanceText.textContent = data.skills.contact.behance;
    const behanceLink2 = document.getElementById('contact-behance-link');
    if (behanceLink2 && data.skills.contact.behanceUrl) behanceLink2.href = data.skills.contact.behanceUrl;

    const qrImg = document.getElementById('contact-qr-img');
    if (qrImg && data.skills.contact.qrImage) qrImg.src = data.skills.contact.qrImage;

    // Tools I Use (Visual & Gen AI)
    const gridVisual = document.getElementById('grid-visual-tools');
    if (gridVisual) {
      const vTools = (data.skills?.tools?.visual && data.skills.tools.visual.length > 0)
        ? data.skills.tools.visual
        : defaultPortfolioData.skills.tools.visual;
      gridVisual.innerHTML = vTools.map(t => {
        if (t.type === 'svg' && TOOL_SVG_MAP[t.svgType]) {
          return `<div class="tool-badge-item" title="${t.name}">
            <div class="tool-icon-box" style="background:${t.bg || '#1E1E1E'}; color:${t.color || '#fff'}; border-color:${t.border || '#333'};">
              ${TOOL_SVG_MAP[t.svgType]}
            </div>
          </div>`;
        }
        if (t.type === 'canva') {
          return `<div class="tool-badge-item" title="${t.name}">
            <div class="tool-icon-box" style="background:#00C4CC; color:#FFFFFF; border-radius:50%; font-size:10px; font-weight:800;">${t.badge || 'Canva'}</div>
          </div>`;
        }
        return `<div class="tool-badge-item" title="${t.name}">
          <div class="tool-icon-box" style="background:${t.bg || '#222'}; color:${t.color || '#fff'}; border-color:${t.border || 'transparent'};">${t.badge || t.name.slice(0, 2)}</div>
        </div>`;
      }).join('');
    }

    const gridGenAI = document.getElementById('grid-genai-tools');
    if (gridGenAI) {
      const gTools = (data.skills?.tools?.genai && data.skills.tools.genai.length > 0)
        ? data.skills.tools.genai
        : defaultPortfolioData.skills.tools.genai;
      gridGenAI.innerHTML = gTools.map(t => {
        const svg = TOOL_SVG_MAP[t.svgType] || (t.type === 'svg' && TOOL_SVG_MAP[t.id]);
        if (svg) {
          return `<div class="tool-badge-item" title="${t.name}">
            <div class="tool-icon-box tool-${t.svgType || t.id}">
              ${svg}
            </div>
          </div>`;
        }
        return `<div class="tool-badge-item" title="${t.name}">
          <div class="tool-icon-box" style="background:${t.bg || '#1E1E24'}; color:${t.color || '#fff'}; border-color:${t.border || '#333'}; font-size:11px; font-weight:700;">
            ${t.badge || t.name.slice(0, 2)}
          </div>
        </div>`;
      }).join('');
    }

    // Contents Directory Modal
    const contentsModalTitle = document.getElementById('contents-modal-title');
    if (contentsModalTitle && data.contents?.title) contentsModalTitle.textContent = data.contents.title;

    const contentsGrid = document.getElementById('contents-categories-grid');
    if (contentsGrid && data.contents?.categories) {
      const SLIDE_LINK_MAP = {
        'logofolio': '#slide-5',
        'branding design': '#slide-6',
        'business card': '#slide-7',
        'id card': '#slide-8',
        'flyer design': '#slide-9',
        'brochure design': '#slide-10',
        'poster design': '#slide-11',
        'banner design': '#slide-12'
      };

      const cats = data.contents.categories;
      const col1Cats = cats.slice(0, Math.ceil(cats.length / 2));
      const col2Cats = cats.slice(Math.ceil(cats.length / 2));

      function renderContentsCol(colCats) {
        return `<div class="contents-column">
          ${colCats.map(cat => `
            <div class="content-block">
              <div class="block-category-title"><span class="arrow-accent">↗</span><span class="category-name">${cat.name}</span></div>
              <ul class="block-items-list">
                ${(cat.items || []).map(item => {
                  const target = SLIDE_LINK_MAP[item.toLowerCase().trim()];
                  if (target) {
                    return `<li><a href="${target}" class="content-item-link contents-jump-link">${item}</a></li>`;
                  }
                  return `<li><span class="content-item-text">${item}</span></li>`;
                }).join('')}
              </ul>
            </div>
          `).join('')}
        </div>`;
      }

      contentsGrid.innerHTML = renderContentsCol(col1Cats) + renderContentsCol(col2Cats);

      contentsGrid.querySelectorAll('.contents-jump-link').forEach(link => {
        link.onclick = () => {
          const dlg = document.getElementById('contents-dialog');
          if (dlg) dlg.close();
        };
      });
    }

    // Logofolio Section
    const logoEyebrow = document.querySelector('#slide-5 .showcase-eyebrow span');
    if (logoEyebrow && data.logofolio?.eyebrow) logoEyebrow.textContent = data.logofolio.eyebrow;
    const logoTitle = document.getElementById('logofolio-title-text');
    if (logoTitle && data.logofolio?.title) {
      logoTitle.textContent = data.logofolio.title;
      logoTitle.setAttribute('data-type-text', data.logofolio.title);
    }

    const logofolioGrid = document.getElementById('logofolio-cards-grid');
    if (logofolioGrid && data.logofolio?.logos) {
      logofolioGrid.innerHTML = data.logofolio.logos.map((logo, idx) => `
        <article class="logo-card anim-slide-${idx % 2 === 0 ? 'left' : 'right'}" data-logo-id="${logo.id || 'logo-' + idx}" tabindex="0" role="button" aria-label="${logo.name} Logo Mockup">
          <div class="logo-card-inner">
            <div class="logo-image-box">
              <img src="${logo.image || './assets/images/logo-sonicwave.png'}" alt="${logo.name} Logo Design" class="logo-img" />
              <div class="card-glare"></div>
            </div>
            <div class="logo-card-info">
              <h4 class="logo-name">${logo.name}</h4><span class="logo-cat">${logo.category}</span>
            </div>
          </div>
        </article>
      `).join('');

      logofolioGrid.querySelectorAll('.logo-card').forEach(card => {
        card.onclick = () => {
          const id = card.getAttribute('data-logo-id');
          openLogoModal(id);
        };
        card.onkeydown = (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const id = card.getAttribute('data-logo-id');
            openLogoModal(id);
          }
        };
      });
    }

    // Showcases Titles, Descriptions & Images (Slides 6-12)
    for (let i = 6; i <= 12; i++) {
      const sKey = `slide${i}`;
      const sData = data.showcases?.[sKey];
      if (sData) {
        const titleEl = document.getElementById(`title-slide-${i}`);
        if (titleEl && sData.title) {
          titleEl.textContent = sData.title;
          titleEl.setAttribute('data-type-text', sData.title);
        }
        const eyebrowEl = document.getElementById(`eyebrow-slide-${i}`);
        if (eyebrowEl && sData.category) {
          eyebrowEl.textContent = sData.category;
        }
        const descEl = document.getElementById(`desc-slide-${i}`);
        if (descEl && sData.desc) {
          descEl.textContent = sData.desc;
        }
        const imgEl = document.getElementById(`img-slide-${i}`);
        const defaultImg = defaultPortfolioData.showcases?.[sKey]?.slideImage || `./assets/images/slide-${i}-branding-design.png`;
        const targetSrc = (sData && sData.slideImage && sData.slideImage.trim() !== '') ? sData.slideImage : defaultImg;
        if (imgEl && targetSrc) {
          imgEl.src = targetSrc;
          imgEl.onerror = () => {
            if (defaultImg && imgEl.src !== defaultImg) {
              imgEl.src = defaultImg;
            }
          };
          const card = imgEl.closest('.full-showcase-card');
          if (imgEl.complete && imgEl.naturalHeight !== 0) {
            if (card) card.classList.add('revealed');
          } else {
            imgEl.addEventListener('load', () => {
              if (card) card.classList.add('revealed');
            });
          }
          const container = imgEl.closest('.showcase-img-container');
          if (container) container.setAttribute('data-zoom-src', targetSrc);
          const zoomBtn = document.querySelector(`.modal-zoom-btn[data-slide="${i}"]`);
          if (zoomBtn) zoomBtn.setAttribute('data-img', targetSrc);
        }
      }
    }

    // Footer
    const footerName = document.getElementById('footer-brand-name');
    if (footerName) footerName.textContent = activeName;
    const footerCopy = document.getElementById('footer-copy-name');
    if (footerCopy) footerCopy.textContent = activeName;

    // Attach click for all full slide zoom buttons
    document.querySelectorAll('.full-slide-view-btn').forEach(btn => {
      btn.onclick = () => {
        const fullImg = btn.getAttribute('data-full-img');
        openGenericLightbox(fullImg, "Full Presentation Slide Showcase");
      };
    });

    // Attach click for all modal zoom buttons
    document.querySelectorAll('.modal-zoom-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const img = btn.getAttribute('data-img');
        const title = btn.getAttribute('data-title') || "Project Showcase";
        openGenericLightbox(img, title);
      };
    });

    // Attach click for interactive tiles in slides 6-10
    document.querySelectorAll('[data-zoom-src]').forEach(tile => {
      tile.onclick = () => {
        const src = tile.getAttribute('data-zoom-src');
        openGenericLightbox(src, "Project Mockup View");
      };
    });

    // Reattach logo cards click
    document.querySelectorAll('.logo-card').forEach(card => {
      card.onclick = () => {
        const id = card.getAttribute('data-logo-id');
        openLogoLightbox(id);
      };
    });

    // Initialize observers
    initScrollAnimations();
    initTypewriterEffect();
    initHeroParallax();
    init3DTilts();
  }

  function formatQuote(quoteText) {
    if (quoteText.toLowerCase().includes('curiosity')) {
      return quoteText.replace(/curiosity/i, '<span class="quote-red">$&</span>');
    }
    return quoteText;
  }

  // ==========================================================================
  // 5. SCROLL INTERSECTION OBSERVER (Side-in & Curtain Unroll Animations)
  // ==========================================================================
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.anim-slide-left, .anim-slide-right, .anim-unroll-down');

    function checkVisibility() {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      animatedElements.forEach(el => {
        if (el.classList.contains('revealed')) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight + 250 && rect.bottom > -150) {
          el.classList.add('revealed');
        }
      });
    }

    // Immediate check
    checkVisibility();

    // Scroll & resize listeners with requestAnimationFrame
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkVisibility();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    window.addEventListener('resize', checkVisibility, { passive: true });

    // IntersectionObserver as secondary trigger
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, {
        root: null,
        threshold: 0,
        rootMargin: "250px 0px 250px 0px"
      });

      animatedElements.forEach(el => observer.observe(el));
    }
  }

  // ==========================================================================
  // 6. TYPEWRITER / CHARACTER WRITE-IN EFFECT ("লেখাগুলা লিখে লিখে আসে")
  // ==========================================================================
  function initTypewriterEffect() {
    const targets = document.querySelectorAll('.dynamic-typewriter-target');

    const typeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('typing-active')) {
          startTypewriter(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15
    });

    targets.forEach(t => {
      const rect = t.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        startTypewriter(t);
      }
      typeObserver.observe(t);
    });
  }

  function startTypewriter(element) {
    if (element.classList.contains('typing-active')) return;
    element.classList.add('typing-active');
    const fullText = element.getAttribute('data-type-text') || element.textContent.trim();
    if (!fullText) return;

    // Check if there is a prefix and accent
    const prefix = element.getAttribute('data-type-prefix');
    const accent = element.getAttribute('data-type-accent');

    if (prefix && accent) {
      element.innerHTML = '';
      const prefixSpan = document.createElement('span');
      const accentSpan = document.createElement('span');
      accentSpan.className = 'text-red';
      element.appendChild(prefixSpan);
      element.appendChild(accentSpan);

      const prefixChars = [...prefix];
      const accentChars = [...accent];
      let pIdx = 0;
      let aIdx = 0;

      function typeNext() {
        if (pIdx < prefixChars.length) {
          const s = document.createElement('span');
          s.className = 'type-char';
          s.textContent = prefixChars[pIdx] === ' ' ? '\u00A0' : prefixChars[pIdx];
          prefixSpan.appendChild(s);
          pIdx++;
          playTypeTick();
          setTimeout(typeNext, 35);
        } else if (aIdx < accentChars.length) {
          const s = document.createElement('span');
          s.className = 'type-char';
          s.textContent = accentChars[aIdx] === ' ' ? '\u00A0' : accentChars[aIdx];
          accentSpan.appendChild(s);
          aIdx++;
          playTypeTick();
          setTimeout(typeNext, 35);
        } else {
          element.classList.add('typed');
        }
      }
      typeNext();
    } else {
      element.innerHTML = '';
      const chars = [...fullText];
      let idx = 0;

      function typeNextChar() {
        if (idx < chars.length) {
          const s = document.createElement('span');
          s.className = 'type-char';
          s.textContent = chars[idx] === ' ' ? '\u00A0' : chars[idx];
          element.appendChild(s);
          idx++;
          playTypeTick();
          setTimeout(typeNextChar, 35);
        } else {
          element.classList.add('typed');
        }
      }
      typeNextChar();
    }
    playTypeTick();
  }

  // ==========================================================================
  // 7. HERO PARALLAX & 3D TILTS
  // ==========================================================================
  function initHeroParallax() {
    const heroStage = document.getElementById('hero-stage');
    const mascot = document.getElementById('hero-mascot-box');
    const sticker = document.getElementById('hero-sticker-wrapper');
    const tornBanner = document.getElementById('hero-torn-banner');
    if (!heroStage) return;

    heroStage.addEventListener('mousemove', (e) => {
      const rect = heroStage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      if (mascot) {
        mascot.style.transform = `translate(${x * 35}px, ${y * 35}px) rotate(${x * 20}deg)`;
      }
      if (sticker) {
        sticker.style.transform = `translate(${x * -25}px, ${y * -25}px) rotate(${-12 + x * 15}deg)`;
      }
      if (tornBanner) {
        tornBanner.style.transform = `rotate(${-2 + x * 4}deg) translateY(${y * 8}px)`;
      }
    });

    heroStage.addEventListener('mouseleave', () => {
      if (mascot) mascot.style.transform = 'translate(0px, 0px) rotate(0deg)';
      if (sticker) sticker.style.transform = 'translate(0px, 0px) rotate(-12deg)';
      if (tornBanner) tornBanner.style.transform = 'rotate(-2deg)';
    });

    if (mascot) {
      mascot.onclick = () => {
        playTone(750, 'sine', 0.1, 0.05);
        mascot.animate([
          { transform: 'scale(1) rotate(0deg)' },
          { transform: 'scale(1.3) rotate(-25deg)' },
          { transform: 'scale(0.9) rotate(15deg)' },
          { transform: 'scale(1) rotate(0deg)' }
        ], { duration: 500, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' });
        showToast("🎨 Designed with passion & precision!");
      };
    }

    const stickerCard = document.getElementById('hero-sticker-card');
    if (stickerCard) {
      stickerCard.onclick = () => {
        playTornRip();
        stickerCard.animate([
          { transform: 'rotate(-12deg) scale(1)' },
          { transform: 'rotate(20deg) scale(1.2)' },
          { transform: 'rotate(-18deg) scale(1.1)' },
          { transform: 'rotate(-12deg) scale(1)' }
        ], { duration: 600, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' });
        showToast("✦ Sleep. Design. Repeat.");
      };
    }
  }

  function init3DTilts() {
    const cards = document.querySelectorAll('.logo-card');
    cards.forEach(card => {
      const inner = card.querySelector('.logo-card-inner');
      const glare = card.querySelector('.card-glare');
      if (!inner) return;

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

        if (glare) {
          const glareX = (x / rect.width) * 100;
          const glareY = (y / rect.height) * 100;
          glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.25) 0%, transparent 60%)`;
          glare.style.opacity = '1';
        }
      });

      card.addEventListener('mouseleave', () => {
        inner.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        if (glare) glare.style.opacity = '0';
      });
    });
  }

  // ==========================================================================
  // 8. SCROLL PROGRESS & SECTION TRACKING (Dots 01 to 10)
  // ==========================================================================
  function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    const navbar = document.querySelector('.navbar');
    const trackerDots = document.querySelectorAll('.tracker-dot');
    const sections = document.querySelectorAll('.slide-section');

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (progressBar) progressBar.style.width = `${scrollPercent}%`;

      if (navbar) {
        if (scrollTop > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
      }

      let currentSlide = '1';
      sections.forEach(section => {
        const top = section.offsetTop - 250;
        if (scrollTop >= top) {
          currentSlide = section.getAttribute('data-slide-index') || '1';
        }
      });

      trackerDots.forEach(dot => {
        if (dot.getAttribute('data-slide') === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    });
  }

  // ==========================================================================
  // 9. LIGHTBOX & FULLSCREEN CASE STUDY MODAL
  // ==========================================================================
  const lightboxDialog = document.getElementById('lightbox-dialog');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCat = document.getElementById('lightbox-cat');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxSwatches = document.getElementById('lightbox-swatches');
  const lightboxSwatchesTitle = document.getElementById('lightbox-swatches-title');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

  function openLogoLightbox(logoId) {
    const logo = (portfolioData.logofolio.logos || []).find(l => l.id === logoId);
    if (!logo || !lightboxDialog) return;

    if (lightboxImg) lightboxImg.src = logo.image;
    if (lightboxTitle) lightboxTitle.textContent = logo.name;
    if (lightboxCat) lightboxCat.textContent = logo.category.toUpperCase();
    if (lightboxDesc) lightboxDesc.textContent = logo.description;
    if (lightboxSwatchesTitle) lightboxSwatchesTitle.style.display = 'block';

    if (lightboxSwatches && logo.colors) {
      lightboxSwatches.innerHTML = logo.colors.map(hex => `
        <div class="swatch-pill" style="background-color: ${hex};" title="Click to copy ${hex}" data-hex="${hex}"></div>
      `).join('');

      lightboxSwatches.querySelectorAll('.swatch-pill').forEach(pill => {
        pill.onclick = () => {
          const hex = pill.getAttribute('data-hex');
          navigator.clipboard.writeText(hex).then(() => {
            showToast(`Copied color ${hex} to clipboard!`);
          });
        };
      });
    }

    lightboxDialog.showModal();
    playClick();
  }

  function openGenericLightbox(imageUrl, title = "High-Res Case Study") {
    if (!lightboxDialog) return;
    if (lightboxImg) lightboxImg.src = imageUrl;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxCat) lightboxCat.textContent = "PORTFOLIO 2026 ARCHIVE";
    if (lightboxDesc) lightboxDesc.textContent = "High-definition creative case study presentation curated for international design standards.";
    if (lightboxSwatchesTitle) lightboxSwatchesTitle.style.display = 'none';
    if (lightboxSwatches) lightboxSwatches.innerHTML = '';
    lightboxDialog.showModal();
    playClick();
  }

  if (lightboxCloseBtn && lightboxDialog) {
    lightboxCloseBtn.onclick = () => {
      lightboxDialog.close();
      playClick();
    };
    lightboxDialog.onclick = (e) => {
      const rect = lightboxDialog.getBoundingClientRect();
      const isIn = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height
        && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isIn) lightboxDialog.close();
    };
  }

  // QR Code frame click
  const qrFrame = document.getElementById('qr-frame');
  if (qrFrame) {
    qrFrame.onclick = () => {
      openGenericLightbox(portfolioData.skills.contact.qrImage, "Scan QR to Connect");
    };
  }

  // Email copy button
  const copyEmailBtn = document.getElementById('contact-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.onclick = (e) => {
      e.preventDefault();
      const email = portfolioData.skills.contact.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied to clipboard! ✉️");
        playSuccess();
      });
    };
  }

  // ==========================================================================
  // 10. ADMIN CONTROL CENTER (AUTHENTICATION & DASHBOARD)
  // ==========================================================================
  let isAdminUnlocked = false;

  const adminTriggerBtn = document.getElementById('admin-trigger-btn');
  const footerAdminLink = document.getElementById('footer-admin-link');
  const authDialog = document.getElementById('admin-auth-dialog');
  const authForm = document.getElementById('admin-auth-form');
  const passcodeInput = document.getElementById('admin-passcode-input');
  const authError = document.getElementById('auth-error-msg');
  const authCancelBtn = document.getElementById('auth-cancel-btn');
  const togglePasscodeBtn = document.getElementById('toggle-passcode-vis');

  const adminDashDialog = document.getElementById('admin-dashboard-dialog');
  const adminCloseBtn = document.getElementById('admin-close-btn');

  function openAdminPortal() {
    isAdminUnlocked = true;
    openAdminDashboard();
  }

  if (adminTriggerBtn) adminTriggerBtn.onclick = openAdminPortal;
  if (footerAdminLink) footerAdminLink.onclick = openAdminPortal;

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
      if (
        e.key === 'A' || e.key === 'a' || e.code === 'KeyA' ||
        e.key === '+' || e.key === '=' || e.code === 'Equal' || e.code === 'NumpadAdd'
      ) {
        e.preventDefault();
        isAdminUnlocked = true;
        openAdminDashboard();
      }
    }
  });

  if (togglePasscodeBtn && passcodeInput) {
    togglePasscodeBtn.onclick = () => {
      passcodeInput.type = passcodeInput.type === 'password' ? 'text' : 'password';
    };
  }

  if (authCancelBtn && authDialog) {
    authCancelBtn.onclick = () => {
      authDialog.close();
      playClick();
    };
  }

  if (authForm) {
    authForm.onsubmit = (e) => {
      e.preventDefault();
      const entered = (passcodeInput ? passcodeInput.value : '').trim();
      const correct = portfolioData.profile.adminPasscode || 'sakir2026';

      if (entered === correct) {
        isAdminUnlocked = true;
        authDialog.close();
        playSuccess();
        showToast("Admin access granted! Welcome back.");
        openAdminDashboard();
      } else {
        playTone(220, 'sawtooth', 0.2, 0.05);
        if (authError) authError.style.display = 'block';
        if (passcodeInput) {
          passcodeInput.value = '';
          passcodeInput.focus();
        }
      }
    };
  }

  function openAdminDashboard() {
    populateAdminFields();
    if (adminDashDialog) {
      adminDashDialog.showModal();
      playClick();
    }
  }

  if (adminCloseBtn && adminDashDialog) {
    adminCloseBtn.onclick = () => {
      adminDashDialog.close();
      playClick();
    };
  }

  // Sidebar Tab Switching
  const adminTabBtns = document.querySelectorAll('.admin-tab-btn');
  const adminTabPanes = document.querySelectorAll('.admin-tab-pane');

  adminTabBtns.forEach(btn => {
    btn.onclick = () => {
      const targetId = btn.getAttribute('data-tab');
      adminTabBtns.forEach(b => b.classList.remove('active'));
      adminTabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
      playClick();
    };
  });

  // Smart Canvas Image Compressor: Keeps base64 lightweight so it fits easily into storage
  function compressImage(file, maxDimension = 1920, quality = 0.88) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          let width = img.width;
          let height = img.height;
          if (width > maxDimension || height > maxDimension) {
            if (width > height) {
              height = Math.round((height * maxDimension) / width);
              width = maxDimension;
            } else {
              width = Math.round((width * maxDimension) / height);
              height = maxDimension;
            }
          }
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          const mime = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
          resolve(canvas.toDataURL(mime, quality));
        };
        img.onerror = () => resolve(e.target.result);
        img.src = e.target.result;
      };
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
    });
  }

  function setupImageUpload(fileInputId, previewImgId, onLoadedCallback) {
    const fileInput = document.getElementById(fileInputId);
    const previewImg = document.getElementById(previewImgId);
    if (!fileInput) return;

    fileInput.onchange = async () => {
      const file = fileInput.files[0];
      if (!file) return;

      showToast("Optimizing & saving image to database... ⏳", 2000);
      const base64Url = await compressImage(file);
      if (base64Url) {
        if (previewImg) previewImg.src = base64Url;
        if (onLoadedCallback) onLoadedCallback(base64Url);
        portfolioData.hasCustomEdits = true;
        renderPortfolio();
        await savePortfolioData(false);
        showToast("Image saved permanently to database! 💾 (Persists on refresh)");
        playSuccess();
      }
    };
  }

  function populateAdminFields() {
    const d = portfolioData;

    // Tab 1: Profile
    const admFirst = document.getElementById('adm-first-name');
    if (admFirst) admFirst.value = d.profile.firstName || "DANGER";
    const admLast = document.getElementById('adm-last-name');
    if (admLast) admLast.value = d.profile.lastName || "SHAWON";
    const admRole = document.getElementById('adm-role-title');
    if (admRole) admRole.value = d.profile.role || "GRAPHIC DESIGNER • DINAJPUR, BANGLADESH";
    const admYear = document.getElementById('adm-year');
    if (admYear) admYear.value = d.profile.year || "2026";
    const admAvail = document.getElementById('adm-availability');
    if (admAvail) admAvail.value = d.profile.availability || "AVAILABLE FOR CLIENT PROJECTS";

    // Tab 2: Hero
    const admEyebrow = document.getElementById('adm-hero-eyebrow');
    if (admEyebrow) admEyebrow.value = d.hero.eyebrow;
    const admTorn = document.getElementById('adm-hero-torn-text');
    if (admTorn) admTorn.value = d.hero.tornText;
    const admSticker = document.getElementById('adm-hero-sticker');
    if (admSticker) admSticker.value = d.hero.stickerText;

    const admMascotPrev = document.getElementById('adm-mascot-preview');
    if (admMascotPrev) admMascotPrev.src = d.hero.mascotImage;
    const admStickerPrev = document.getElementById('adm-sticker-preview');
    if (admStickerPrev) admStickerPrev.src = d.hero.stickerImage;

    // Tab 3: About
    const admBio = document.getElementById('adm-about-paragraphs');
    if (admBio) admBio.value = (d.about.paragraphs || []).join('\n\n');
    const admQuote = document.getElementById('adm-about-quote');
    if (admQuote) admQuote.value = d.about.quote;
    const admPortraitPrev = document.getElementById('adm-portrait-preview');
    if (admPortraitPrev && d.about.portraitImage) admPortraitPrev.src = d.about.portraitImage;

    // Tab 4: Skills & Tools
    const admWhatIDo = document.getElementById('adm-what-i-do');
    if (admWhatIDo) admWhatIDo.value = (d.skills.whatIDo || []).join('\n');
    const admSoftSkills = document.getElementById('adm-soft-skills');
    if (admSoftSkills) admSoftSkills.value = (d.skills.softSkills || []).join('\n');
    const admHobbies = document.getElementById('adm-hobbies');
    if (admHobbies) admHobbies.value = (d.skills.hobbies || []).join('\n');

    renderAdminVisualTools();
    renderAdminGenAITools();
    renderAdminLanguages();

    const admEmail = document.getElementById('adm-contact-email');
    if (admEmail) admEmail.value = d.skills.contact.email;
    const admPhone = document.getElementById('adm-contact-phone');
    if (admPhone) admPhone.value = d.skills.contact.phone;
    const admLinkedin = document.getElementById('adm-contact-linkedin');
    if (admLinkedin) admLinkedin.value = d.skills.contact.linkedin;
    const admBehance = document.getElementById('adm-contact-behance');
    if (admBehance) admBehance.value = d.skills.contact.behance;
    const admQrPrev = document.getElementById('adm-qr-preview');
    if (admQrPrev && d.skills.contact.qrImage) admQrPrev.src = d.skills.contact.qrImage;

    // Tab 5: Contents
    const admContentsTitle = document.getElementById('adm-contents-title');
    if (admContentsTitle) admContentsTitle.value = d.contents?.title || "CONTENTS";
    const admContentsPrev = document.getElementById('adm-contents-slide-preview');
    if (admContentsPrev) admContentsPrev.src = d.contents?.slideImage || './assets/images/slide-4-contents.png';
    renderAdminContentsCategories();

    // Tab 6: Logofolio
    const admLogofolioEyebrow = document.getElementById('adm-logofolio-eyebrow');
    if (admLogofolioEyebrow) admLogofolioEyebrow.value = d.logofolio?.eyebrow || "BRANDING";
    const admLogofolioTitle = document.getElementById('adm-logofolio-title');
    if (admLogofolioTitle) admLogofolioTitle.value = d.logofolio?.title || "LOGOFOLIO";
    const admLogofolioPrev = document.getElementById('adm-logofolio-slide-preview');
    if (admLogofolioPrev) admLogofolioPrev.src = d.logofolio?.slideImage || './assets/images/slide-5-logofolio.png';
    renderAdminLogosEditor();

    // Tab 7: Showcases (Slides 6-12)
    for (let i = 6; i <= 12; i++) {
      const sKey = `slide${i}`;
      const sData = d.showcases?.[sKey];
      const titleInput = document.getElementById(`adm-s${i}-title`);
      if (titleInput && sData?.title) titleInput.value = sData.title;
      const descInput = document.getElementById(`adm-s${i}-desc`);
      if (descInput && sData?.desc) descInput.value = sData.desc;
    }

    // Tab: Theme & Colors Studio
    if (d.theme) {
      applyTheme(d.theme, true);
    }
  }

  // Setup file uploads for hero, about, qr
  setupImageUpload('adm-hero-mascot-file', 'adm-mascot-preview', (base64) => {
    portfolioData.hero.mascotImage = base64;
    const heroMascot = document.getElementById('hero-mascot-img');
    if (heroMascot) heroMascot.src = base64;
  });
  setupImageUpload('adm-hero-sticker-file', 'adm-sticker-preview', (base64) => {
    portfolioData.hero.stickerImage = base64;
  });
  setupImageUpload('adm-portrait-file', 'adm-portrait-preview', (base64) => {
    portfolioData.about.portraitImage = base64;
    const pImg = document.getElementById('about-portrait-img');
    if (pImg) pImg.src = base64;
  });
  setupImageUpload('adm-qr-file', 'adm-qr-preview', (base64) => {
    portfolioData.skills.contact.qrImage = base64;
    const qrImg = document.getElementById('skills-qr-img');
    if (qrImg) qrImg.src = base64;
  });

  // Setup file uploads for Slide 4 & Slide 5
  setupImageUpload('adm-contents-slide-file', 'adm-contents-slide-preview', (base64) => {
    if (!portfolioData.contents) portfolioData.contents = {};
    portfolioData.contents.slideImage = base64;
  });
  setupImageUpload('adm-logofolio-slide-file', 'adm-logofolio-slide-preview', (base64) => {
    if (!portfolioData.logofolio) portfolioData.logofolio = {};
    portfolioData.logofolio.slideImage = base64;
  });

  // Setup file uploads for slides 6-12
  for (let i = 6; i <= 12; i++) {
    setupImageUpload(`adm-s${i}-file`, null, (base64) => {
      if (!portfolioData.showcases) portfolioData.showcases = {};
      const sKey = `slide${i}`;
      if (!portfolioData.showcases[sKey]) portfolioData.showcases[sKey] = {};
      portfolioData.showcases[sKey].slideImage = base64;
      const sImg = document.getElementById(`img-slide-${i}`);
      if (sImg) sImg.src = base64;
    });
  }

  // ==========================================================================
  // TAB 4: VISUAL TOOLS, GEN AI STACK & LANGUAGES EDITORS
  // ==========================================================================
  function renderAdminVisualTools() {
    const container = document.getElementById('adm-visual-tools-list');
    if (!container) return;
    if (!portfolioData.skills?.tools?.visual) {
      if (!portfolioData.skills) portfolioData.skills = {};
      if (!portfolioData.skills.tools) portfolioData.skills.tools = {};
      portfolioData.skills.tools.visual = JSON.parse(JSON.stringify(defaultPortfolioData.skills.tools.visual));
    }
    const tools = portfolioData.skills.tools.visual;
    container.innerHTML = tools.map((t, idx) => {
      let iconHtml = '';
      if (t.type === 'svg' && TOOL_SVG_MAP[t.svgType]) {
        iconHtml = `<div style="width:24px; height:24px; display:flex; align-items:center; justify-content:center;">${TOOL_SVG_MAP[t.svgType]}</div>`;
      } else if (t.type === 'canva') {
        iconHtml = `<span style="display:inline-block; padding:2px 6px; border-radius:4px; font-size:10px; font-weight:800; background:#00C4CC; color:#fff;">Canva</span>`;
      } else {
        iconHtml = `<span style="display:inline-block; padding:2px 6px; border-radius:4px; font-size:11px; font-weight:700; background:${t.bg || '#222'}; color:${t.color || '#fff'};">${t.badge || t.name.slice(0, 2)}</span>`;
      }
      return `
        <div class="adm-tool-chip" style="display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); border-radius:20px; padding:4px 12px 4px 8px;">
          ${iconHtml}
          <span style="font-size:0.8rem; color:#fff; font-weight:500;">${t.name}</span>
          <button type="button" class="adm-del-visual-tool-btn" data-tool-idx="${idx}" style="background:none; border:none; color:#FF5555; cursor:pointer; font-size:1rem; padding:0 2px; line-height:1;" title="Remove ${t.name}">✕</button>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.adm-del-visual-tool-btn').forEach(btn => {
      btn.onclick = async (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-tool-idx'), 10);
        portfolioData.skills.tools.visual.splice(idx, 1);
        renderAdminVisualTools();
        renderPortfolio();
        await savePortfolioData(false);
        showToast("Tool removed! 🗑️");
      };
    });
  }

  const addVisualToolBtn = document.getElementById('adm-add-visual-tool-btn');
  if (addVisualToolBtn) {
    addVisualToolBtn.onclick = async () => {
      const nameInput = document.getElementById('adm-new-tool-name');
      const badgeInput = document.getElementById('adm-new-tool-badge');
      const bgInput = document.getElementById('adm-new-tool-bg');
      const colorInput = document.getElementById('adm-new-tool-color');

      const name = nameInput ? nameInput.value.trim() : '';
      if (!name) {
        alert("Please enter a tool name (e.g. InDesign).");
        return;
      }
      const badge = (badgeInput && badgeInput.value.trim()) ? badgeInput.value.trim() : name.slice(0, 2);
      const bg = bgInput ? bgInput.value : '#49021F';
      const color = colorInput ? colorInput.value : '#FF3366';

      if (!portfolioData.skills.tools) portfolioData.skills.tools = {};
      if (!portfolioData.skills.tools.visual) portfolioData.skills.tools.visual = [];

      portfolioData.skills.tools.visual.push({
        id: 'tool-' + Date.now(),
        name: name,
        badge: badge,
        bg: bg,
        color: color,
        border: color
      });

      if (nameInput) nameInput.value = '';
      if (badgeInput) badgeInput.value = '';

      renderAdminVisualTools();
      renderPortfolio();
      await savePortfolioData(false);
      showToast(`Added ${name} to visual tools! 🎨`);
    };
  }

  function renderAdminGenAITools() {
    const container = document.getElementById('adm-genai-tools-list');
    if (!container) return;
    if (!portfolioData.skills?.tools?.genai) {
      if (!portfolioData.skills) portfolioData.skills = {};
      if (!portfolioData.skills.tools) portfolioData.skills.tools = {};
      portfolioData.skills.tools.genai = JSON.parse(JSON.stringify(defaultPortfolioData.skills.tools.genai));
    }
    const tools = portfolioData.skills.tools.genai;
    container.innerHTML = tools.map((t, idx) => {
      let iconHtml = '';
      const svg = TOOL_SVG_MAP[t.svgType] || (t.type === 'svg' && TOOL_SVG_MAP[t.id]);
      if (svg) {
        iconHtml = `<div style="width:22px; height:22px; display:flex; align-items:center; justify-content:center;">${svg}</div>`;
      } else {
        iconHtml = `<span style="display:inline-block; padding:2px 6px; border-radius:4px; font-size:11px; font-weight:700; background:#222; color:#fff;">${t.badge || t.name.slice(0, 2)}</span>`;
      }
      return `
        <div class="adm-tool-chip" style="display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); border-radius:20px; padding:4px 12px 4px 8px;">
          ${iconHtml}
          <span style="font-size:0.8rem; color:#fff; font-weight:500;">${t.name}</span>
          <button type="button" class="adm-del-genai-tool-btn" data-tool-idx="${idx}" style="background:none; border:none; color:#FF5555; cursor:pointer; font-size:1rem; padding:0 2px; line-height:1;" title="Remove ${t.name}">✕</button>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.adm-del-genai-tool-btn').forEach(btn => {
      btn.onclick = async (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-tool-idx'), 10);
        portfolioData.skills.tools.genai.splice(idx, 1);
        renderAdminGenAITools();
        renderPortfolio();
        await savePortfolioData(false);
        showToast("Gen AI tool removed! 🗑️");
      };
    });
  }

  const GENAI_PRESETS = {
    chatgpt: { id: "chatgpt", name: "ChatGPT (OpenAI)", type: "svg", svgType: "chatgpt" },
    gemini: { id: "gemini", name: "Google Gemini", type: "svg", svgType: "gemini" },
    midjourney: { id: "midjourney", name: "Midjourney", type: "svg", svgType: "midjourney" },
    claude: { id: "claude", name: "Claude / Anthropic", type: "svg", svgType: "claude" }
  };

  document.querySelectorAll('.adm-preset-genai-btn').forEach(btn => {
    btn.onclick = async () => {
      const presetKey = btn.getAttribute('data-preset');
      const preset = GENAI_PRESETS[presetKey];
      if (!preset) return;

      if (!portfolioData.skills.tools) portfolioData.skills.tools = {};
      if (!portfolioData.skills.tools.genai) portfolioData.skills.tools.genai = [];

      const exists = portfolioData.skills.tools.genai.some(t => (t.svgType === preset.svgType || t.id === preset.id));
      if (exists) {
        showToast(`${preset.name} is already in your stack!`);
        return;
      }

      portfolioData.skills.tools.genai.push(JSON.parse(JSON.stringify(preset)));
      renderAdminGenAITools();
      renderPortfolio();
      await savePortfolioData(false);
      showToast(`Added ${preset.name} to Gen AI stack! 🤖`);
    };
  });

  function renderAdminLanguages() {
    const container = document.getElementById('adm-languages-container');
    if (!container) return;
    if (!portfolioData.skills?.languages) {
      if (!portfolioData.skills) portfolioData.skills = {};
      portfolioData.skills.languages = JSON.parse(JSON.stringify(defaultPortfolioData.skills.languages));
    }
    const langs = portfolioData.skills.languages;
    container.innerHTML = langs.map((l, idx) => `
      <div class="adm-language-row" data-lang-idx="${idx}" style="display:grid; grid-template-columns: 1fr 1fr auto; gap:8px; align-items:center;">
        <input type="text" class="form-input adm-lang-name" value="${l.lang}" placeholder="Language (e.g. English)" style="padding:6px 10px; font-size:0.8rem;" />
        <input type="text" class="form-input adm-lang-level" value="${l.level}" placeholder="Proficiency (e.g. Fluent, Native)" style="padding:6px 10px; font-size:0.8rem;" />
        <button type="button" class="adm-del-lang-btn" data-lang-idx="${idx}" style="background:none; border:none; color:#FF5555; cursor:pointer; font-size:1.1rem; padding:4px 8px;" title="Remove language">✕</button>
      </div>
    `).join('');

    container.querySelectorAll('.adm-del-lang-btn').forEach(btn => {
      btn.onclick = async (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-lang-idx'), 10);
        portfolioData.skills.languages.splice(idx, 1);
        renderAdminLanguages();
        renderPortfolio();
        await savePortfolioData(false);
        showToast("Language removed! 🗑️");
      };
    });
  }

  const addLangBtn = document.getElementById('adm-add-language-btn');
  if (addLangBtn) {
    addLangBtn.onclick = async () => {
      if (!portfolioData.skills) portfolioData.skills = {};
      if (!portfolioData.skills.languages) portfolioData.skills.languages = [];
      portfolioData.skills.languages.push({ lang: "Spanish", level: "Conversational" });
      renderAdminLanguages();
      renderPortfolio();
      await savePortfolioData(false);
      showToast("Added new language field! 🌐");
    };
  }

  // ==========================================================================
  // TAB 5: CONTENTS DIRECTORY CATEGORIES & ITEMS
  // ==========================================================================
  function renderAdminContentsCategories() {
    const container = document.getElementById('adm-contents-categories-container');
    if (!container) return;
    if (!portfolioData.contents?.categories) {
      if (!portfolioData.contents) portfolioData.contents = {};
      portfolioData.contents.categories = JSON.parse(JSON.stringify(defaultPortfolioData.contents.categories));
    }
    const cats = portfolioData.contents.categories;
    container.innerHTML = cats.map((cat, idx) => `
      <div class="adm-category-box" data-cat-idx="${idx}" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:12px 14px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <div style="display:flex; align-items:center; gap:8px; flex:1; margin-right:12px;">
            <span style="font-size:0.75rem; color:var(--accent-red); font-weight:700;">CATEGORY:</span>
            <input type="text" class="form-input adm-cat-name-input" data-cat-idx="${idx}" value="${cat.name}" placeholder="Category Name" style="padding:4px 8px; font-weight:700; text-transform:uppercase; font-size:0.8rem;" />
          </div>
          <button type="button" class="adm-del-cat-btn" data-cat-idx="${idx}" style="background:none; border:none; color:#FF5555; cursor:pointer; font-size:0.75rem;">✕ Remove</button>
        </div>
        <div>
          <label class="form-label" style="font-size:0.7rem; margin-bottom:4px;">Items (one per line):</label>
          <textarea class="form-textarea adm-cat-items-input" data-cat-idx="${idx}" rows="3" style="font-size:0.8rem; padding:6px 10px;" placeholder="Logofolio&#10;Branding Design">${(cat.items || []).join('\n')}</textarea>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.adm-del-cat-btn').forEach(btn => {
      btn.onclick = async (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-cat-idx'), 10);
        portfolioData.contents.categories.splice(idx, 1);
        renderAdminContentsCategories();
        renderPortfolio();
        await savePortfolioData(false);
        showToast("Category removed! 🗑️");
      };
    });
  }

  const addCatBtn = document.getElementById('adm-add-category-btn');
  if (addCatBtn) {
    addCatBtn.onclick = async () => {
      if (!portfolioData.contents) portfolioData.contents = {};
      if (!portfolioData.contents.categories) portfolioData.contents.categories = [];
      portfolioData.contents.categories.push({
        name: "NEW CATEGORY",
        items: ["Design Concept", "Case Study"]
      });
      renderAdminContentsCategories();
      renderPortfolio();
      await savePortfolioData(false);
      showToast("Added new category! 📁");
    };
  }

  // ==========================================================================
  // TAB 6: LOGOFOLIO CARDS EDITOR & CHOOSE FILE IMAGE UPLOADER
  // ==========================================================================
  function renderAdminLogosEditor() {
    const container = document.getElementById('adm-logos-editor-container');
    if (!container) return;
    if (!portfolioData.logofolio?.logos) {
      if (!portfolioData.logofolio) portfolioData.logofolio = {};
      portfolioData.logofolio.logos = JSON.parse(JSON.stringify(defaultPortfolioData.logofolio.logos));
    }
    const logos = portfolioData.logofolio.logos;
    container.innerHTML = logos.map((logo, idx) => `
      <div class="adm-logo-editor-item" data-logo-index="${idx}" style="display:grid; grid-template-columns: 80px 1fr auto; gap:12px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:12px; align-items:center;">
        <div style="text-align:center;">
          <img src="${logo.image || './assets/images/logo-sonicwave.png'}" class="adm-logo-thumb" id="adm-logo-thumb-${idx}" alt="${logo.name}" style="width:70px; height:70px; object-fit:cover; border-radius:6px; border:1px solid rgba(255,255,255,0.2); margin-bottom:6px; display:block;" />
          <label class="pill-btn" style="cursor:pointer; display:inline-block; font-size:0.68rem; padding:4px 6px; width:100%; text-align:center; box-sizing:border-box; background:rgba(255,255,255,0.08);">
            Choose File
            <input type="file" accept="image/*" class="adm-logo-file-input" data-logo-index="${idx}" style="display:none;" />
          </label>
        </div>
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
            <div>
              <label class="form-label" style="font-size:0.7rem; margin-bottom:2px;">Logo Name</label>
              <input type="text" class="form-input adm-logo-name-input" data-logo-index="${idx}" value="${logo.name}" placeholder="e.g. SonicWave" style="padding:6px 10px; font-size:0.8rem;" />
            </div>
            <div>
              <label class="form-label" style="font-size:0.7rem; margin-bottom:2px;">Category / Tag</label>
              <input type="text" class="form-input adm-logo-cat-input" data-logo-index="${idx}" value="${logo.category}" placeholder="e.g. Audio & Acoustics" style="padding:6px 10px; font-size:0.8rem;" />
            </div>
          </div>
          <div>
            <label class="form-label" style="font-size:0.7rem; margin-bottom:2px;">Description</label>
            <input type="text" class="form-input adm-logo-desc-input" data-logo-index="${idx}" value="${logo.description || ''}" placeholder="Brief client/project note" style="padding:6px 10px; font-size:0.8rem;" />
          </div>
        </div>
        <div>
          <button type="button" class="adm-del-logo-btn" data-logo-index="${idx}" style="background:none; border:none; color:#FF5555; cursor:pointer; font-size:0.8rem; padding:8px;" title="Remove this logo card">✕</button>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.adm-del-logo-btn').forEach(btn => {
      btn.onclick = async (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-logo-index'), 10);
        portfolioData.logofolio.logos.splice(idx, 1);
        renderAdminLogosEditor();
        renderPortfolio();
        await savePortfolioData(false);
        showToast("Logo removed! 🗑️");
      };
    });
  }

  const addLogoBtn = document.getElementById('adm-add-logo-btn');
  if (addLogoBtn) {
    addLogoBtn.onclick = async () => {
      if (!portfolioData.logofolio) portfolioData.logofolio = {};
      if (!portfolioData.logofolio.logos) portfolioData.logofolio.logos = [];
      portfolioData.logofolio.logos.push({
        id: 'logo-' + Date.now(),
        name: 'New Brand Logo',
        category: 'Brand Identity',
        image: './assets/images/logo-sonicwave.png',
        description: 'Custom brand identity design exploration and 3D mockup presentation.'
      });
      renderAdminLogosEditor();
      renderPortfolio();
      await savePortfolioData(false);
      showToast("Added new logo card! Upload mockup with Choose File 🖼️");
    };
  }

  // Event delegation for dynamically added logo image file pickers:
  document.addEventListener('change', async (e) => {
    if (e.target && e.target.classList.contains('adm-logo-file-input')) {
      const idx = parseInt(e.target.getAttribute('data-logo-index'), 10);
      const file = e.target.files[0];
      if (!file) return;

      showToast("Optimizing & saving logo image... ⏳", 2000);
      const base64Url = await compressImage(file, 1600, 0.88);
      if (base64Url && portfolioData.logofolio?.logos?.[idx]) {
        portfolioData.logofolio.logos[idx].image = base64Url;
        const thumb = document.getElementById(`adm-logo-thumb-${idx}`);
        if (thumb) thumb.src = base64Url;
        renderPortfolio();
        await savePortfolioData(false);
        showToast("Logo mockup image saved! 💾 (Persists on refresh)");
        playSuccess();
      }
    }
  });

  // Helper to extract all text inputs from admin
  function collectAllAdminInputs() {
    // Profile
    const fName = document.getElementById('adm-first-name');
    const lName = document.getElementById('adm-last-name');
    if (fName) portfolioData.profile.firstName = fName.value.trim();
    if (lName) portfolioData.profile.lastName = lName.value.trim();
    portfolioData.profile.name = `${portfolioData.profile.firstName || ''} ${portfolioData.profile.lastName || ''}`.trim();
    
    const role = document.getElementById('adm-role-title');
    if (role) portfolioData.profile.role = role.value.trim();
    const year = document.getElementById('adm-year');
    if (year) portfolioData.profile.year = year.value.trim();
    const avail = document.getElementById('adm-availability');
    if (avail) portfolioData.profile.availability = avail.value.trim();

    // Hero
    const eye = document.getElementById('adm-hero-eyebrow');
    if (eye) portfolioData.hero.eyebrow = eye.value.trim();
    const torn = document.getElementById('adm-hero-torn-text');
    if (torn) portfolioData.hero.tornText = torn.value.trim();
    const stText = document.getElementById('adm-hero-sticker');
    if (stText) portfolioData.hero.stickerText = stText.value.trim();

    // About
    portfolioData.about.namePrefix = portfolioData.profile.firstName;
    portfolioData.about.nameAccent = portfolioData.profile.lastName;
    portfolioData.about.subtitle = portfolioData.profile.role;
    const bio = document.getElementById('adm-about-paragraphs');
    if (bio) {
      portfolioData.about.paragraphs = bio.value.split('\n\n').map(p => p.trim()).filter(Boolean);
    }
    const quote = document.getElementById('adm-about-quote');
    if (quote) portfolioData.about.quote = quote.value.trim();

    // Skills & Contact
    const email = document.getElementById('adm-contact-email');
    if (email) portfolioData.skills.contact.email = email.value.trim();
    const phone = document.getElementById('adm-contact-phone');
    if (phone) {
      portfolioData.skills.contact.phone = phone.value.trim();
      portfolioData.skills.contact.whatsapp = phone.value.trim();
    }
    const linkedin = document.getElementById('adm-contact-linkedin');
    if (linkedin) portfolioData.skills.contact.linkedin = linkedin.value.trim();
    const behance = document.getElementById('adm-contact-behance');
    if (behance) {
      portfolioData.skills.contact.behance = behance.value.trim();
      portfolioData.skills.contact.behanceUrl = `https://www.behance.net/${behance.value.trim()}`;
    }

    const whatIDo = document.getElementById('adm-what-i-do');
    if (whatIDo) {
      portfolioData.skills.whatIDo = whatIDo.value.split(/\r?\n|,/).map(s => s.trim()).filter(Boolean);
    }
    const softSkills = document.getElementById('adm-soft-skills');
    if (softSkills) {
      portfolioData.skills.softSkills = softSkills.value.split(/\r?\n|,/).map(s => s.trim()).filter(Boolean);
    }
    const hobbies = document.getElementById('adm-hobbies');
    if (hobbies) {
      portfolioData.skills.hobbies = hobbies.value.split(/\r?\n|,/).map(s => s.trim()).filter(Boolean);
    }

    // Languages
    const langRows = document.querySelectorAll('.adm-language-row');
    if (langRows.length > 0) {
      portfolioData.skills.languages = Array.from(langRows).map(row => {
        const langInput = row.querySelector('.adm-lang-name');
        const lvlInput = row.querySelector('.adm-lang-level');
        return {
          lang: langInput ? langInput.value.trim() : '',
          level: lvlInput ? lvlInput.value.trim() : ''
        };
      }).filter(l => l.lang.length > 0);
    }

    // Contents (Slide 4)
    const cTitle = document.getElementById('adm-contents-title');
    if (cTitle) {
      if (!portfolioData.contents) portfolioData.contents = {};
      portfolioData.contents.title = cTitle.value.trim();
    }
    const catBoxes = document.querySelectorAll('.adm-category-box');
    if (catBoxes.length > 0) {
      portfolioData.contents.categories = Array.from(catBoxes).map(box => {
        const nameInput = box.querySelector('.adm-cat-name-input');
        const itemsTextarea = box.querySelector('.adm-cat-items-input');
        const items = itemsTextarea ? itemsTextarea.value.split(/\r?\n/).map(i => i.trim()).filter(Boolean) : [];
        return {
          name: nameInput ? nameInput.value.trim() : 'CATEGORY',
          items: items
        };
      }).filter(c => c.name.length > 0);
    }

    // Logofolio (Slide 5)
    const lEyebrow = document.getElementById('adm-logofolio-eyebrow');
    if (lEyebrow) {
      if (!portfolioData.logofolio) portfolioData.logofolio = {};
      portfolioData.logofolio.eyebrow = lEyebrow.value.trim();
    }
    const lTitle = document.getElementById('adm-logofolio-title');
    if (lTitle) {
      if (!portfolioData.logofolio) portfolioData.logofolio = {};
      portfolioData.logofolio.title = lTitle.value.trim();
    }
    const logoItems = document.querySelectorAll('.adm-logo-editor-item');
    if (logoItems.length > 0 && portfolioData.logofolio?.logos) {
      logoItems.forEach(item => {
        const idx = parseInt(item.getAttribute('data-logo-index'), 10);
        if (portfolioData.logofolio.logos[idx]) {
          const nameInput = item.querySelector('.adm-logo-name-input');
          const catInput = item.querySelector('.adm-logo-cat-input');
          const descInput = item.querySelector('.adm-logo-desc-input');
          if (nameInput) portfolioData.logofolio.logos[idx].name = nameInput.value.trim();
          if (catInput) portfolioData.logofolio.logos[idx].category = catInput.value.trim();
          if (descInput) portfolioData.logofolio.logos[idx].description = descInput.value.trim();
        }
      });
    }

    // Showcases 6-12 titles & descriptions
    if (!portfolioData.showcases) portfolioData.showcases = {};
    for (let i = 6; i <= 12; i++) {
      const sKey = `slide${i}`;
      if (!portfolioData.showcases[sKey]) portfolioData.showcases[sKey] = {};
      const titleInput = document.getElementById(`adm-s${i}-title`);
      if (titleInput) portfolioData.showcases[sKey].title = titleInput.value.trim();
      const descInput = document.getElementById(`adm-s${i}-desc`);
      if (descInput) portfolioData.showcases[sKey].desc = descInput.value.trim();
    }

    // Theme Colors
    if (!portfolioData.theme) portfolioData.theme = {};
    const fAccent = document.getElementById('color-hex-accent');
    if (fAccent) portfolioData.theme.accentColor = fAccent.value.trim();
    const fCream = document.getElementById('color-hex-cream');
    if (fCream) portfolioData.theme.creamBg = fCream.value.trim();
    const fDark = document.getElementById('color-hex-darkstage');
    if (fDark) portfolioData.theme.darkStageBg = fDark.value.trim();
    const fCard = document.getElementById('color-hex-card');
    if (fCard) portfolioData.theme.darkCardBg = fCard.value.trim();
    const fText = document.getElementById('color-hex-text');
    if (fText) portfolioData.theme.textColor = fText.value.trim();

    portfolioData.hasCustomEdits = true;
  }

  // Real-time live auto-save on typing in admin modal
  let inputAutoSaveTimer = null;
  const adminModalEl = adminDashDialog || document.getElementById('admin-dashboard-dialog');
  if (adminModalEl) {
    adminModalEl.addEventListener('input', (e) => {
      if (e.target.id === 'adm-new-passcode' || e.target.type === 'file') return;
      clearTimeout(inputAutoSaveTimer);
      inputAutoSaveTimer = setTimeout(async () => {
        collectAllAdminInputs();
        renderPortfolio();
        await savePortfolioData(false);
      }, 350);
    });
  }

  // Save Changes button in admin
  const saveAllBtn = document.getElementById('admin-save-btn');
  if (saveAllBtn) {
    saveAllBtn.onclick = async () => {
      collectAllAdminInputs();
      applyTheme(portfolioData.theme, false);
      renderPortfolio();
      await savePortfolioData(true);
      playSuccess();
    };
  }

  // ==========================================================================
  // THEME STUDIO EVENT LISTENERS & COLOR PICKER CONTROLS
  // ==========================================================================
  document.querySelectorAll('.theme-preset-card').forEach(btn => {
    btn.onclick = () => {
      const pKey = btn.getAttribute('data-preset');
      const pData = THEME_PRESETS[pKey];
      if (pData) {
        portfolioData.theme = Object.assign({}, pData, { preset: pKey });
        applyTheme(portfolioData.theme, true);
        showToast(`Theme preset applied: ${pData.name} ✨`);
        playClick();
      }
    };
  });

  function bindColorPair(pickerId, hexId, themeKey) {
    const picker = document.getElementById(pickerId);
    const hex = document.getElementById(hexId);
    if (!picker || !hex) return;

    picker.addEventListener('input', (e) => {
      const val = e.target.value;
      hex.value = val.toUpperCase();
      if (!portfolioData.theme) portfolioData.theme = {};
      portfolioData.theme[themeKey] = val;
      portfolioData.theme.preset = 'custom';
      applyTheme(portfolioData.theme, true);
    });

    hex.addEventListener('input', (e) => {
      let val = e.target.value.trim();
      if (val && !val.startsWith('#')) val = '#' + val;
      if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
        picker.value = val;
        if (!portfolioData.theme) portfolioData.theme = {};
        portfolioData.theme[themeKey] = val;
        portfolioData.theme.preset = 'custom';
        applyTheme(portfolioData.theme, true);
      }
    });
  }

  bindColorPair('color-picker-accent', 'color-hex-accent', 'accentColor');
  bindColorPair('color-picker-cream', 'color-hex-cream', 'creamBg');
  bindColorPair('color-picker-darkstage', 'color-hex-darkstage', 'darkStageBg');
  bindColorPair('color-picker-card', 'color-hex-card', 'darkCardBg');
  bindColorPair('color-picker-text', 'color-hex-text', 'textColor');

  const btnResetTheme = document.getElementById('btn-reset-theme-defaults');
  if (btnResetTheme) {
    btnResetTheme.onclick = () => {
      portfolioData.theme = Object.assign({}, THEME_PRESETS['signature-red'], { preset: 'signature-red' });
      applyTheme(portfolioData.theme, true);
      showToast("Theme restored to Signature Red! 🎨");
      playClick();
    };
  }

  // ==========================================================================
  // CONTENTS DIRECTORY MODAL DIALOG CONTROLLER
  // ==========================================================================
  const contentsDialog = document.getElementById('contents-dialog');
  const navContentsBtn = document.getElementById('nav-contents-btn');
  const openContentsBtn = document.getElementById('open-contents-btn');
  const contentsCloseBtn = document.getElementById('contents-close-btn');

  function openContentsModal() {
    if (contentsDialog) {
      contentsDialog.showModal();
      playClick();
    }
  }

  if (navContentsBtn) navContentsBtn.onclick = openContentsModal;
  if (openContentsBtn) openContentsBtn.onclick = openContentsModal;
  if (contentsCloseBtn && contentsDialog) {
    contentsCloseBtn.onclick = () => {
      contentsDialog.close();
      playClick();
    };
  }
  if (contentsDialog) {
    contentsDialog.onclick = (e) => {
      const rect = contentsDialog.getBoundingClientRect();
      const isIn = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height
        && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isIn) contentsDialog.close();
    };
  }

  // Backup Export & Import
  function exportPortfolioJson() {
    const jsonStr = JSON.stringify(portfolioData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("portfolio.json exported successfully! 💾");
  }

  const exportBtn = document.getElementById('adm-export-json-btn');
  if (exportBtn) exportBtn.onclick = exportPortfolioJson;
  const headerExportBtn = document.getElementById('admin-export-json-btn');
  if (headerExportBtn) headerExportBtn.onclick = exportPortfolioJson;

  const importInput = document.getElementById('adm-import-json-file');
  if (importInput) {
    importInput.onchange = () => {
      const file = importInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          portfolioData = Object.assign({}, defaultPortfolioData, parsed);
          savePortfolioData();
          renderPortfolio();
          populateAdminFields();
          showToast("Portfolio restored from JSON backup! ✨");
        } catch (err) {
          alert("Invalid JSON backup file!");
        }
      };
      reader.readAsText(file);
    };
  }

  // Change Admin Passcode
  const savePasscodeBtn = document.getElementById('adm-save-passcode-btn');
  const newPasscodeInput = document.getElementById('adm-new-passcode');
  if (savePasscodeBtn && newPasscodeInput) {
    savePasscodeBtn.onclick = () => {
      const newPin = newPasscodeInput.value.trim();
      if (!newPin || newPin.length < 4) {
        alert("Please enter a PIN with at least 4 characters.");
        return;
      }
      portfolioData.profile.adminPasscode = newPin;
      savePortfolioData();
      newPasscodeInput.value = '';
      showToast("Admin passcode updated successfully!");
    };
  }

  // Reset to Defaults
  const resetBtn = document.getElementById('adm-reset-defaults-btn');
  if (resetBtn) {
    resetBtn.onclick = async () => {
      if (confirm("Are you sure you want to reset all data back to original defaults? This cannot be undone.")) {
        localStorage.removeItem(STORAGE_KEY);
        try {
          const db = await getIDB();
          if (db) {
            const tx = db.transaction(IDB_STORE, 'readwrite');
            tx.objectStore(IDB_STORE).delete(IDB_KEY);
          }
        } catch (e) {}
        portfolioData = JSON.parse(JSON.stringify(defaultPortfolioData));
        portfolioData.hasCustomEdits = false;
        renderPortfolio();
        populateAdminFields();
        showToast("Restored original defaults!");
      }
    };
  }

  // Sound FX Toggle
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  if (soundToggleBtn) {
    soundToggleBtn.onclick = () => {
      soundEnabled = !soundEnabled;
      soundToggleBtn.style.opacity = soundEnabled ? '1' : '0.4';
      const audioPill = document.getElementById('audio-pill');
      if (audioPill) audioPill.style.display = soundEnabled ? 'flex' : 'none';
      showToast(soundEnabled ? "Interaction sounds enabled 🔊" : "Muted 🔇");
    };
  }

  // Live clock in footer (Dhaka, Bangladesh GMT+6)
  function updateLiveClock() {
    const clockEl = document.getElementById('live-clock');
    if (!clockEl) return;
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const dhakaTime = new Date(utc + (3600000 * 6));
    const hours = String(dhakaTime.getHours()).padStart(2, '0');
    const mins = String(dhakaTime.getMinutes()).padStart(2, '0');
    const secs = String(dhakaTime.getSeconds()).padStart(2, '0');
    clockEl.textContent = `DHAKA, BANGLADESH • ${hours}:${mins}:${secs}`;
  }
  setInterval(updateLiveClock, 1000);
  updateLiveClock();

  // ==========================================================================
  // 11. INITIALIZATION ON DOM READY
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', async () => {
    try {
      const idbData = await idbLoad();
      if (idbData && typeof idbData === 'object') {
        portfolioData = mergePortfolioData(defaultPortfolioData, idbData);
      }
    } catch (e) {}
    if (!portfolioData.theme) portfolioData.theme = Object.assign({}, defaultPortfolioData.theme);
    if (!portfolioData.skills) portfolioData.skills = JSON.parse(JSON.stringify(defaultPortfolioData.skills));
    if (!portfolioData.skills.tools) portfolioData.skills.tools = JSON.parse(JSON.stringify(defaultPortfolioData.skills.tools));
    if (!portfolioData.skills.tools.visual || portfolioData.skills.tools.visual.length === 0) {
      portfolioData.skills.tools.visual = JSON.parse(JSON.stringify(defaultPortfolioData.skills.tools.visual));
    }
    if (!portfolioData.skills.tools.genai || portfolioData.skills.tools.genai.length === 0) {
      portfolioData.skills.tools.genai = JSON.parse(JSON.stringify(defaultPortfolioData.skills.tools.genai));
    }
    if (!portfolioData.contents) portfolioData.contents = JSON.parse(JSON.stringify(defaultPortfolioData.contents));
    if (!portfolioData.logofolio) portfolioData.logofolio = JSON.parse(JSON.stringify(defaultPortfolioData.logofolio));

    applyTheme(portfolioData.theme, false);
    renderPortfolio();
    initScrollProgress();
    await syncWithServerDatabase();
  });

})();
