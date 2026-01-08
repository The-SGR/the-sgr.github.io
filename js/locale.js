const translations = {
    en: {
        welcome: "Welcome!",
        about: "About",
        clicker: "Clicker",
        txt_main_1_part: "Comrade ",
        txt_main_a_sgr: "sgr'",
        txt_main_2_part: " website!",
        txt_main_3_part: "The site is in beta testing, so it's a bit empty",
        plans: "Plans",
        another_host: "Another Host",
        file_storage: "File Storage",
        more_js: "More JavaScript! More!",
        whoami: "Who am I?",
        txt_about_1_part: "I'm sgr, someone from Lower Volga.",
        txt_about_2_part: "I make games, software and websites.",
        social_media: "Social Media",
        projects: "Projects",
        clicks: "Clicks: ",
        error_404: "Error 404!",
        txt_404: "Nope, this page doesn't exist!",
        main_page_404: "[ Main Page ]",
        back_404: "[ Back ]",
        reset_clicks: "Reset Clicks",
        periodic_table_title: "Periodic Table of the Elements",
        util: "Utilities",
    },
    ru: {
        welcome: "Добро пожаловать!",
        about: "Обо мне",
        clicker: "Кликер",
        txt_main_1_part: "Сайт товарища ",
        txt_main_a_sgr: "сгра",
        txt_main_2_part: "!",
        txt_main_3_part: "Сайт находится на этапе бета-тестирования, поэтому он и пустоват",
        plans: "Планы",
        another_host: "Другой хост",
        file_storage: '"Файлохранилище"',
        more_js: "Больше JavaScript'а! Больше!",
        whoami: "Кто я?",
        txt_about_1_part: "Я есть Господин Сгр, некто из Нижней Волги.",
        txt_about_2_part: "Делаю игры, ПО и немножко сайты.",
        social_media: "Социальные сети",
        projects: "Проекты",
        clicks: "Клики: ",
        error_404: "Ошибка 404!",
        txt_404: "Неа, этой страницы не существует!",
        main_page_404: "[ На главную страницу ]",
        back_404: "[ Назад ]",
        reset_clicks: "Сбросить клики",
        periodic_table_title: "Периодическая таблица Д.И. Менделеева",
        util: "Утилиты",
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    applyTranslation(currentLang);
    document.querySelector('.lang-toggle').textContent = currentLang === 'en' ? 'RU' : 'EN';
    localStorage.setItem('lang', currentLang);
}

function applyTranslation(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    if (translations[lang] && translations[lang]['page_title']) {
        document.title = translations[lang]['page_title'];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.lang-toggle').textContent =
        currentLang === 'en' ? 'RU' : 'EN';

    applyTranslation(currentLang);
    document.querySelector('.lang-toggle').addEventListener('click', toggleLanguage);
});