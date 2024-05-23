function showModal() {
    document.querySelector('.subscribe-modal').style.visibility = 'visible';
}

function closeModal() {
    document.querySelector('.subscribe-modal').style.visibility = 'hidden';
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
