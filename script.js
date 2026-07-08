/* ==========================================
   KHUN NAUNG PORTFOLIO
   script.js
========================================== */

/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 1800);
    }
});

/* =========================
   STICKY NAVBAR
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,.85)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    } else {

        navbar.style.background = "rgba(0,0,0,.25)";
        navbar.style.boxShadow = "none";

    }

});

/* =========================
   CURSOR
========================= */

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {

    if (!cursor) return;

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

/* =========================
   TRAILER MODAL
========================= */

const modal = document.getElementById("trailerModal");
const frame = document.getElementById("videoFrame");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".watch-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        if (!modal || !frame) return;

        const video = btn.dataset.video;

        frame.src = video + "?autoplay=1";

        modal.style.display = "flex";

    });

});

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";
        frame.src = "";

    });

}

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";
        frame.src = "";

    }

});

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* =========================
   GALLERY EFFECT
========================= */

document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

console.log("KHUN NAUNG Portfolio Loaded Successfully");
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("loader-hide");

        }, 1800);

    }

});
/* ==========================
   LIGHTBOX
========================== */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});
/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

}
/* ==========================
   GSAP HERO ANIMATION
========================== */

window.addEventListener("load", () => {

    gsap.from(".hero-content h4", {
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from(".hero-content h1", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.3
    });

    gsap.from(".hero-content p", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8
    });

    gsap.from(".hero-buttons", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 1.2
    });

});
/* ==========================
   SCROLL PROGRESS BAR
========================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const totalHeight =
document.documentElement.scrollHeight-window.innerHeight;

const progress =
(window.scrollY/totalHeight)*100;

progressBar.style.width=progress+"%";

});
/* ==========================
   PAGE TRANSITION
========================== */

const transition = document.getElementById("page-transition");

document.querySelectorAll("a").forEach(link=>{

    const href = link.getAttribute("href");

    if(
        href &&
        !href.startsWith("#") &&
        !href.startsWith("http")
    ){

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            transition.classList.add("active");

            setTimeout(()=>{

                window.location.href=href;

            },700);

        });

    }

});
/* ==========================
   A24 INTRO
========================== */

window.addEventListener("load",()=>{

gsap.timeline()

.fromTo(".hero-content h1",
{
opacity:0,
y:120
},
{
opacity:1,
y:0,
duration:1.3,
ease:"power4.out"
})

.fromTo(".hero-content h2",
{
opacity:0,
y:80
},
{
opacity:1,
y:0,
duration:.9
},"-=.7")

.fromTo(".hero-content p",
{
opacity:0,
y:60
},
{
opacity:1,
y:0,
duration:.8
},"-=.5")

.fromTo(".btn",
{
opacity:0,
y:50
},
{
opacity:1,
y:0,
duration:.7
},"-=.4");

});
/* ==========================
   SHOWREEL POPUP
========================== */

const popup = document.getElementById("showreel-popup");
const popupVideo = document.getElementById("showreel-video");
const popupClose = document.querySelector(".popup-close");
const playBtn = document.querySelector(".play-showreel");

if(playBtn){

playBtn.addEventListener("click",(e)=>{

e.preventDefault();

popup.style.display="flex";

/* YouTube Video */


popupVideo.src =
"https://www.youtube.com/embed/Ox8qxNEfrh0?autoplay=1";

});

}

if(popupClose){

popupClose.addEventListener("click",()=>{

popup.style.display="none";

popupVideo.src="";

});

}

window.addEventListener("click",(e)=>{

if(e.target===popup){

popup.style.display="none";

popupVideo.src="";

}

});

window.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

popup.style.display="none";

popupVideo.src="";

}

});