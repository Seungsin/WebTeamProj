var dday = document.getElementById("count").innerText;
      
setInterval(function() {
    var today = new Date().getTime();
    var distance = dday - today;
    if(distance<0) document.getElementById("count").innerHTML = '마감되었습니다.'
    else{
        var day = Math.floor(distance/(1000*60*60*24));
        var hour = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        var min = Math.floor((distance % (1000*60*60))/(1000*60));
        var sec = Math.floor((distance % (1000*60))/1000);
        document.getElementById("count").innerHTML =  day + "일 " + hour + ": " + min + ": " + sec;
    }
}, 1000);