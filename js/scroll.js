const scrollTopBtn = document.querySelector('.scroll-top-btn');

//화면 최상단으로 이동
scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
