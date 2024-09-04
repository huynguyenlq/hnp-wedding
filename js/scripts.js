$(document).ready(function() {
    // Đếm ngược đến ngày tổ chức sự kiện (22.9.2024)
    var countDownDate = new Date("Sep 22, 2024 00:00:00").getTime();

    var countdownfunction = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (distance < 0) {
            clearInterval(countdownfunction);
            document.getElementById("countdown").innerHTML = "Đã đến ngày!";
        }
    }, 1000);

    // Cuộn trang xuống khi click vào mục "Ngày của chúng tôi"
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Slide Gallery
    $('#heroCarousel').carousel({
        interval: 3000,
        pause: false
    });
});

document.addEventListener("DOMContentLoaded", function() {
    function formatDate(date) {
        const daysOfWeek = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
        const monthsOfYear = ["tháng 1", "tháng 2", "tháng 3", "tháng 4", "tháng 5", "tháng 6", "tháng 7", "tháng 8", "tháng 9", "tháng 10", "tháng 11", "tháng 12"];

        const dayOfWeek = daysOfWeek[date.getDay()];
        const day = date.getDate();
        const month = monthsOfYear[date.getMonth()];
        const year = date.getFullYear();

        return `${dayOfWeek}, ngày ${day} ${month} năm ${year}`;
    }

    var currentDateElement = document.getElementById("currentDate");
    var today = new Date();
    var formattedDate = formatDate(today);
    currentDateElement.textContent = formattedDate;
});
