var startDate = new Date("2024-10-19");

function updateCounter() {
  var now = new Date();
  var diff = now - startDate;

  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  var minutes = Math.floor((diff / (1000 * 60)) % 60);
  var seconds = Math.floor((diff / 1000) % 60);

  var days = Math.floor(diff / (1000 * 60 * 60 * 24));

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  document.getElementById("dayNumber").innerHTML = days + " ngày";
  document.getElementById("timeNumber").innerHTML =
    hours + " giờ " + minutes + " phút " + seconds + " giây";
}
setInterval(updateCounter, 1000);
updateCounter();

function playMusic() {
  document.getElementById("music").play();
}

function showLove() {
  document.getElementById("letterPopup").style.display = "flex";
}

// slideshow
var images = ["anh1.jpg", "anh2.jpg"];
var i = 0;
setInterval(function () {
  i = (i + 1) % images.length;
  document.getElementById("slide").src = images[i];
}, 4000);

// hearts animation
setInterval(function () {
  var heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 500);

var correctPassword = "1234"; //           /*đổi mật khẩu ở đây */

function checkPassword() {
  var input = document.getElementById("passwordInput").value;

  if (input === correctPassword) {
    document.getElementById("lockScreen").style.display = "none";
  } else {
    document.getElementById("errorText").innerText = "Sai mật khẩu rồi 😢";
    document.getElementById("passwordInput").style.border = "2px solid red";
  }
}
function openLetter() {
  document.getElementById("letterPopup").style.display = "flex";
}

function closeLetter() {
  document.getElementById("letterPopup").style.display = "none";
}
function showLove() {
  document.getElementById("letterPopup").style.display = "flex";
  index = 0;
  document.getElementById("letterText").innerHTML = "";
  typeWriter();
}

function closeLetter() {
  document.getElementById("letterPopup").style.display = "none";
  document.getElementById("letterText").innerHTML = "";
}

var message =
  "Những ngày tháng qua xin lỗi vì đã làm em buồn phiền nhiều thứ, Cảm ơn em vì đã đến bên anh ❤️";
var index = 0;

function typeWriter() {
  if (index < message.length) {
    document.getElementById("letterText").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // tốc độ chạy (50ms)
  }
}
var tvImages = [
  "TV/ab1.jpg",
  "TV/ab2.jpg",
  "TV/ab3.jpg",
  "TV/ab4.jpg",
  "TV/ab5.jpg",
  "TV/ab6.jpg",
];

var tvIndex = 0;
function showTV() {
  startAutoSlide();
  document.getElementById("tvPopup").style.display = "flex";
  generateThumbs();
  updateTVImage();
}

function closeTV() {
  document.getElementById("tvPopup").style.display = "none";
  stopAutoSlide();
}

function generateThumbs() {
  var container = document.getElementById("thumbContainer");
  container.innerHTML = "";

  tvImages.forEach((src, index) => {
    var img = document.createElement("img");
    img.src = src;
    img.onclick = function () {
      tvIndex = index;
      updateTVImage();
    };
    container.appendChild(img);
  });
}

function updateTVImage() {
  document.getElementById("tvImage").src = tvImages[tvIndex];

  var thumbs = document.querySelectorAll(".thumbs img");
  thumbs.forEach((img, index) => {
    img.classList.remove("active");
    if (index === tvIndex) {
      img.classList.add("active");
    }
  });
}
/auto slide/;
var tvAutoSlide = null;
/Tự động chạy khi popup mở/;
document
  .getElementById("tvPopup")
  .addEventListener("transitionend", function () {
    if (this.style.display === "flex") {
      if (tvAutoSlide) clearInterval(tvAutoSlide);
      tvAutoSlide = setInterval(function () {
        tvIndex = (tvIndex + 1) % tvImages.length;
        updateTVImage();
      }, 3000);
    }
  });
/ Theo dõi khi popup bị ẩn/;
var observer = new MutationObserver(function () {
  var popup = document.getElementById("tvPopup");
  if (popup.style.display === "none") {
    clearInterval(tvAutoSlide);
  }
});

observer.observe(document.getElementById("tvPopup"), {
  attributes: true,
  attributeFilter: ["style"],
});
var tvAutoSlide;

function startAutoSlide() {
  if (tvAutoSlide) clearInterval(tvAutoSlide);

  tvAutoSlide = setInterval(function () {
    tvIndex = (tvIndex + 1) % tvImages.length;
    updateTVImage();
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(tvAutoSlide);
}
function startApp() {
  document.querySelector(".start-screen").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".start-screen").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
    playMusic();
  }, 1000);
}
