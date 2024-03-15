


var settingsmenu = document.querySelector('.settings-menu');
var darkBtn = document.getElementById("dark-btn");

//toggle for setting menu height
function settingMenuToggle() {
    settingsmenu.classList.toggle('settings-menu-height');
}

//toggle for dark-on button to switch on
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-on");
    document.body.classList.toggle("dark-theme");

//update setting for storage
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

//condition for operation

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-on");
    document.body.classList.add("dark-theme");
    
}
else{
    localStorage.setItem("theme", "light");
}
