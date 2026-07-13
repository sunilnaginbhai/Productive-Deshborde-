let whether = document.querySelector("#card1");
whether.addEventListener("click", () => {
    window.location.href = "/whether/whether.html";
});
//1
document.addEventListener("keydown", (e) => {
    if (e.key === "1" || e.key == "altkey") {
        whether.click();
    }
});

let todo = document.querySelector("#card3");
todo.addEventListener("click", () => {
    window.location.href = "To-do/todo.html";
});
//2
document.addEventListener("keydown", (e) => {
    if (e.key === "2" || e.key == "altkey") {
        todo.click();
    }
});


let pomo = document.querySelector("#card5");
pomo.addEventListener("click", () => {
    window.location.href = "pomodoro/pomodoro.html";
});

//3
document.addEventListener("keydown", (e) => {
    if (e.key === "3" || e.key == "altkey") {
        pomo.click();
    }
});

let daily = document.querySelector("#card2");
daily.addEventListener("click", () => {
    window.location.href = "/Plan/plan.html";
});
//4
document.addEventListener("keydown", (e) => {
    if (e.key === "4" || e.key == "altkey") {
        daily.click();
    }
});

let goals = document.querySelector("#card4");
goals.addEventListener("click", () => {
    window.location.href = "/Goals/goals.html";
});
//5
document.addEventListener("keydown", (e) => {
    if (e.key === "5" || e.key == "altkey") {
        goals.click();
    }
});

let more = document.querySelector("#card6");
more.addEventListener("click", () => {
    window.location.href = "/More/more.html";
});
//6
document.addEventListener("keydown", (e) => {
    if (e.key === "6" || e.key == "altkey") {
        more.click();
    }
});

const darkbtn = document.querySelector(".dark-btn");
const body = document.body;


let isDark = localStorage.getItem("darkMode") === "true";

if (isDark) {
    enableDarkMode();
} else {
    disableDarkMode();
}

darkbtn.addEventListener("click", () => {
    isDark = !isDark;
    localStorage.setItem("darkMode", isDark);
    
    if (isDark) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

function enableDarkMode() {
    darkbtn.style.backgroundImage = 'url("/image/sun.png")';
    body.style.backgroundColor = "#0f172a";
    document.documentElement.style.backgroundColor = "#000";
}

function disableDarkMode() {
    darkbtn.style.backgroundImage = 'url("/image/night.png")';
    body.style.backgroundColor = "transparent";
    document.documentElement.style.backgroundColor = "transparent";
}

let back = document.querySelector("#background");
let th1 = document.querySelector("#th1");
let th2 = document.querySelector("#th2");
let alltheme = document.querySelector("#alltheme");
let videobtn = document.querySelector("#video-b") // || document.getElementById("video-b");
let videoSource = document.querySelector("#video-source");

let themes = [
    "https://images.pexels.com/photos/4061007/pexels-photo-4061007.jpeg",
    "image/pexels-pok-rie-33563-132037.jpg",
    "image/pexels-jplenio-1642770.jpg",
    "image/pexels-jess-vide-5007325.jpg",
    "image/pexels-magda-ehlers-pexels-636353.jpg",
    "image/himmelstraeume-flower-7543035 (1).jpg",
    "image/seaq68-river-2951997.jpg",
];

back.style.transition = "opacity 0.5s ease-in-out";

function switchTheme(themeIndex) {
    if (!isDark) {
        back.style.opacity = "0";
        setTimeout(() => {
            back.src = themes[themeIndex];
            back.style.opacity = "1";
        }, 10);
    }
    backVideo.style.opacity = "0";
    setTimeout(() => {
        backVideo.style.display = "none";
    }, 10);
}

th1.addEventListener("click", () => {
    switchTheme(0);
});

th2.addEventListener("click", () => {
    switchTheme(1);
});

let counter = 2;
alltheme.addEventListener("click", () => {
    counter++;
    if (counter >= themes.length) {
        counter = 0;
    }
    switchTheme(counter);
});

document.querySelectorAll(".sidebar-icon").forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
        icon.style.transform = "scale(1.1)";
    });
    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "scale(1)";
    });
});

document.querySelectorAll(".feature-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(10px)";
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "d" || e.key === "D") {
        darkbtn.click();
    }
});


window.addEventListener("load", () => {
    document.body.style.animation = "fadeIn 0.5s ease-in";
    document.querySelectorAll(".skeleton").forEach((el) => {
        el.classList.remove("skeleton");
    });

});

// window.addEventListener("load", () => {
    // document.body.style.animation = "fadeIn 3s ease-in";

// });
const menuIcon = document.querySelector(".menu");
const sidebar = document.querySelector("#sidebar");
const features = document.querySelector(".features");

document.addEventListener("keydown", (e) => {
    if (e.key === "m" || e.key === "M") {
        menuIcon.click();
    }
});

let menuOpen = false;

menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    menuOpen = !menuOpen;
    
    if (menuOpen) {
        features.style.display = "flex";
        sidebar.classList.add("menu-expanded");
        menuIcon.style.transform = "rotate(90deg)";
    } else {
        features.style.display = "none";
        sidebar.classList.remove("menu-expanded");
        menuIcon.style.transform = "rotate(0deg)";
    }
});

document.addEventListener("click", () => {
    if (menuOpen) {
        menuOpen = false;
        features.style.display = "none";
        sidebar.classList.remove("menu-expanded");
        menuIcon.style.transform = "rotate(0deg)";
    }
});


let icon1 = document.querySelector("#icon1");
let icon2 = document.querySelector("#icon2");
let icon3 = document.querySelector("#icon3");
let icon4 = document.querySelector("#icon4");
let icon5 = document.querySelector("#icon5");
let icon6 = document.querySelector("#icon6");

function navigateTo(url) {
    if (menuOpen) {
        features.style.display = "none";
        sidebar.classList.remove("menu-expanded");
        menuIcon.style.transform = "rotate(0deg)";
        menuOpen = false;
    }
    window.location.href = url;
}

icon1.addEventListener("click",()=>{
    navigateTo("whether/whether.html")
})

icon2.addEventListener("click",()=>{
    navigateTo("Plan/plan.html")
})

icon3.addEventListener("click",()=>{
    navigateTo("pomodoro/pomodoro.html")
})

icon4.addEventListener("click",()=>{
    navigateTo("To-do/todo.html")
})
icon5.addEventListener("click",()=>{
    navigateTo("Goals/goals.html")
})
icon6.addEventListener("click",()=>{
    navigateTo("More/more.html")
})


const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    posX += (mouseX - posX) * 0.18;
    posY += (mouseY - posY) * 0.18;

    cursor.style.left = posX + "px";
    cursor.style.top = posY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();

document.querySelectorAll("button,a,.feature-card,.sidebar-icon,.theme-btn").forEach(el => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
});


document.addEventListener("mousedown", () => cursor.classList.add("click"));
document.addEventListener("mouseup", () => cursor.classList.remove("click"));


