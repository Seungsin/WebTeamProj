var dday = document.getElementById("count").innerText;
        
setInterval(function() {
    var today = new Date().getTime();
    var gap = dday - today;
    var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
    var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.ceil((gap % (1000 * 60)) / 1000);

    document.getElementById("count").innerHTML = "D-DAY까지 " + day + "일 " + hour + "시간 " + min + "분 " + sec + "초 남았습니다.";
}, 1000);