

var tablink = document.getElementsByClassName("tab-titles");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){

    for(var i = 0; i<tablink.length; i++){

        tablink[i].classList.remove("active-link");
    }
    for(var i = 0; i<tabcontents.length; i++){

        tabcontents[i].classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.querySelector(".sidemenu");
    
    function openMenu() {
        sidemenu.style.display = "block";
    }

    function closeMenu() {
        sidemenu.style.display = "none";
    }