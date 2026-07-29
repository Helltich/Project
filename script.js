/* ==========================================
   SCRIPT.JS
   Pelindo Brew Fest 2026
========================================== */

/* ==========================================
   Mengambil elemen yang dibutuhkan
========================================== */

// Tombol Back To Top
const topBtn = document.getElementById("topBtn");

// Semua menu navbar
const navLinks = document.querySelectorAll(".nav-links a");

// Semua section
const sections = document.querySelectorAll("section");


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

// Menampilkan tombol ketika halaman discroll
window.addEventListener("scroll", () => {

    // Jika scroll lebih dari 300px
    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

// Ketika tombol diklik
topBtn.addEventListener("click", () => {

    // Scroll kembali ke atas dengan animasi
    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/* ==========================================
   FADE IN ANIMATION
========================================== */

// Observer digunakan untuk mengetahui
// kapan sebuah section muncul di layar.

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        // Jika section terlihat
        if (entry.isIntersecting) {

            // Tambahkan class show
            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

// Mengamati semua section
sections.forEach(section => {

    observer.observe(section);

});


/* ==========================================
   ACTIVE NAVBAR
========================================== */

// Mengganti menu aktif ketika discroll
window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        // Menentukan section yang sedang aktif
        if (pageYOffset >= sectionTop - 150) {

            currentSection = section.getAttribute("id");

        }

    });

    // Menghapus class active dari semua menu
    navLinks.forEach(link => {

        link.classList.remove("active");

        // Menambahkan active ke menu yang sesuai
        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

// Memberikan animasi scroll ketika menu diklik
navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        // Ambil id tujuan
        const targetID = this.getAttribute("href");

        const targetSection = document.querySelector(targetID);

        // Scroll ke section
        targetSection.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* ==========================================
   HERO BUTTON
========================================== */

// Tombol Explore Event
const exploreBtn = document.querySelector(".btn-primary");

exploreBtn.addEventListener("click", function(e){

    e.preventDefault();

    document.querySelector("#about").scrollIntoView({

        behavior:"smooth"

    });

});

// Tombol View Rundown
const rundownBtn = document.querySelector(".btn-secondary");

rundownBtn.addEventListener("click", function(e){

    e.preventDefault();

    document.querySelector("#rundown").scrollIntoView({

        behavior:"smooth"

    });

});


/* ==========================================
   MEMBERIKAN EFEK SAAT HALAMAN SELESAI DIMUAT
========================================== */

// Ketika website selesai dimuat
window.addEventListener("load", () => {

    // Hero langsung muncul
    document.querySelector(".hero").style.opacity = "1";

});
