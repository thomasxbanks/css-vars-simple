const body = document.querySelector('body')
const button = document.querySelector('button')

let makeThemeDark = () => {
    body.setAttribute('data-theme', 'dark')
}

let makeThemeLight = () => {
    body.setAttribute('data-theme', 'light')
}

button.addEventListener('click', ()=>{
    if (body.getAttribute('data-theme') === 'light') {
        makeThemeDark()
    } else {
        makeThemeLight()
    }
})
