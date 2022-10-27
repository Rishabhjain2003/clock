function display(){
    var current = new Date();
    var h = current.getHours();
    var chk = false;
    if(h>12){
        h-=12;
        chk = true;
    }
    var m = current.getMinutes();
    var s = current.getSeconds();
    var sess = document.getElementById('');
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
    if(chk==true){
        document.getElementById("session").innerHTML = "PM";
    }
}
setInterval(display,10);