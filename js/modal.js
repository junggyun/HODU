const showModalBtn = document.querySelector('.subscribe-form>button');
const closeModalBtn = document.querySelector('.subscribe-modal>button');
const modal = document.querySelector('.subscribe-modal');
const modalHidden = document.querySelector('.subscribe-modal.hidden');

//모달창 띄우기
showModalBtn.addEventListener("click", function () {
    modalHidden.classList.remove("hidden");
});

//모달창 닫기
closeModalBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
});
