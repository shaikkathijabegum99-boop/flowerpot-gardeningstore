document.addEventListener("click", function (event) {
    const button = event.target.closest(".booknow-trigger");
    if (!button) {
        return;
    }
    event.preventDefault();
    let modal = document.getElementById("bloomnestBookPopup");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "bloomnestBookPopup";
        modal.innerHTML = `
            <div class="booking-popup-overlay"></div>
            <div class="booking-popup-box">
                <button
                    type="button"
                    class="booking-popup-close"
                    aria-label="Close">
                    <i data-lucide="x"></i>
                </button>
                <div class="booking-popup-header">
                    <span class="section-tag">
                        <i data-lucide="leaf"></i>
                        BloomNest Garden Services
                    </span>
                    <h2>
                        Book Your
                        <em>Garden Service</em>
                    </h2>
                    <p>
                        Choose a service and tell us
                        about your gardening requirements.
                    </p>
                </div>
                <form id="bookingPopupForm">
                    <div class="booking-service-grid">
                        <label>
                            <input
                                type="radio"
                                name="bookingService"
                                value="Plant Consultation"
                                checked>
                            <span>
                                <i data-lucide="sprout"></i>
                                Plant Consultation
                            </span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="bookingService"
                                value="Garden Styling">
                            <span>
                                <i data-lucide="flower-2"></i>
                                Garden Styling
                            </span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="bookingService"
                                value="Home Garden Setup">
                            <span>
                                <i data-lucide="home"></i>
                                Home Garden Setup
                            </span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="bookingService"
                                value="Plant Care">
                            <span>
                                <i data-lucide="heart-handshake"></i>
                                Plant Care
                            </span>
                        </label>
                    </div>
                    <div class="booking-popup-fields">
                        <div>
                            <label>Full Name</label>
                            <input
                                type="text"
                                id="popupName"
                                placeholder="Your full name"
                                required>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                id="popupPhone"
                                placeholder="+91 98765 43210"
                                required>
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input
                                type="email"
                                id="popupEmail"
                                placeholder="you@example.com"
                                required>
                        </div>
                        <div>
                            <label>Preferred Date</label>
                            <input
                                type="date"
                                id="popupDate"
                                required>
                        </div>
                        <div>
                            <label>Preferred Time</label>
                            <select id="popupTime" required>
                                <option value="">
                                    Select Time
                                </option>
                                <option>9:00 AM</option>
                                <option>10:30 AM</option>
                                <option>12:00 PM</option>
                                <option>2:00 PM</option>
                                <option>3:30 PM</option>
                                <option>5:00 PM</option>
                            </select>
                        </div>
                        <div>
                            <label>Consultation Type</label>
                            <select id="popupType" required>
                                <option value="">
                                    Select Type
                                </option>
                                <option>Home Visit</option>
                                <option>Store Consultation</option>
                                <option>Online Consultation</option>
                            </select>
                        </div>
                        <div class="full">
                            <label>Location</label>
                            <input
                                type="text"
                                id="popupLocation"
                                placeholder="Home, balcony, garden or project"
                                required>
                        </div>
                        <div class="full">
                            <label>Additional Details</label>
                            <textarea
                                id="popupMessage"
                                rows="3"
                                placeholder="Tell us about your garden...">
                            </textarea>
                        </div>
                    </div>
                    <label class="booking-popup-consent">
                        <input
                            type="checkbox"
                            id="popupConsent"
                            required>
                        <span>
                            I agree to be contacted by
                            BloomNest regarding this request.
                        </span>
                    </label>
                    <button
                        type="submit"
                        class="btn btn-primary">
                        Request Booking
                        <i data-lucide="calendar-check"></i>
                    </button>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
        const closeButton =
            modal.querySelector(".booking-popup-close");
        const overlay =
            modal.querySelector(".booking-popup-overlay");
        closeButton.addEventListener(
            "click",
            closeBookingPopup
        );
        overlay.addEventListener(
            "click",
            closeBookingPopup
        );
        modal
            .querySelector("#bookingPopupForm")
            .addEventListener(
                "submit",
                submitBooking
            );
        if (window.lucide) {
            lucide.createIcons();
        }
    }
    modal.classList.add("show");
    document.body.classList.add(
        "booking-popup-open"
    );
});
document.addEventListener(
    "keydown",
    function (event) {
        if (event.key === "Escape") {
            closeBookingPopup();
        }
    }
);
function closeBookingPopup() {
    const modal =
        document.getElementById(
            "bloomnestBookPopup"
        );
    if (!modal) {
        return;
    }
    modal.classList.remove("show");
    document.body.classList.remove(
        "booking-popup-open"
    );
}
function submitBooking(event) {
    event.preventDefault();
    const name =
        document.getElementById(
            "popupName"
        ).value.trim();
    const phone =
        document.getElementById(
            "popupPhone"
        ).value.trim();
    const email =
        document.getElementById(
            "popupEmail"
        ).value.trim();
    const date =
        document.getElementById(
            "popupDate"
        ).value;
    const time =
        document.getElementById(
            "popupTime"
        ).value;
    const type =
        document.getElementById(
            "popupType"
        ).value;
    const location =
        document.getElementById(
            "popupLocation"
        ).value.trim();
    const consent =
        document.getElementById(
            "popupConsent"
        ).checked;
    if (
        !name ||
        !phone ||
        !email ||
        !date ||
        !time ||
        !type ||
        !location ||
        !consent
    ) {
        alert(
            "Please complete all required fields."
        );
        return;
    }
    const service =
        document.querySelector(
            'input[name="bookingService"]:checked'
        )?.value || "";
    const booking = {
        id:
            "BN-" +
            Date.now(),
        name,
        phone,
        email,
        date,
        time,
        type,
        location,
        service,
        message:
            document
                .getElementById("popupMessage")
                .value.trim(),
        createdAt:
            new Date().toISOString()
    };
    localStorage.setItem(
        "bloomnestLatestBooking",
        JSON.stringify(booking)
    );
    const box =
        document.querySelector(
            "#bloomnestBookPopup .booking-popup-box"
        );
    box.innerHTML = `
        <button
            type="button"
            class="booking-popup-close"
            aria-label="Close">
            <i data-lucide="x"></i>
        </button>
        <div class="booking-success">
            <div class="booking-success-icon">
                <i data-lucide="check-circle-2"></i>
            </div>
            <span class="section-tag">
                BloomNest Booking
            </span>
            <h2>
                Booking Request
                <em>Received!</em>
            </h2>
            <p>
                Thank you, <strong>${escapeHTML(name)}</strong>.
                Your request has been received.
            </p>
            <button
                type="button"
                class="btn btn-primary booking-success-close">
                Done
                <i data-lucide="check"></i>
            </button>
        </div>
    `;
    box
        .querySelector(".booking-popup-close")
        .addEventListener(
            "click",
            closeBookingPopup
        );
    box
        .querySelector(".booking-success-close")
        .addEventListener(
            "click",
            closeBookingPopup
        );
    if (window.lucide) {
        lucide.createIcons();
    }
}
function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}