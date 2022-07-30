let spacifiedDate = new Date("Dec 31, 2021 23:59:59").getTime();
let clickedHeading = document.querySelector("h1");
clickedHeading.onclick = function () {
    document.querySelector(".container").classList.toggle("active");
}

const countDownTimer = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDifference = spacifiedDate - dateNow;
    // Get date units
    let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
    let hour = Math.floor(dateDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minute = Math.floor(dateDifference % (1000 * 60 * 60) / (1000 * 60));
    let second = Math.floor(dateDifference % (1000 * 60) / 1000);

    document.querySelector(".days").textContent = days <= 10 ? "0" + days: days;
    document.querySelector(".hours").textContent = hour <= 10 ? "0" + hour: hour;
    document.querySelector(".minute").textContent = minute <= 10 ? "0" + minute: minute;
    document.querySelector(".seconds").textContent = second <= 10 ? "0" + second: second;
}, 1000);
