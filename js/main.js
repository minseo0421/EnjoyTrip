// index page 로딩 시 검색 지역 설정
let serviceKey = "1Zj0g4RCe0OMCCHUKnlXXA0EVxV6FQjiHY55AT1SbFg1SS4zVIx%2B8WB5aJnkD%2Fle3LJhaPhNe1QDN9o%2FU2JbSg%3D%3D";
let areaUrl = `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${serviceKey}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`;


let seoulUrl = `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=${serviceKey}&numOfRows=50&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=%EC%84%9C%EC%9A%B8`;
let busanUrl = `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=${serviceKey}&numOfRows=50&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=%EB%B6%80%EC%82%B0`;
let jejuUrl = `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=${serviceKey}&numOfRows=50&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=%EC%A0%9C%EC%A3%BC`;

// fetch(seoulUrl).then((response) => response.json())
//   .then((data) => console.log(data));

// var items = new Object();
fetch(seoulUrl).then((response) => response.json()).then((data) => {
  let items = data.response.body.items.item;
  let btn = document.getElementById("btn-search");
  let idx = 0;
  btn.addEventListener("click", () => {

    // console.log(document.getElementById("search-area"));
    // console.log(document.getElementById("search-content-id").value);
    console.log(document.getElementById("search-keyword").value);
    let areaEle = document.getElementById("search-area").value;
    let contentEle = document.getElementById("search-content-id").value;
    let bodyEle = document.getElementById("trip-list");
    bodyEle.innerHTML = '';
    items.forEach((item) => {
      let type = item.contenttypeid;
      let keywordEle = document.getElementById("search-keyword").value;
      // console.log(item.title);
      // console.log(item.title.indexOf(keywordEle));
      // console.log(type);
      if (contentEle == type && item.title.indexOf(keywordEle) != -1) {
        // <tr><a><th><img src=""></img></th></a></tr>
        // <tr>
        //   <a href="">
        //     <th>
        //       <img src="Img/age.png" alt="">
        //     </th>
        //     <th>관광지명</th>
        //     <th>주소</th>
        //     <th>담기</th>
        //   </a>
        // </tr>

        let sel = document.getElementById("trip-list");
        let trEle = document.createElement("tr");
        let imgTd = document.createElement("td");
        imgTd.className = "imgTd";
        let titleTd = document.createElement("td");
        titleTd.className = "titleTd";
        let addTd = document.createElement("td");
        addTd.className = "addTd";
        let btnTd = document.createElement("td");
        btnTd.className = "btnTd";
        // <div class="check_wrap">
        // //   <input type="checkbox" id="check_btn" />
        // // </div>
        console.log("aaa");
        console.log(item.firstimage);
        console.log(item.firstimage === '');
        trEle.setAttribute("class", "plan-item");
        trEle.setAttribute("id", `tr${++idx}`);
        // console.log(copy);
        if (item.firstimage === '') {
          imgTd.innerHTML = `<img src="../Img/noimg.png">`;

        } else {
          imgTd.innerHTML = `<img src="${item.firstimage}"/>`;

        }
        titleTd.innerHTML = `<div>${item.title}</div>`;
        addTd.innerHTML = `<div>${item.addr1}</div>`;
        btnTd.innerHTML = `<div class="checks etrans">
                      <input id="${idx}" type="checkbox" onclick="doAction(${idx})" />
                      <label for="ex_chk3"></label>
                    </div>`;
        trEle.appendChild(imgTd);
        trEle.appendChild(titleTd);
        trEle.appendChild(addTd);
        trEle.appendChild(btnTd);
        sel.appendChild(trEle);
      }
    })
  })
  // items = data;
  // console.log(items);
  // console.log(data)
});
// console.log(items);
function doAction(ckEl) {
  console.log("a");
  console.log(ckEl);
  console.log(document.getElementById(ckEl).checked);
  if (document.getElementById(ckEl).checked) {
    console.log("aa");

    add(ckEl);
  } else {
    console.log("ab");

    del(ckEl);
  }
  // console.log(ckEl.checked, ckEl.id);
}
function add(ckEl) {
  console.log("b");

  let result = document.getElementById(`tr${ckEl}`);
  console.log(result);
  let sel = document.getElementById("plan-list");
  sel.appendChild(result);
}
function del(ckEl) {
  console.log("c");

  let result = document.getElementById(`tr${ckEl}`);
  console.log(result);
  let sel = document.getElementById("trip-list");
  sel.appendChild(result);
}




// 로고 관련
// Mouseover시 효과
let logo = document.getElementById("logo");
logo.addEventListener("mouseover", () => {
  logo.setAttribute("src", "./img/logo_animated.gif");
});

logo.addEventListener("mouseout", () => {
  logo.setAttribute("src", "./img/logo_static.png");
});
// 로고 관련
new Swiper(".swiper-container", {
  slidesPerView: 4, // 동시에 보여줄 슬라이드 갯수
  spaceBetween: 40, // 슬라이드간 간격
  slidesPerGroup: 4, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

  // 그룹수가 맞지 않을 경우 빈칸으로 메우기
  // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
  loopFillGroupWithBlank: true,

  loop: true, // 무한 반복

  pagination: {
    // 페이징
    el: ".swiper-pagination",
    clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
  },
  navigation: {
    // 네비게이션
    nextEl: ".swiper-button-next", // 다음 버튼 클래스명
    prevEl: ".swiper-button-prev", // 이번 버튼 클래스명
  },
});
const container = document.querySelector(".img-box"),
  slides = document.querySelectorAll("img"),
  slidecounter = slides.length;
let currentIndex = 0;

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000);
}
function login() {
  let id = document.getElementById("id").value;
  let password = document.getElementById("password").value;

  if (id === "ssafy" && password === "1234") {
    alert("로그인 성공");
    window.location.replace("main2.html");
  } else {
    alert("로그인 실패");
  }
}
function register() {
  let id = document.getElementById("id").value;
  let password = document.getElementById("password").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;

  if (
    (id !== "" && password !== "") ||
    name !== "" ||
    email !== "" ||
    age !== ""
  ) {
    alert("회원가입 완료");
    window.location.replace("login.html");
  } else {
    alert("입력하지 않은 항목이 있습니다.");
  }
}
