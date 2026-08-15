document.addEventListener("DOMContentLoaded", function () {
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
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
    const savedTheme =
        localStorage.getItem("bloomnest-theme");
    const savedDirection =
        localStorage.getItem("bloomnest-direction");
    const savedEmail =
        localStorage.getItem("bloomnest-email");
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
        updateThemeIcon(true);
    } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
        updateThemeIcon(false);
    }
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
    if (savedEmail && emailInput) {
        emailInput.value = savedEmail;
        if (rememberCheckbox) {
            rememberCheckbox.checked = true;
        }
    }
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
document.addEventListener("DOMContentLoaded", function () {
    const password =
        document.getElementById("password");
    const eye =
        document.querySelector(".pw-eye");
    if (eye) {
        eye.style.display = "none";
        eye.remove();
    }
    if (password) {
        password.type = "password";
    }
});
    window.handleLogin = function () {
        clearMessage();
        if (!emailInput || !passwordInput) {
            return;
        }
        const email =
            emailInput.value.trim();
        const password =
            passwordInput.value.trim();
        if (!email) {
            showMessage(
                "Please enter your email address.",
                "error"
            );
            emailInput.focus();
            return;
        }
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
        if (!password) {
            showMessage(
                "Please enter your password.",
                "error"
            );
            passwordInput.focus();
            return;
        }
        if (password.length < 6) {
            showMessage(
                "Password must contain at least 6 characters.",
                "error"
            );
            passwordInput.focus();
            return;
        }
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
        showMessage(
            "Sign in successful. Redirecting...",
            "success"
        );
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
        setTimeout(function () {
            window.location.href =
                "../dashboard.html";
        }, 900);
    };
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