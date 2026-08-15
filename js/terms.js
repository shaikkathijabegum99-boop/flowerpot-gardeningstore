document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("theme-btn");
    const rtlBtn = document.getElementById("rtl-btn");
    const savedTheme = localStorage.getItem("bloomnest-theme");
    if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        document.documentElement.classList.add("dark-mode");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        document.documentElement.classList.remove("dark-mode");
    }
    function updateThemeIcon() {
        if (!themeBtn) return;
        const isDark =
            document.documentElement.getAttribute("data-theme") === "dark";
        themeBtn.innerHTML = `
            <i data-lucide="${isDark ? "sun" : "moon"}"></i>
        `;
        themeBtn.setAttribute(
            "aria-label",
            isDark ? "Switch to Light Mode" : "Switch to Dark Mode"
        );
        if (window.lucide) {
            lucide.createIcons();
        }
    }
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const isDark =
                document.documentElement.getAttribute("data-theme") === "dark";
            if (isDark) {
                document.documentElement.setAttribute(
                    "data-theme",
                    "light"
                );
                document.documentElement.classList.remove(
                    "dark-mode"
                );
                localStorage.setItem(
                    "bloomnest-theme",
                    "light"
                );
            } else {
                document.documentElement.setAttribute(
                    "data-theme",
                    "dark"
                );
                document.documentElement.classList.add(
                    "dark-mode"
                );
                localStorage.setItem(
                    "bloomnest-theme",
                    "dark"
                );
            }
            updateThemeIcon();
        });
    }
    const savedDirection =
        localStorage.getItem("bloomnest-direction");
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
    function updateRTLIcon() {
        if (!rtlBtn) return;
        const isRTL =
            document.documentElement.getAttribute("dir") === "rtl";
        rtlBtn.setAttribute(
            "aria-label",
            isRTL ? "Switch to LTR" : "Switch to RTL"
        );
    }
    if (rtlBtn) {
        rtlBtn.addEventListener("click", () => {
            const isRTL =
                document.documentElement.getAttribute("dir") === "rtl";
            if (isRTL) {
                document.documentElement.setAttribute(
                    "dir",
                    "ltr"
                );
                localStorage.setItem(
                    "bloomnest-direction",
                    "ltr"
                );
            } else {
                document.documentElement.setAttribute(
                    "dir",
                    "rtl"
                );
                localStorage.setItem(
                    "bloomnest-direction",
                    "rtl"
                );
            }
            updateRTLIcon();
        });
    }
    updateThemeIcon();
    updateRTLIcon();
});