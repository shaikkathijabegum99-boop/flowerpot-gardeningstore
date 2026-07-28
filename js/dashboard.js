document.addEventListener("DOMContentLoaded", () => {

    /*==============================
    Lucide Icons
    ==============================*/

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    /*==============================
    Elements
    ==============================*/

    const body = document.body;
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
    const menuToggle = document.querySelector(".menu-toggle");
    const themeToggle = document.querySelector(".theme-toggle");

    /*==============================
    Sidebar Toggle
    ==============================*/

    if (menuToggle && sidebar) {

        menuToggle.addEventListener("click", function () {

            sidebar.classList.toggle("active");

            if (overlay) {
                overlay.classList.toggle("active");
            }

        });

    }

    /*==============================
    Overlay Close
    ==============================*/

    if (overlay) {

        overlay.addEventListener("click", function () {

            sidebar.classList.remove("active");
            overlay.classList.remove("active");

        });

    }

    /*==============================
    Close Sidebar After Menu Click
    ==============================*/

    document.querySelectorAll(".sidebar-nav a").forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 1024) {

                sidebar?.classList.remove("active");
                overlay?.classList.remove("active");

            }

        });

    });

    /*==============================
    ESC Key
    ==============================*/

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            sidebar?.classList.remove("active");
            overlay?.classList.remove("active");

        }

    });

    /*==============================
    Resize
    ==============================*/

    window.addEventListener("resize", function () {

        if (window.innerWidth > 1024) {

            sidebar?.classList.remove("active");
            overlay?.classList.remove("active");

        }

    });

    /*==============================
    Active Sidebar Menu
    ==============================*/

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".sidebar-nav a").forEach(function (link) {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            document.querySelectorAll(".sidebar-nav a").forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");

        }

    });

    /*==============================
    Load Saved Theme
    ==============================*/

    if (localStorage.getItem("theme") === "dark") {

        body.classList.add("dark-mode");

    }

    /*==============================
    Theme Toggle
    ==============================*/

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {

                localStorage.setItem("theme", "dark");

            } else {

                localStorage.setItem("theme", "light");

            }

        });

    }

});



lucide.createIcons();

/*==========================
Sales Chart
==========================*/

const salesChart=document.getElementById("salesChart");

if(salesChart){

new Chart(salesChart,{

type:"line",

data:{

labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],

datasets:[{

label:"Sales",

data:[18,24,28,35,42,38,48,55,62,58,66,74],

borderColor:"#1B5E20",

backgroundColor:"rgba(27,94,32,.08)",

borderWidth:3,

fill:true,

tension:.4,

pointRadius:4,

pointHoverRadius:6

}]

},

options:{

responsive:true,

maintainAspectRatio:false,

plugins:{

legend:{

display:false

}

},

scales:{

x:{

grid:{

display:false

}

},

y:{

beginAtZero:true,

grid:{

color:"rgba(0,0,0,.05)"

}

}

}

}

});

}

