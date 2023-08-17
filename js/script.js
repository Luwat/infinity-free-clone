const mode = document.querySelector('.mode');
const bodyToggle = document.querySelector('body');
const formToggle = document.querySelector('.form-wrapper');
const titleToggle = document.querySelector('.title');

const viewMode = () => {
    if (mode.innerText === 'Light') {
        bodyToggle.classList.remove('grad');
        formToggle.classList.remove('dark')
        titleToggle.classList.remove('dark')
        mode.classList.remove('dark');
        mode.innerText = 'Dark';
    } else if (mode.innerText === 'Dark') {
        bodyToggle.classList.add('grad');
        formToggle.classList.add('dark')
        titleToggle.classList.add('dark')
        mode.classList.add('dark');
        mode.innerText = 'Light';
    }
}

mode.addEventListener('click', viewMode)