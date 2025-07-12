const translations = {
    en: {
        "Nav1": "Home",
        "Nav2": "Projects",
        "Nav3": "Games",
        "Nav4": "Archive",
        "Portfolio": "This is my portfolio",
        "Port2": "You can find all my projects here",
        "Button": "View My Work",
        "Intro": "Little introduction:",
        "skill": "My Skills",
        "Prot": "Featured Projects",
        "Cont": "Contact",
        "Quick": "Quick Links",
        "about-title": "About Me",
        "about-text": "Hello I'm Andrew a.k.a A41K. I've been making websites and programming for over half a decade now. This was mostly a passion project that I've tinkered about making. First I did it with Framer then I thought 'Maybe I should make something proper with my knowledge and the rest is now history. I think it's very important to say that this is a half-baked website with sub-par programming.",
        "projects-title": "Projects",
        "contact-title": "Contact",
        "Fixingrn": "I'm currently fixing the issue with our domain it will be back",
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
        "Intro": "Kicsi bevezetés:",
        "skill": "Képességeim",
        "Prot": "Kiemelt Projektek",
        "Cont": "Kapcsolat",
        "Quick": "Gyors Linkek",
        "about-title": "Rólam",
        "about-text": "Szia, Andrew vagyok, más néven A41K. Már több mint fél évtizede készítek weboldalakat és programozok. Ez főként egy hobbiprojekt volt, amin sokat barkácsoltam. Először Framerrel csináltam, aztán arra gondoltam, 'Talán készítenem kéne valami rendesebbet a tudásommal', és a többi már történelem. Fontosnak tartom megemlíteni, hogy ez egy félkész weboldal átlagos programozással.",
        "projects-title": "Projektek",
        "contact-title": "Kapcsolat",
        "Fixingrn": "Jelenleg problémázik a domainünk ezért majd hamarosan meg lesz javítva.",
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