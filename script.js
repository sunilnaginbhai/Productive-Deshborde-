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
        tod.click();
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
        daily.click();
    }
});

const darkbtn = document.querySelector(".dark-btn");
const body = document.body;
const bg = document.querySelector("#background");
const backVideo = document.querySelector("#back-video");

let isDark = localStorage.getItem("darkMode") === "true";

// Apply saved theme on load
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
    bg.style.opacity = "0";
    backVideo.style.opacity = "0";
    document.documentElement.style.backgroundColor = "#000";
}

function disableDarkMode() {
    darkbtn.style.backgroundImage = 'url("/image/night.png")';
    body.style.backgroundColor = "transparent";
    bg.style.opacity = "1";
    if (backVideo.style.display === "block") {
        backVideo.style.opacity = "1";
    }
    document.documentElement.style.backgroundColor = "transparent";
}

// ===== THEME SWITCHING =====
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

// Add smooth transition to background
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

// ===== SIDEBAR ICON INTERACTIONS =====
document.querySelectorAll(".sidebar-icon").forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
        icon.style.transform = "scale(1.1)";
    });
    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "scale(1)";
    });
});

// ===== CARD HOVER EFFECTS =====
document.querySelectorAll(".feature-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(10px)";
    });
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener("keydown", (e) => {
    if (e.key === "d" || e.key === "D") {
        darkbtn.click();
    }
});

// ===== SMOOTH PAGE LOAD ANIMATION =====

window.addEventListener("load", () => {
    document.body.style.animation = "fadeIn 0.5s ease-in";
    document.querySelectorAll(".skeleton").forEach((el) => {
        el.classList.remove("skeleton");
    });

});

// window.addEventListener("load", () => {
    // document.body.style.animation = "fadeIn 3s ease-in";

// });

// ===== RESPONSIVE MENU =====
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

// Close menu when clicking outside
document.addEventListener("click", () => {
    if (menuOpen) {
        menuOpen = false;
        features.style.display = "none";
        sidebar.classList.remove("menu-expanded");
        menuIcon.style.transform = "rotate(0deg)";
    }
});

// ===== VIDEO PLAYBACK =====
let video = [
    "Videos/16154140_1920_1080_30fps.mp4",
    "Videos/3209989-uhd_3840_2160_25fps.mp4",
    "Videos/3736703-uhd_3840_2160_24fps.mp4",
    "Videos/6514282-hd_1920_1080_30fps.mp4",
    "Videos/12719557-uhd_3840_2160_25fps.mp4",
    "Videos/15450104_1920_1080_30fps.mp4",
    "Videos/15957274_3840_2160_60fps.mp4"
];

let videoCount = 0;
let isVideoPlaying = false;

// Only attach event listener if videobtn exists
if (videobtn) {
    videobtn.addEventListener("click", (event) => {
        event.stopPropagation();
    
    if (!isVideoPlaying) {
        // Start video
        isVideoPlaying = true;
        
        // Add video to viewport
        backVideo.classList.add("visible");
        const container = document.querySelector("#container");
        container.classList.add("video-playing");
        
        // Update button state
        videobtn.classList.add("active");
        const icon = videobtn.querySelector("i");
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        
        videoCount++;
        if (videoCount >= video.length) {
            videoCount = 0;
        }
        
        // Load and play video
        videoSource.src = video[videoCount];
        backVideo.load();
        const playPromise = backVideo.play();
        
        if (playPromise !== undefined) {
            playPromise.catch((error) => {
                console.error("Video playback error:", error);
                // Reset state if play fails
                isVideoPlaying = false;
                backVideo.classList.remove("visible");
                container.classList.remove("video-playing");
                videobtn.classList.remove("active");
                icon.classList.add("fa-play");
                icon.classList.remove("fa-pause");
            });
        }
    } else {
        // Stop video
        closeVideo();
    }
    });
}

function closeVideo() {
    if (!videobtn) return; // Guard clause
    
    isVideoPlaying = false;
    backVideo.classList.remove("visible");
    const container = document.querySelector("#container");
    if (container) container.classList.remove("video-playing");
    
    // Update button state
    videobtn.classList.remove("active");
    const icon = videobtn.querySelector("i");
    if (icon) {
        icon.classList.add("fa-play");
        icon.classList.remove("fa-pause");
    }
    
    backVideo.pause();
    backVideo.currentTime = 0;
}

// Close video when clicking outside (on container)
document.addEventListener("click", (e) => {
    if (isVideoPlaying && videobtn && !videobtn.contains(e.target) && e.target !== backVideo) {
        closeVideo();
    }
});

// Close video with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isVideoPlaying) {
        closeVideo();
    }
});

// ===== SIDEBAR ICON NAVIGATION =====
let icon1 = document.querySelector("#icon1");
let icon2 = document.querySelector("#icon2");
let icon3 = document.querySelector("#icon3");
let icon4 = document.querySelector("#icon4");
let icon5 = document.querySelector("#icon5");
let icon6 = document.querySelector("#icon6");

// Helper function to close menu and navigate
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
