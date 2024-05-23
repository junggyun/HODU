let images = [];
let count = 1;
let page = 1;

function loadImages(page) {
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=60`)
        .then(response => response.json())
        .then(data => {
            images = data;
        })
}

const hoduImages = document.querySelector(".hodu-images");
const showMoreBtn = document.querySelector(".show-more-btn");

showMoreBtn.addEventListener("click", function ()  {
    if (images.length > 0) {
        for (let i = 0; i < 6; i++) {
            hoduImages.innerHTML += `<img src="${images[i].download_url}" alt="">`
            console.log(images[i])
        }
        images.splice(0,6)
        console.log(count);
        count += 1;
        if (count % 10 === 0) {
            page += 1;
        }
    } else {
        loadImages(page).then(() => {
            for (let i = 0; i < 6; i++) {
                hoduImages.innerHTML += `<img src="${images[i].download_url}" alt="">`
                console.log(images[i])
            }
            images.splice(0,6)
        });
        count += 1;
    }

});
