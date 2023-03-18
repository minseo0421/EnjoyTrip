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

