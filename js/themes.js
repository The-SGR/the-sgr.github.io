let lightMode = localStorage.getItem('lightMode')
const themeSwitch = document.querySelector('.theme-switch')

const enableLightMode = () => {
    document.body.classList.add('lightMode')
    themeSwitch.setAttribute('data-i18n', 'light')
    themeSwitch.textContent = translations[currentLang].light
    localStorage.setItem('lightMode', 'active')
}

const disableLightMode = () => {
    document.body.classList.remove('lightMode')
    themeSwitch.setAttribute('data-i18n', 'dark')
    themeSwitch.textContent = translations[currentLang].dark
    localStorage.removeItem('lightMode')
}

if (lightMode === "active") enableLightMode()

themeSwitch.addEventListener("click", () => {
    lightMode = localStorage.getItem('lightMode')
    lightMode !== "active" ? enableLightMode() : disableLightMode()
})