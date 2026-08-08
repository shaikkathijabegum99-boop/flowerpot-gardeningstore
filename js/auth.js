
/* =========================================================
   BLOOMNEST
   AUTHENTICATION JAVASCRIPT
   Sign In Page
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       LUCIDE ICONS
    ===================================================== */

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const themeBtn = document.getElementById("theme-btn");
    const rtlBtn = document.getElementById("rtl-btn");

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const rememberCheckbox =
        document.querySelector(".auth-check input");

    const authMsg = document.getElementById("auth-msg");

    const signInBtn =
        document.querySelector(".auth-btn");

    const socialButtons =
        document.querySelectorAll(".social-btn");


    /* =====================================================
       LOAD SAVED SETTINGS
    ===================================================== */

    const savedTheme =
        localStorage.getItem("bloomnest-theme");

    const savedDirection =
        localStorage.getItem("bloomnest-direction");

    const savedEmail =
        localStorage.getItem("bloomnest-email");


    /* =====================================================
       APPLY SAVED THEME
    ===================================================== */

    if (savedTheme === "dark") {

        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");

        updateThemeIcon(true);

    } else {

        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");

        updateThemeIcon(false);
    }


    /* =====================================================
       APPLY SAVED RTL
    ===================================================== */

    if (savedDirection === "rtl") {

        document.documentElement.setAttribute(
            "dir",
            "rtl"
        );

    } else {

        document.documentElement.setAttribute(
            "dir",
            "ltr"
        );
    }


    /* =====================================================
       REMEMBERED EMAIL
    ===================================================== */

    if (savedEmail && emailInput) {

        emailInput.value = savedEmail;

        if (rememberCheckbox) {
            rememberCheckbox.checked = true;
        }
    }


    /* =====================================================
       THEME TOGGLE
    ===================================================== */

    if (themeBtn) {

        themeBtn.addEventListener("click", function () {

            const html =
                document.documentElement;

            const isDark =
                html.classList.contains("dark-mode");

            if (isDark) {

                html.classList.remove("dark-mode");
                html.classList.add("light-mode");

                localStorage.setItem(
                    "bloomnest-theme",
                    "light"
                );

                updateThemeIcon(false);

            } else {

                html.classList.remove("light-mode");
                html.classList.add("dark-mode");

                localStorage.setItem(
                    "bloomnest-theme",
                    "dark"
                );

                updateThemeIcon(true);
            }
        });
    }


    /* =====================================================
       RTL TOGGLE
    ===================================================== */

    if (rtlBtn) {

        rtlBtn.addEventListener("click", function () {

            const html =
                document.documentElement;

            const currentDirection =
                html.getAttribute("dir");

            if (currentDirection === "rtl") {

                html.setAttribute(
                    "dir",
                    "ltr"
                );

                localStorage.setItem(
                    "bloomnest-direction",
                    "ltr"
                );

            } else {

                html.setAttribute(
                    "dir",
                    "rtl"
                );

                localStorage.setItem(
                    "bloomnest-direction",
                    "rtl"
                );
            }

            if (typeof lucide !== "undefined") {
                lucide.createIcons();
            }
        });
    }



