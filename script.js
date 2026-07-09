let whether=document.querySelector("#card1");
whether.addEventListener("click",()=>{
    window.location.href="/whether/whether.html";
})
let todo=document.querySelector("#card3")
todo.addEventListener("click",()=>{
    console.log()
    window.location.href="To-do/todo.html";
})

let pomo=document.querySelector("#card5");

pomo.addEventListener("click",()=>{
    window.location.href="pomodoro/pomodoro.html"
})

const darkbtn = document.querySelector(".dark-btn");
const body = document.body;
const bg = document.querySelector("#background");


let videobtn=document.querySelector("#video-b");
let backVideo=document.querySelector("#back-video");
let videoSource=document.querySelector("#video-source")

let isDark = false;

darkbtn.addEventListener("click", () => {
    isDark = !isDark;

    if (isDark) {
        darkbtn.style.backgroundImage = 'url("/image/sun.png")';
        body.style.backgroundColor = "#000";
        bg.style.display = "none";
    } else {
        darkbtn.style.backgroundImage = 'url("/image/night.png")';
        body.style.backgroundColor = "#fff";
        bg.style.display = "block";
    }
});



let back=document.querySelector("#background");
let th1=document.querySelector("#th1");
let th2=document.querySelector("#th2");
let alltheme=document.querySelector("#alltheme")

let themes=[
    "image/pexels-pok-rie-33563-132037.jpg",
    "image/pexels-jplenio-1642770.jpg",
    "image/pexels-jess-vide-5007325.jpg",
    "image/pexels-magda-ehlers-pexels-636353.jpg",
    "image/himmelstraeume-flower-7543035 (1).jpg",
    "image/seaq68-river-2951997.jpg",
]

th1.addEventListener("click",()=>{
   back.src=themes[0];
   backVideo.style.display='none'
})


th2.addEventListener("click",()=>{
   back.src=themes[1];
   backVideo.style.display='none'

})

let counter=2;
let isdefault=true;
alltheme.addEventListener("click",()=>{
   backVideo.style.display='none'
    counter++;
    if(counter >= themes.length){
        counter = 0;
    }
    back.src = themes[counter];

});



let video=[
   "Videos/16154140_1920_1080_30fps.mp4",
   "Videos/3209989-uhd_3840_2160_25fps.mp4",
   "Videos/3736703-uhd_3840_2160_24fps.mp4",
   "Videos/6514282-hd_1920_1080_30fps.mp4",
   "Videos/12719557-uhd_3840_2160_25fps.mp4",
   "Videos/15450104_1920_1080_30fps.mp4",
   "Videos/15957274_3840_2160_60fps.mp4"
]
// /Videos/16154140_1920_1080_30fps.mp4
let videoCount=0;
let isvideo=true;
videobtn.addEventListener("click",(event)=>{
   backVideo.style.display='block'
    videoCount++;
    if(videoCount>=video.length){
        videoCount=0;
    }
  videoSource.src=video[videoCount];
  backVideo.load();            
    backVideo.play(); 
})


let icon1=document.querySelector("#icon1")
let icon2=document.querySelector("#icon2")
let icon3=document.querySelector("#icon3")
let icon4=document.querySelector("#icon4")
let icon5=document.querySelector("#icon5")
let icon6=document.querySelector("#icon6")

icon1.addEventListener("click",()=>{
    window.location.href="whether/whether.html"
})

icon2.addEventListener("click",()=>{
    window.location.href="To-do/todo.html"
})

icon3.addEventListener("click",()=>{
    window.location.href="pomodoro/pomodoro.html"
})

icon4.addEventListener("click",()=>{
    window.location.href="Plan/plan.html"
})
icon5.addEventListener("click",()=>{
    window.location.href="Goals/goals.html"
})
icon6.addEventListener("click",()=>{
    window.location.href="More/more.html"
})
