const inputCheck = document.getElementById('modo-noturno');
const tema = document.querySelector('body')

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light'
    tema.setAttribute('data-bs-theme', modo)
})