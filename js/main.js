const hoduImages = document.querySelector('.hodu-images');
const showMoreBtn = document.querySelector('.show-more-btn');
let pageCount = 0;

showMoreBtn.addEventListener('click', function () {
    loadImages(pageCount += 1);
});

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

function insertImages(data) {
    data.forEach((d) => {
        hoduImages.insertAdjacentHTML('beforeend', `<img src="${d.download_url}" alt="">`)
    })
}



//카카오맵
let mapContainer = document.querySelector('.map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.4423464, 126.5714548), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
let map = new kakao.maps.Map(mapContainer, mapOption);

//축척 위치
map.setCopyrightPosition(kakao.maps.CopyrightPosition.BOTTOMRIGHT, true);


// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
let mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
let zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

//마커
let markerPosition  = new kakao.maps.LatLng(33.4423464, 126.5714548);

let marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);
