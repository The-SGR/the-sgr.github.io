function initElementHover() {
    const elementDisplay = document.getElementById('element_name');
    if (!elementDisplay) return;

    const defaultText = elementDisplay.textContent;

    const elementNamesRu = {
        'H': 'Водород', 'He': 'Гелий', 'Li': 'Литий', 'Be': 'Бериллий',
        'B': 'Бор', 'C': 'Углерод', 'N': 'Азот', 'O': 'Кислород',
        'F': 'Фтор', 'Ne': 'Неон', 'Na': 'Натрий', 'Mg': 'Магний',
        'Al': 'Алюминий', 'Si': 'Кремний', 'P': 'Фосфор', 'S': 'Сера',
        'Cl': 'Хлор', 'Ar': 'Аргон', 'K': 'Калий', 'Ca': 'Кальций',
        'Sc': 'Скандий', 'Ti': 'Титан', 'V': 'Ванадий', 'Cr': 'Хром',
        'Mn': 'Марганец', 'Fe': 'Железо', 'Co': 'Кобальт', 'Ni': 'Никель',
        'Cu': 'Медь', 'Zn': 'Цинк', 'Ga': 'Галлий', 'Ge': 'Германий',
        'As': 'Мышьяк', 'Se': 'Селен', 'Br': 'Бром', 'Kr': 'Криптон',
        'Rb': 'Рубидий', 'Sr': 'Стронций', 'Y': 'Иттрий', 'Zr': 'Цирконий',
        'Nb': 'Ниобий', 'Mo': 'Молибден', 'Tc': 'Технеций', 'Ru': 'Рутений',
        'Rh': 'Родий', 'Pd': 'Палладий', 'Ag': 'Серебро', 'Cd': 'Кадмий',
        'In': 'Индий', 'Sn': 'Олово', 'Sb': 'Сурьма', 'Te': 'Теллур',
        'I': 'Йод', 'Xe': 'Ксенон', 'Cs': 'Цезий', 'Ba': 'Барий',
        'La': 'Лантан', 'Ce': 'Церий', 'Pr': 'Празеодим', 'Nd': 'Неодим',
        'Pm': 'Прометий', 'Sm': 'Самарий', 'Eu': 'Европий', 'Gd': 'Гадолиний',
        'Tb': 'Тербий', 'Dy': 'Диспрозий', 'Ho': 'Гольмий', 'Er': 'Эрбий',
        'Tm': 'Тулий', 'Yb': 'Иттербий', 'Lu': 'Лютеций', 'Hf': 'Гафний',
        'Ta': 'Тантал', 'W': 'Вольфрам', 'Re': 'Рений', 'Os': 'Осмий',
        'Ir': 'Иридий', 'Pt': 'Платина', 'Au': 'Золото', 'Hg': 'Ртуть',
        'Tl': 'Таллий', 'Pb': 'Свинец', 'Bi': 'Висмут', 'Po': 'Полоний',
        'At': 'Астат', 'Rn': 'Радон', 'Fr': 'Франций', 'Ra': 'Радий',
        'Ac': 'Актиний', 'Th': 'Торий', 'Pa': 'Протактиний', 'U': 'Уран',
        'Np': 'Нептуний', 'Pu': 'Плутоний', 'Am': 'Америций', 'Cm': 'Кюрий',
        'Bk': 'Берклий', 'Cf': 'Калифорний', 'Es': 'Эйнштейний', 'Fm': 'Фермий',
        'Md': 'Менделевий', 'No': 'Нобелий', 'Lr': 'Лоуренсий', 'Rf': 'Резерфордий',
        'Db': 'Дубний', 'Sg': 'Сиборгий', 'Bh': 'Борий', 'Hs': 'Хассий',
        'Mt': 'Мейтнерий', 'Ds': 'Дармштадтий', 'Rg': 'Рентгений', 'Cn': 'Коперниций',
        'Nh': 'Нихоний', 'Fl': 'Флеровий', 'Mc': 'Московий', 'Lv': 'Ливерморий',
        'Ts': 'Теннессин', 'Og': 'Оганессон'
    };

    const elementNamesEn = {
        'H': 'Hydrogen', 'He': 'Helium', 'Li': 'Lithium', 'Be': 'Beryllium',
        'B': 'Boron', 'C': 'Carbon', 'N': 'Nitrogen', 'O': 'Oxygen',
        'F': 'Fluorine', 'Ne': 'Neon', 'Na': 'Sodium', 'Mg': 'Magnesium',
        'Al': 'Aluminum', 'Si': 'Silicon', 'P': 'Phosphorus', 'S': 'Sulfur',
        'Cl': 'Chlorine', 'Ar': 'Argon', 'K': 'Potassium', 'Ca': 'Calcium',
        'Sc': 'Scandium', 'Ti': 'Titanium', 'V': 'Vanadium', 'Cr': 'Chromium',
        'Mn': 'Manganese', 'Fe': 'Iron', 'Co': 'Cobalt', 'Ni': 'Nickel',
        'Cu': 'Copper', 'Zn': 'Zinc', 'Ga': 'Gallium', 'Ge': 'Germanium',
        'As': 'Arsenic', 'Se': 'Selenium', 'Br': 'Bromine', 'Kr': 'Krypton',
        'Rb': 'Rubidium', 'Sr': 'Strontium', 'Y': 'Yttrium', 'Zr': 'Zirconium',
        'Nb': 'Niobium', 'Mo': 'Molybdenum', 'Tc': 'Technetium', 'Ru': 'Ruthenium',
        'Rh': 'Rhodium', 'Pd': 'Palladium', 'Ag': 'Silver', 'Cd': 'Cadmium',
        'In': 'Indium', 'Sn': 'Tin', 'Sb': 'Antimony', 'Te': 'Tellurium',
        'I': 'Iodine', 'Xe': 'Xenon', 'Cs': 'Cesium', 'Ba': 'Barium',
        'La': 'Lanthanum', 'Ce': 'Cerium', 'Pr': 'Praseodymium', 'Nd': 'Neodymium',
        'Pm': 'Promethium', 'Sm': 'Samarium', 'Eu': 'Europium', 'Gd': 'Gadolinium',
        'Tb': 'Terbium', 'Dy': 'Dysprosium', 'Ho': 'Holmium', 'Er': 'Erbium',
        'Tm': 'Thulium', 'Yb': 'Ytterbium', 'Lu': 'Lutetium', 'Hf': 'Hafnium',
        'Ta': 'Tantalum', 'W': 'Tungsten', 'Re': 'Rhenium', 'Os': 'Osmium',
        'Ir': 'Iridium', 'Pt': 'Platinum', 'Au': 'Gold', 'Hg': 'Mercury',
        'Tl': 'Thallium', 'Pb': 'Lead', 'Bi': 'Bismuth', 'Po': 'Polonium',
        'At': 'Astatine', 'Rn': 'Radon', 'Fr': 'Francium', 'Ra': 'Radium',
        'Ac': 'Actinium', 'Th': 'Thorium', 'Pa': 'Protactinium', 'U': 'Uranium',
        'Np': 'Neptunium', 'Pu': 'Plutonium', 'Am': 'Americium', 'Cm': 'Curium',
        'Bk': 'Berkelium', 'Cf': 'Californium', 'Es': 'Einsteinium', 'Fm': 'Fermium',
        'Md': 'Mendelevium', 'No': 'Nobelium', 'Lr': 'Lawrencium', 'Rf': 'Rutherfordium',
        'Db': 'Dubnium', 'Sg': 'Seaborgium', 'Bh': 'Bohrium', 'Hs': 'Hassium',
        'Mt': 'Meitnerium', 'Ds': 'Darmstadtium', 'Rg': 'Roentgenium', 'Cn': 'Copernicium',
        'Nh': 'Nihonium', 'Fl': 'Flerovium', 'Mc': 'Moscovium', 'Lv': 'Livermorium',
        'Ts': 'Tennessine', 'Og': 'Oganesson'
    };

    function getCurrentLanguage() {
        const langButton = document.querySelector('.lang-toggle');
        if (langButton && langButton.textContent === 'EN') {
            return 'ru';
        }

        const htmlLang = document.documentElement.lang;
        if (htmlLang && (htmlLang === 'ru' || htmlLang === 'en')) {
            return 'en';
        }
    }

    const periodicTable = document.getElementById('periodic-table-window');
    if (!periodicTable) return;

    periodicTable.addEventListener('mouseover', function(e) {
        const cell = e.target;

        if (cell.tagName === 'TD' &&
            cell.textContent.trim() !== '' &&
            !cell.classList.contains('empty_element')) {

            const elementSymbol = cell.textContent.trim();

            const currentLang = getCurrentLanguage();

            const elementNames = currentLang === 'ru' ? elementNamesRu : elementNamesEn;

            const elementName = elementNames[elementSymbol];

            if (elementName) {
                elementDisplay.textContent = elementName;
            }
        }
    });

    periodicTable.addEventListener('mouseout', function(e) {
        const cell = e.target;

        if (cell.tagName === 'TD' &&
            cell.textContent.trim() !== '' &&
            !cell.classList.contains('empty_element')) {

            elementDisplay.textContent = defaultText;
        }
    });

    function updateDefaultText() {
        const currentLang = getCurrentLanguage();
        if (currentLang === 'ru') {
            elementDisplay.textContent = 'Выберите элемент';
        } else {
            elementDisplay.textContent = 'Select Element';
        }
    }

    updateDefaultText();

    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            setTimeout(updateDefaultText, 50);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initElementHover();
});