/* =====================================================
   BLOOMNEST PASSWORD
   Eye icon completely disabled
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const password =
        document.getElementById("password");

    const eye =
        document.querySelector(".pw-eye");

    /* Always hide the eye icon */
    if (eye) {
        eye.style.display = "none";
        eye.remove();
    }

    /* Keep password as password type */
    if (password) {
        password.type = "password";
    }

});


    /* =====================================================
       LOGIN FUNCTION
       Used by onclick="handleLogin()"
    ===================================================== */

    window.handleLogin = function () {

        clearMessage();

        if (!emailInput || !passwordInput) {
            return;
        }

        const email =
            emailInput.value.trim();

        const password =
            passwordInput.value.trim();


        /* ---------------------------------------------
           EMPTY EMAIL
        --------------------------------------------- */

        if (!email) {

            showMessage(
                "Please enter your email address.",
                "error"
            );

            emailInput.focus();

            return;
        }


        /* ---------------------------------------------
           EMAIL VALIDATION
        --------------------------------------------- */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showMessage(
                "Please enter a valid email address.",
                "error"
            );

            emailInput.focus();

            return;
        }


        /* ---------------------------------------------
           EMPTY PASSWORD
        --------------------------------------------- */

        if (!password) {

            showMessage(
                "Please enter your password.",
                "error"
            );

            passwordInput.focus();

            return;
        }


        /* ---------------------------------------------
           PASSWORD LENGTH
        --------------------------------------------- */

        if (password.length < 6) {

            showMessage(
                "Password must contain at least 6 characters.",
                "error"
            );

            passwordInput.focus();

            return;
        }


        /* ---------------------------------------------
           REMEMBER EMAIL
        --------------------------------------------- */

        if (rememberCheckbox &&
            rememberCheckbox.checked) {

            localStorage.setItem(
                "bloomnest-email",
                email
            );

        } else {

            localStorage.removeItem(
                "bloomnest-email"
            );
        }


        /* ---------------------------------------------
           SUCCESS
        --------------------------------------------- */

        showMessage(
            "Sign in successful. Redirecting...",
            "success"
        );


        /* ---------------------------------------------
           BUTTON STATE
        --------------------------------------------- */

        if (signInBtn) {

            signInBtn.disabled = true;

            signInBtn.style.opacity = "0.7";

            signInBtn.style.cursor = "not-allowed";

            signInBtn.innerHTML = `
                Signing In
                <i data-lucide="loader-circle"></i>
            `;

            if (typeof lucide !== "undefined") {
                lucide.createIcons();
            }
        }


        /* ---------------------------------------------
           REDIRECT
        --------------------------------------------- */

        setTimeout(function () {

            window.location.href =
                "../dashboard.html";

        }, 900);
    };


    /* =====================================================
       ENTER KEY LOGIN
    ===================================================== */

    if (emailInput) {

        emailInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    window.handleLogin();
                }
            }
        );
    }


    if (passwordInput) {

        passwordInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    window.handleLogin();
                }
            }
        );
    }


    /* =====================================================
       SOCIAL LOGIN BUTTONS
    ===================================================== */

    socialButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const provider =
                    button.textContent
                        .trim();

                showMessage(
                    provider +
                    " sign in will be available soon.",
                    "info"
                );
            }
        );
    });


    /* =====================================================
       CLEAR MESSAGE WHEN USER TYPES
    ===================================================== */

    if (emailInput) {

        emailInput.addEventListener(
            "input",
            clearMessage
        );
    }

    if (passwordInput) {

        passwordInput.addEventListener(
            "input",
            clearMessage
        );
    }


    /* =====================================================
       FUNCTIONS
    ===================================================== */

    function showMessage(message, type) {

        if (!authMsg) {
            return;
        }

        authMsg.textContent = message;

        authMsg.className =
            "auth-msg " + type;

        authMsg.style.display = "block";
    }


    function clearMessage() {

        if (!authMsg) {
            return;
        }

        authMsg.textContent = "";

        authMsg.className =
            "auth-msg";

        authMsg.style.display = "none";
    }


    function updateThemeIcon(isDark) {

        if (!themeBtn) {
            return;
        }

        const icon =
            themeBtn.querySelector("i");

        if (!icon) {
            return;
        }

        icon.setAttribute(
            "data-lucide",
            isDark
                ? "sun"
                : "moon"
        );

        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }
    }

});

function togglePw(inputId, button){

    const input = document.getElementById(inputId);

    if(!input) return;

    if(input.type === "password"){

        input.type = "text";

        button.innerHTML =
            '<i data-lucide="eye-off"></i>';

        button.setAttribute(
            "aria-label",
            "Hide password"
        );

    }else{

        input.type = "password";

        button.innerHTML =
            '<i data-lucide="eye"></i>';

        button.setAttribute(
            "aria-label",
            "Show password"
        );

    }

    if(typeof lucide !== "undefined"){
        lucide.createIcons();
    }

}