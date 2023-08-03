var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
var sideMenu = document.getElementById("sideMenu");

function openTab(tabname) {
    for (tablink of tabLinks) {
        tablink.classList.remove("active-link");
        console.log(tablink);
    }
    for (tabcontent of tabContents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


function openMenu() {
    console.log(sideMenu);
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px"
}