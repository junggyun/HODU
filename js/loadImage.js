const hoduImages = document.querySelector('.hodu-images');
const showMoreBtn = document.querySelector('.show-more-btn');
let pageCount = 0;

//이미지 삽입
function insertImages(data) {
    data.forEach((d) => {
        hoduImages.insertAdjacentHTML('beforeend', `<img src="${d.download_url}" alt="">`)
    })
}

//이미지 로드
async function loadImages(page) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`);
        if (!response.ok) {
            throw new Error('응답 오류');
        }
        const data = await response.json();
        insertImages(data)
    } catch (error) {
        console.log(error);
    }
}

//초기 이미지 로드
loadImages(pageCount += 1);

//추가 이미지 로드 이벤트
showMoreBtn.addEventListener('click', () => {
    loadImages(pageCount += 1);
});
