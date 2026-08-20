const translations = {
    en: {
        "Nav1": "Home",
        "Nav2": "Projects",
        "Nav3": "Games",
        "Nav4": "Archive",
        "Portfolio": "This is my portfolio",
        "Port2": "You can find all my projects here",
        "Button": "View My Work",
        "Intro": "Little introduction about myself:",
        "skill": "My Skills",
        "Prot": "Featured Projects",
        "Cont": "Contact",
        "Quick": "Quick Links",
        "about-title": "About Me",
        "about-text": "Welcome to my humble abode. This website was made because my projects grew bigger and more in amount so I had to make a portfolio.",
        "me": "I'm Andrew or A41K as known online. I've been making sites for 4-5 years now and started making them really and uploading for almost a year now. I do mostly for fun but also because I'm learning a lot",
        "projects-title": "Projects",
        "contact-title": "Contact",
        // Add more translations as needed
    },
    hu: {
        "Nav1": "Kezdőlap",
        "Nav2": "Projektek",
        "Nav3": "Játékok",
        "Nav4": "Archívum",
        "Portfolio": "Ez a portfolióm",
        "Port2": "Itt találod az összes projektemet",
        "Button": "Nézd meg a munkáimat",
        "Intro": "Kicsi bevezetés rólam:",
        "skill": "Képességeim",
        "Prot": "Kiemelt Projektek",
        "Cont": "Kapcsolat",
        "Quick": "Gyors Linkek",
        "about-title": "Rólam",
        "about-text": "Üdvözöllek a szerény hajlékomban. Ez a weboldal azért készült, mert a projektjeim egyre nagyobbak és számosabbak lettek, így szükségem volt egy portfólióra.",
        "me": "András vagyok vagy A41K, ahogy ismernek. Már 4-5 éve készítek weboldalakat, és közel egy éve kezdtem komolyan fejleszteni és feltölteni őket. Leginkább szórakozásból, de azért is, mert rengeteget tanulok.",
        "projects-title": "Projektek",
        "contact-title": "Kapcsolat",
        // Add more translations as needed
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hu' : 'en';
    updateLanguage();
    const button = document.querySelector('.language-switcher button');
    button.textContent = currentLang.toUpperCase();
}

function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}