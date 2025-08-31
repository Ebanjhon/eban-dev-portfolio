var isDarkMode = false;
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function toggleDarkMode(element) {
  document.querySelector(".header-controller").classList.toggle("dark");
  document.getElementById("bg-day-header").classList.toggle("switch");
  document.getElementById("bg-night-header").classList.toggle("switch");
  element.classList.toggle("active");
  isDarkMode = !isDarkMode;
}

function showClock() {
  const now = new Date();

  // Lấy giờ, phút, giây
  let h = now.getHours().toString().padStart(2, "0");
  let m = now.getMinutes().toString().padStart(2, "0");
  let s = now.getSeconds().toString().padStart(2, "0");

  // Ghép chuỗi
  let timeString = `${h}:${m}:${s}`;

  document.getElementById("text-time-hour").innerText = timeString;
}

function showDate() {
  const now = new Date();
  let d = now.getDate().toString().padStart(2, "0");
  let mo = (now.getMonth() + 1).toString().padStart(2, "0");
  let y = now.getFullYear();
  let dateString = `${d}/${mo}`;

  document.getElementById("text-date").innerText = dateString;
  document.getElementById("text-year").innerText = y;
  document.getElementById("text-month").innerText = months[now.getMonth()];
}

// init func
setInterval(showClock, 1000);
showClock();
showDate();
