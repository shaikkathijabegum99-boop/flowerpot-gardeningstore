(function () {
    "use strict";
    console.log("BloomNest booknow.js loaded");
    function refreshIcons() {
        if (
            window.lucide &&
            typeof window.lucide.createIcons === "function"
        ) {
            window.lucide.createIcons();
        }
    }
    function createPopup() {
        let popup =
            document.getElementById("bnTestPopup");
        if (popup) {
            return popup;
        }
        popup =
            document.createElement("div");
        popup.id =
            "bnTestPopup";
        popup.className =
            "bn-popup";
        popup.setAttribute(
            "aria-hidden",
            "true"
        );
        popup.innerHTML = `
            <div class="bn-popup-overlay"></div>
            <div
                class="bn-popup-box"
                role="dialog"
                aria-modal="true"
                aria-labelledby="bnPopupTitle">
                <button
                    type="button"
                    class="bn-popup-close"
                    aria-label="Close booking popup">
                    <i data-lucide="x"></i>
                </button>
                <div class="bn-popup-header">
                    <span class="section-tag">
                        <i data-lucide="leaf"></i>
                        BloomNest Garden Services
                    </span>
                    <h2 id="bnPopupTitle">
                        Book Your
                        <em>Garden Service</em>
                    </h2>
                    <p>
                        Choose the gardening support you need,
                        share your details and select a convenient
                        appointment time.
                    </p>
                </div>
                <form
                    id="bnPopupForm"
                    class="bn-popup-form">
                    <!-- =====================================
                         SERVICE
                    ====================================== -->
                    <div class="bn-popup-heading">
                        <span>01</span>
                        <div>
                            <h3>
                                Select Your Service
                            </h3>
                            <p>
                                Choose the service that matches
                                your gardening requirement.
                            </p>
                        </div>
                    </div>
                    <div class="bn-popup-services">
                        <label class="bn-popup-service">
                            <input
                                type="radio"
                                name="bnService"
                                value="plant-consultation"
                                checked>
                            <span class="bn-service-icon">
                                <i data-lucide="sprout"></i>
                            </span>
                            <span class="bn-service-text">
                                <strong>
                                    Plant Consultation
                                </strong>
                                <small>
                                    Indoor, balcony and outdoor
                                    plant selection.
                                </small>
                            </span>
                            <span class="bn-service-price">
                                ₹499+
                            </span>
                        </label>
                        <label class="bn-popup-service">
                            <input
                                type="radio"
                                name="bnService"
                                value="pot-planter-guidance">
                            <span class="bn-service-icon">
                                <i data-lucide="flower-2"></i>
                            </span>
                            <span class="bn-service-text">
                                <strong>
                                    Pot &amp; Planter Guidance
                                </strong>
                                <small>
                                    Choose suitable pots and
                                    planters for your plants.
                                </small>
                            </span>
                            <span class="bn-service-price">
                                ₹399+
                            </span>
                        </label>
                        <label class="bn-popup-service">
                            <input
                                type="radio"
                                name="bnService"
                                value="home-garden-setup">
                            <span class="bn-service-icon">
                                <i data-lucide="home"></i>
                            </span>
                            <span class="bn-service-text">
                                <strong>
                                    Home Garden Setup
                                </strong>
                                <small>
                                    Plan a practical green
                                    space for your home.
                                </small>
                            </span>
                            <span class="bn-service-price">
                                ₹999+
                            </span>
                        </label>
                        <label class="bn-popup-service">
                            <input
                                type="radio"
                                name="bnService"
                                value="plant-care">
                            <span class="bn-service-icon">
                                <i data-lucide="heart-handshake"></i>
                            </span>
                            <span class="bn-service-text">
                                <strong>
                                    Plant Care Consultation
                                </strong>
                                <small>
                                    Watering, feeding and
                                    practical care guidance.
                                </small>
                            </span>
                            <span class="bn-service-price">
                                ₹399+
                            </span>
                        </label>
                        <label class="bn-popup-service">
                            <input
                                type="radio"
                                name="bnService"
                                value="product-guidance">
                            <span class="bn-service-icon">
                                <i data-lucide="shopping-bag"></i>
                            </span>
                            <span class="bn-service-text">
                                <strong>
                                    Garden Product Guidance
                                </strong>
                                <small>
                                    Soil, seeds, fertilizers
                                    and gardening tools.
                                </small>
                            </span>
                            <span class="bn-service-price">
                                Free
                            </span>
                        </label>
                        <label class="bn-popup-service">
                            <input
                                type="radio"
                                name="bnService"
                                value="bulk-landscaper">
                            <span class="bn-service-icon">
                                <i data-lucide="package-check"></i>
                            </span>
                            <span class="bn-service-text">
                                <strong>
                                    Bulk / Landscaper Order
                                </strong>
                                <small>
                                    Larger quantities and
                                    project requirements.
                                </small>
                            </span>
                            <span class="bn-service-price">
                                Quote
                            </span>
                        </label>
                    </div>
                    <!-- =====================================
                         DETAILS
                    ====================================== -->
                    <div
                        class="bn-popup-heading bn-details-heading">
                        <span>02</span>
                        <div>
                            <h3>
                                Your Details
                            </h3>
                            <p>
                                Tell us how to contact you
                                and when you need the service.
                            </p>
                        </div>
                    </div>
                    <div class="bn-popup-fields">
                        <div class="bn-field">
                            <label for="bnName">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="bnName"
                                name="name"
                                placeholder="Your full name"
                                autocomplete="name"
                                required>
                        </div>
                        <div class="bn-field">
                            <label for="bnPhone">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="bnPhone"
                                name="phone"
                                placeholder="+91 98765 43210"
                                autocomplete="tel"
                                required>
                        </div>
                        <div class="bn-field">
                            <label for="bnEmail">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="bnEmail"
                                name="email"
                                placeholder="you@example.com"
                                autocomplete="email"
                                required>
                        </div>
                        <div class="bn-field">
                            <label for="bnDate">
                                Preferred Date
                            </label>
                            <input
                                type="date"
                                id="bnDate"
                                name="date"
                                required>
                        </div>
                        <div class="bn-field">
                            <label for="bnTime">
                                Preferred Time
                            </label>
                            <select
                                id="bnTime"
                                name="time"
                                required>
                                <option value="">
                                    Select Time
                                </option>
                                <option value="09:00">
                                    9:00 AM
                                </option>
                                <option value="10:30">
                                    10:30 AM
                                </option>
                                <option value="12:00">
                                    12:00 PM
                                </option>
                                <option value="14:00">
                                    2:00 PM
                                </option>
                                <option value="15:30">
                                    3:30 PM
                                </option>
                                <option value="17:00">
                                    5:00 PM
                                </option>
                            </select>
                        </div>
                        <div class="bn-field">
                            <label for="bnType">
                                Consultation Type
                            </label>
                            <select
                                id="bnType"
                                name="type"
                                required>
                                <option value="">
                                    Select Type
                                </option>
                                <option value="home">
                                    Home Visit
                                </option>
                                <option value="store">
                                    Store Consultation
                                </option>
                                <option value="online">
                                    Online Consultation
                                </option>
                            </select>
                        </div>
                        <div class="bn-field">
                            <label for="bnCategory">
                                Product Category
                            </label>
                            <select
                                id="bnCategory"
                                name="category">
                                <option value="">
                                    Select Category
                                </option>
                                <option value="plants">
                                    Plants
                                </option>
                                <option value="pots">
                                    Flower Pots
                                </option>
                                <option value="soil">
                                    Soil &amp; Compost
                                </option>
                                <option value="seeds">
                                    Seeds
                                </option>
                                <option value="fertilizers">
                                    Fertilizers
                                </option>
                                <option value="tools">
                                    Garden Tools
                                </option>
                                <option value="multiple">
                                    Multiple Categories
                                </option>
                            </select>
                        </div>
                        <div class="bn-field">
                            <label for="bnQuantity">
                                Estimated Quantity
                            </label>
                            <input
                                type="text"
                                id="bnQuantity"
                                name="quantity"
                                placeholder="Example: 20 plants">
                        </div>
                        <div class="bn-field full">
                            <label for="bnLocation">
                                Location
                            </label>
                            <input
                                type="text"
                                id="bnLocation"
                                name="location"
                                placeholder="Home, balcony, garden or project location"
                                required>
                        </div>
                        <div class="bn-field full">
                            <label for="bnMessage">
                                Additional Details
                            </label>
                            <textarea
                                id="bnMessage"
                                name="message"
                                rows="4"
                                placeholder="Tell us about your garden, products or project..."></textarea>
                        </div>
                    </div>
                    <label class="bn-popup-consent">
                        <input
                            type="checkbox"
                            id="bnConsent"
                            required>
                        <span>
                            I agree to be contacted by
                            BloomNest regarding this booking request.
                        </span>
                    </label>
                    <div
                        class="bn-popup-error"
                        id="bnPopupError"
                        aria-live="polite">
                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary bn-popup-submit">
                        Request Booking
                        <i data-lucide="calendar-check"></i>
                    </button>
                    <p class="bn-popup-note">
                        Booking requests are subject to availability.
                        Our team will contact you to confirm the appointment.
                    </p>
                </form>
            </div>
        `;
        document.body.appendChild(popup);
        bindPopupEvents();
        refreshIcons();
        return popup;
    }
    function bindPopupEvents() {
        const popup =
            document.getElementById(
                "bnTestPopup"
            );
        if (!popup) {
            return;
        }
        const closeButton =
            popup.querySelector(
                ".bn-popup-close"
            );
        const overlay =
            popup.querySelector(
                ".bn-popup-overlay"
            );
        const form =
            popup.querySelector(
                "#bnPopupForm"
            );
        if (closeButton) {
            closeButton.addEventListener(
                "click",
                closePopup
            );
        }
        if (overlay) {
            overlay.addEventListener(
                "click",
                closePopup
            );
        }
        if (form) {
            form.addEventListener(
                "submit",
                submitBooking
            );
        }
        popup
            .querySelectorAll(
                '.bn-popup-service input[type="radio"]'
            )
            .forEach(
                function (radio) {
                    radio.addEventListener(
                        "change",
                        updateServiceCards
                    );
                }
            );
        updateServiceCards();
    }
    function updateServiceCards() {
        const popup =
            document.getElementById(
                "bnTestPopup"
            );
        if (!popup) {
            return;
        }
        popup
            .querySelectorAll(
                ".bn-popup-service"
            )
            .forEach(
                function (card) {
                    const radio =
                        card.querySelector(
                            'input[type="radio"]'
                        );
                    card.classList.toggle(
                        "selected",
                        radio
                            ? radio.checked
                            : false
                    );
                }
            );
    }
    function openPopup() {
        const popup =
            createPopup();
        if (!popup) {
            return;
        }
        popup.classList.add("show");
        popup.setAttribute(
            "aria-hidden",
            "false"
        );
        document.body.classList.add(
            "bn-popup-open"
        );
        setMinimumDate();
        refreshIcons();
        console.log(
            "BloomNest Book Now popup opened"
        );
    }
    function closePopup() {
        const popup =
            document.getElementById(
                "bnTestPopup"
            );
        if (!popup) {
            return;
        }
        popup.classList.remove(
            "show"
        );
        popup.setAttribute(
            "aria-hidden",
            "true"
        );
        document.body.classList.remove(
            "bn-popup-open"
        );
    }
    document.addEventListener(
        "click",
        function (event) {
            const button =
                event.target.closest(
                    ".booknow-trigger"
                );
            if (!button) {
                return;
            }
            event.preventDefault();
            event.stopImmediatePropagation();
            openPopup();
        },
        true
    );
    document.addEventListener(
        "keydown",
        function (event) {
            if (
                event.key === "Escape"
            ) {
                closePopup();
            }
        }
    );
    function setMinimumDate() {
        const dateInput =
            document.getElementById(
                "bnDate"
            );
        if (!dateInput) {
            return;
        }
        const today =
            new Date();
        const year =
            today.getFullYear();
        const month =
            String(
                today.getMonth() + 1
            ).padStart(
                2,
                "0"
            );
        const day =
            String(
                today.getDate()
            ).padStart(
                2,
                "0"
            );
        dateInput.min =
            `${year}-${month}-${day}`;
    }
    function submitBooking(event) {
        event.preventDefault();
        const name =
            getValue("bnName");
        const phone =
            getValue("bnPhone");
        const email =
            getValue("bnEmail");
        const date =
            getValue("bnDate");
        const time =
            getValue("bnTime");
        const type =
            getValue("bnType");
        const category =
            getValue("bnCategory");
        const quantity =
            getValue("bnQuantity");
        const location =
            getValue("bnLocation");
        const message =
            getValue("bnMessage");
        const service =
            document.querySelector(
                'input[name="bnService"]:checked'
            )?.value || "";
        const consent =
            document.getElementById(
                "bnConsent"
            );
        if (
            !name ||
            !phone ||
            !email ||
            !date ||
            !time ||
            !type ||
            !location
        ) {
            showError(
                "Please complete all required fields."
            );
            return;
        }
        if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                email
            )
        ) {
            showError(
                "Please enter a valid email address."
            );
            return;
        }
        const cleanPhone =
            phone.replace(
                /[\s\-()+]/g,
                ""
            );
        if (
            !/^\d{8,15}$/.test(
                cleanPhone
            )
        ) {
            showError(
                "Please enter a valid phone number."
            );
            return;
        }
        if (
            !consent ||
            !consent.checked
        ) {
            showError(
                "Please accept the contact permission."
            );
            return;
        }
        const booking = {
            id:
                "BN-" +
                Date.now(),
            name,
            phone,
            email,
            service,
            date,
            time,
            type,
            category,
            quantity,
            location,
            message,
            createdAt:
                new Date().toISOString()
        };
        saveBooking(
            booking
        );
        showSuccess(
            booking
        );
    }
    function saveBooking(booking) {
        let bookings = [];
        try {
            bookings =
                JSON.parse(
                    localStorage.getItem(
                        "bloomnestBookings"
                    )
                ) || [];
            if (
                !Array.isArray(
                    bookings
                )
            ) {
                bookings = [];
            }
        } catch (error) {
            bookings = [];
        }
        bookings.push(
            booking
        );
        try {
            localStorage.setItem(
                "bloomnestBookings",
                JSON.stringify(
                    bookings
                )
            );
            localStorage.setItem(
                "bloomnestLatestBooking",
                JSON.stringify(
                    booking
                )
            );
        } catch (error) {
            console.warn(
                "BloomNest: localStorage unavailable.",
                error
            );
        }
    }
    function showError(message) {
        const box =
            document.getElementById(
                "bnPopupError"
            );
        if (!box) {
            return;
        }
        box.textContent =
            message;
        box.classList.add(
            "show"
        );
        clearTimeout(
            box._timer
        );
        box._timer =
            setTimeout(
                function () {
                    box.classList.remove(
                        "show"
                    );
                },
                3500
            );
    }
    function showSuccess(booking) {
        const popup =
            document.getElementById(
                "bnTestPopup"
            );
        if (!popup) {
            return;
        }
        const box =
            popup.querySelector(
                ".bn-popup-box"
            );
        if (!box) {
            return;
        }
        box.innerHTML = `
            <button
                type="button"
                class="bn-popup-close"
                id="bnSuccessClose"
                aria-label="Close">
                <i data-lucide="x"></i>
            </button>
            <div class="bn-popup-success">
                <div class="bn-success-icon">
                    <i data-lucide="check-circle-2"></i>
                </div>
                <span class="section-tag">
                    <i data-lucide="leaf"></i>
                    BloomNest Booking
                </span>
                <h2>
                    Booking Request
                    <em>Received!</em>
                </h2>
                <p>
                    Thank you,
                    <strong>
                        ${escapeHTML(
                            booking.name
                        )}
                    </strong>.
                    Your
                    <strong>
                        ${escapeHTML(
                            getServiceName(
                                booking.service
                            )
                        )}
                    </strong>
                    request has been received.
                    Our team will contact you to confirm
                    availability.
                </p>
                <div class="bn-success-details">
                    <div>
                        <i data-lucide="sprout"></i>
                        <span>
                            Service
                        </span>
                        <strong>
                            ${escapeHTML(
                                getServiceName(
                                    booking.service
                                )
                            )}
                        </strong>
                    </div>
                    <div>
                        <i data-lucide="calendar-days"></i>
                        <span>
                            Date
                        </span>
                        <strong>
                            ${escapeHTML(
                                formatDate(
                                    booking.date
                                )
                            )}
                        </strong>
                    </div>
                    <div>
                        <i data-lucide="clock-3"></i>
                        <span>
                            Time
                        </span>
                        <strong>
                            ${escapeHTML(
                                booking.time
                            )}
                        </strong>
                    </div>
                    <div>
                        <i data-lucide="map-pin"></i>
                        <span>
                            Location
                        </span>
                        <strong>
                            ${escapeHTML(
                                booking.location
                            )}
                        </strong>
                    </div>
                </div>
                <div class="bn-success-note">
                    <i data-lucide="info"></i>
                    <span>
                        Your request has been saved.
                        BloomNest will contact you to
                        confirm the appointment.
                    </span>
                </div>
                <button
                    type="button"
                    class="btn btn-primary"
                    id="bnSuccessDone">
                    Done
                    <i data-lucide="check"></i>
                </button>
            </div>
        `;
        document
            .getElementById(
                "bnSuccessClose"
            )
            ?.addEventListener(
                "click",
                closePopup
            );
        document
            .getElementById(
                "bnSuccessDone"
            )
            ?.addEventListener(
                "click",
                closePopup
            );
        refreshIcons();
    }
    function getServiceName(
        value
    ) {
        const names = {
            "plant-consultation":
                "Plant Consultation",
            "pot-planter-guidance":
                "Pot & Planter Guidance",
            "home-garden-setup":
                "Home Garden Setup",
            "plant-care":
                "Plant Care Consultation",
            "product-guidance":
                "Garden Product Guidance",
            "bulk-landscaper":
                "Bulk / Landscaper Order"
        };
        return (
            names[value] ||
            value ||
            "Garden Service"
        );
    }
    function formatDate(
        value
    ) {
        if (!value) {
            return "";
        }
        const date =
            new Date(
                value +
                "T00:00:00"
            );
        if (
            Number.isNaN(
                date.getTime()
            )
        ) {
            return value;
        }
        return date.toLocaleDateString(
            "en-IN",
            {
                day:"numeric",
                month:"short",
                year:"numeric"
            }
        );
    }
    function getValue(id) {
        const element =
            document.getElementById(
                id
            );
        return element
            ? element.value.trim()
            : "";
    }
    function escapeHTML(
        value
    ) {
        return String(value)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );
    }
    if (
        document.readyState ===
        "loading"
    ) {
        document.addEventListener(
            "DOMContentLoaded",
            refreshIcons
        );
    } else {
        refreshIcons();
    }
})();