const translations = {
    en: {
        h1_index_cc: "sgr' personal website",
        p_index_cc: "small developer from Lower Volga which makes some useful and useless things",
        projects: "current projects",
        prj_bordergame_desc: "planned game in UE5<br>(name is temporary)",
        prj_im_desc: "Mod, which adds<br>a reward system in Minecraft",
        prj_cq_desc: "small android game<br>about countries",
        status: "Status",
        wip: "working on it",
        alpha_ver: "alpha version",
        paused: "paused",
        dark: "dark",
        light: "light",
        btn_main_page: "[ main page ]",
        btn_back: "[ back ]",
        p_404: "this page doesn't exist, i guess"
    },
    ru: {
        h1_index_cc: "личный сайт sgr'а",
        p_index_cc: "небольшой разработчик из Нижней Волги, который делает полезные и бесполезные штуки",
        projects: "текущие проекты",
        prj_bordergame_desc: "запланированная игра на UE5<br>(название временное)",
        prj_im_desc: "Мод, который добавляет<br>систему наград в Minecraft",
        prj_cq_desc: "небольшая игра для Android<br>о странах",
        status: "Статус",
        wip: "работаю над этим",
        alpha_ver: "альфа версия",
        paused: "приостановлен",
        dark: "тёмн",
        light: "светл",
        btn_main_page: "[ главная ]",
        btn_back: "[ назад ]",
        p_404: "смею предположить, что сия страница отсутствует"
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    applyTranslation(currentLang);
    document.querySelector('.lang').textContent = currentLang === 'en' ? 'eng' : 'рус';
    localStorage.setItem('lang', currentLang);
}

function applyTranslation(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    if (translations[lang] && translations[lang]['page_title']) {
        document.title = translations[lang]['page_title'];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.lang').textContent =
        currentLang === 'en' ? 'eng' : 'рус';

    applyTranslation(currentLang);
    document.querySelector('.lang').addEventListener('click', toggleLanguage);
});