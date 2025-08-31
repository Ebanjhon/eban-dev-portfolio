let pointFirstEye = [0, 0];
let pointSecondEye = [0, 0];

// hàm tracking liên tụi để cập nhật
document.addEventListener("mousemove", e => {
  const rotateFirstEye = (Math.atan2(e.clientY - pointFirstEye[1], e.clientX - pointFirstEye[0]) * 180 / Math.PI) + 180;
  const rotateSecondEye = (Math.atan2(e.clientY - pointSecondEye[1], e.clientX - pointSecondEye[0]) * 180 / Math.PI) + 180;
  
  document.getElementById("firstEye").style.transform = `rotate(${rotateFirstEye}deg)`;
  document.getElementById("leftEye").style.transform = `rotate(-${rotateFirstEye}deg)`;

  document.getElementById("secondEye").style.transform = `rotate(${rotateSecondEye}deg)`;
  document.getElementById("rightEye").style.transform = `rotate(-${rotateSecondEye}deg)`;
});

// hàm chạy lần đầu và gọi lai khi màn hinh kích thước thay đổi
function initPoint() {
  let rectFirst = document.getElementById("firstEye").getBoundingClientRect();
  pointFirstEye = [rectFirst.left + rectFirst.width / 2, rectFirst.top + rectFirst.height / 2];

  let rectSecond = document.getElementById("secondEye").getBoundingClientRect();
  pointSecondEye = [rectSecond.left + rectSecond.width / 2, rectSecond.top + rectSecond.height / 2];
}

initPoint();
