var markAllButton = document.getElementById("mark-all");
var notifyNumber = document.getElementById("notify-number");
var dot = document.getElementsByClassName("dot");
var section = document.getElementsByTagName("section");


function toggleReadUnread(a) {
    dot[a].classList.toggle("show");
    section[a].classList.toggle("unread");
}

function markAllReadUnread() {
    for(var i=0; i<7; i++){
        section[i].classList.remove("unread");
        dot[i].classList.remove("show")
    }
    notifyNumber.innerHTML = "0";
}

window.onclick = function() {
    var counter = 0;
    for(var i=0; i<7; i++){
        var activeNotification = section[i];
        if (activeNotification.classList.contains("unread")){
            counter = counter+1;
        }
    }
    notifyNumber.innerHTML = counter;
}