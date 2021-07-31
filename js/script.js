function openMenu() {
    const openBar = document.querySelector('ul.menu') 
    openBar.style.right = '0';
}

function closeMenu() {
    const closeBar = document.querySelector('ul.menu')
    closeBar.style.right = '-1000px';
}