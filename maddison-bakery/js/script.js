
//  GLOBAL SYSTEM SETUP & NAVIGATION

document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", function () {
            navToggle.classList.toggle("open");
            navLinks.classList.toggle("open");
            const expanded = navToggle.getAttribute("aria-expanded") === "true";
            navToggle.setAttribute("aria-expanded", !expanded);
        });
    }

    // Initialize Leaflet Map canvas cleanly if hook target container is rendered
    if (document.getElementById("map")) {
        initLeafletMap();
    }
});


//  LEAFLET INTERACTIVE MAP ARCHITECTURE

function initLeafletMap() {
    // V&A Waterfront coordinates matching your footer address metrics
    const lat = -33.9014;
    const lon = 18.4200;

    // Initialize map engine framework
    const map = L.map('map').setView([lat, lon], 15);

    // Fetch and bind OpenStreetMap raster landscape tile arrays
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Drop custom marker block containing your branding parameters
    L.marker([lat, lon]).addTo(map)
        .bindPopup(`
            <div style="font-family:'Poppins', sans-serif; text-align:center;">
                <strong style="color:#7A4F2F; display:block; margin-bottom:4px;">Maddison Bakery</strong>
                <span style="font-size:0.8rem; color:#555;">🧁 Shop 12, V&A Waterfront</span><br>
                <small style="color:var(--caramel); font-weight:bold;">Fresh Artisan Delights</small>
            </div>
        `)
        .openPopup();
}


//  UTILITY FORM INPUT ERROR CONTROLLERS

function updateCounter(el) {
    const counter = document.getElementById("charCount");
    if (!counter) return;
    const len = el.value.length;
    counter.textContent = `${len} / 500`;
    counter.classList.toggle("warn", len >= 450);
}

function validateField(inputElement, condition, errorMessage) {
    let errorSpan = inputElement.parentElement.querySelector(".field-error-msg");
    
    if (!errorSpan) {
        errorSpan = document.createElement("span");
        errorSpan.className = "field-error-msg";
        inputElement.parentElement.appendChild(errorSpan);
    }

    if (!condition) {
        inputElement.classList.add("input-field-error");
        errorSpan.textContent = errorMessage;
        errorSpan.style.display = "block";
        return false;
    } else {
        inputElement.classList.remove("input-field-error");
        errorSpan.style.display = "none";
        return true;
    }
}

function resetForm(e) {
    e.preventDefault();
    const form = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");
    const formBody = document.getElementById("formBody");
    const counter = document.getElementById("charCount");

    if (form && formSuccess && formBody) {
        form.reset();
        if (counter) counter.textContent = "0 / 500";
        formSuccess.classList.remove("visible");
        formBody.style.display = "block";
        
        // Wipe all lingering error message states
        form.querySelectorAll(".field-error-msg").forEach(span => span.style.display = "none");
        form.querySelectorAll(".input-field-error").forEach(input => input.classList.remove("input-field-error"));
    }
}


//  CONTACT ASYNC FORM COMPILATION ENGINE

const contactFormElement = document.getElementById("contactForm");
if (contactFormElement) {
    contactFormElement.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameEl = document.getElementById("name");
        const phoneEl = document.getElementById("phone");
        const emailEl = document.getElementById("email");
        const enquiryEl = document.getElementById("enquiry");
        const msgEl = document.getElementById("message");

        let isValid = true;

        // Validation Rules Checklist
        isValid &= validateField(nameEl, nameEl.value.trim().length >= 2, "Full name must be at least 2 characters.");
        isValid &= validateField(emailEl, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim()), "Please enter a valid email format.");
        
        if (phoneEl.value.trim().length > 0) {
            isValid &= validateField(phoneEl, /^[0-9\s\-\+\(\)]{10,15}$/.test(phoneEl.value.trim()), "Invalid contact number format.");
        }
        
        isValid &= validateField(enquiryEl, enquiryEl.value !== "", "Please choose an enquiry category.");
        isValid &= validateField(msgEl, msgEl.value.trim().length >= 10, "Message data body must be at least 10 characters long.");

        if (!isValid) return;

        // AJAX Processing UI Overlay Simulation
        const submitBtn = contactFormElement.querySelector(".form-submit-btn");
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.7";
        submitBtn.textContent = "Processing Data Transmission... ⏳";

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.style.opacity = "";
            submitBtn.textContent = "Send Message →";

            // Compile information payload into an apparent email frame layout standard
            const emailTemplateHTML = `
                <div class="compiled-email-receipt" style="font-family:monospace; background:#fdfcf7; border:1px dashed var(--caramel); padding:14px; border-radius:6px; line-height:1.6; color:#3a2a1a;">
                    <p style="margin-bottom:4px;"><strong>SMTP TRANSMIT HEADERS:</strong></p>
                    <p><strong>To:</strong> hello@maddisonbakery.co.za</p>
                    <p><strong>From:</strong> ${emailEl.value.trim()}</p>
                    <p><strong>Subject:</strong> [${enquiryEl.value}] Site Inquiry from ${nameEl.value.trim()}</p>
                    <hr style="margin:12px 0; border:0; border-top:1px dotted var(--caramel);">
                    <p><strong>Metadata Attachments:</strong></p>
                    <p>• Client Name: ${nameEl.value.trim()}</p>
                    <p>• Client Phone: ${phoneEl.value.trim() || "None declared"}</p>
                    <p style="margin-top:8px;"><strong>Message Payload Body:</strong></p>
                    <blockquote style="margin:8px 0 0; font-style:italic; background:#F5F0E6; padding:12px; border-left:4px solid var(--teal);">
                        "${msgEl.value.trim()}"
                    </blockquote>
                </div>
            `;

            const container = document.getElementById("emailResponseContainer");
            if (container) container.innerHTML = emailTemplateHTML;

            document.getElementById("formBody").style.display = "none";
            document.getElementById("formSuccess").classList.add("visible");
        }, 1200);
    });
}


//  CUSTOM ENQUIRY ORDER BOOKING PLATFORM

const orderFormElement = document.getElementById("orderForm");
if (orderFormElement) {
    orderFormElement.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("fname");
        const phone = document.getElementById("phone");
        const email = document.getElementById("oemail");
        const type = document.getElementById("order-type");
        const details = document.getElementById("details");

        let valid = true;

        valid &= validateField(name, /^[A-Za-z\s]{2,}$/.test(name.value.trim()), "Letters only (minimum 2 characters).");
        valid &= validateField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()), "Enter a clean, standardized email profile.");
        valid &= validateField(type, type.value !== "", "Selecting a specific product type is mandatory.");
        valid &= validateField(details, details.value.trim().length >= 10, "Please outline precise cake dimensions, flavors or details.");

        if (!valid) return;

        const successBlock = document.getElementById("orderSuccess");
        if (successBlock) {
            successBlock.classList.add("show");
            orderFormElement.reset();
            successBlock.scrollIntoView({ behavior: "smooth" });
            
            orderFormElement.querySelectorAll(".field-error-msg").forEach(span => span.style.display = "none");
            orderFormElement.querySelectorAll(".input-field-error").forEach(input => input.classList.remove("input-field-error"));
        }
    });
}


//  REAL-TIME MENU FILTRATION MATRIX

const menuSearchInput = document.getElementById("menuSearch");
if (menuSearchInput) {
    menuSearchInput.addEventListener("input", function () {
        const query = menuSearchInput.value.toLowerCase().trim();
        const menuCards = document.querySelectorAll(".menu-grid .menu-card");
        const msgBlock = document.getElementById("menuSearchMessage");
        let matches = 0;

        menuCards.forEach(card => {
            if (card.classList.contains("custom-order-card")) {
                card.style.display = ""; // Always retain link block
                return;
            }

            const headingText = card.querySelector("h3").textContent.toLowerCase();
            const bodyText = card.querySelector("p").textContent.toLowerCase();

            if (headingText.includes(query) || bodyText.includes(query)) {
                card.style.display = "";
                matches++;
            } else {
                card.style.display = "none";
            }
        });

        if (msgBlock) {
            msgBlock.textContent = (matches === 0 && query !== "") ? "No matching baking products located inside our current collection menu." : "";
        }
    });
}


//  MULTIMEDIA LIGHTBOX COMPONENT

const lightboxModal = document.getElementById("lightbox");
const lightboxImgTarget = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".lightbox-close");
const imageNodes = document.querySelectorAll(".menu-card-img img");

imageNodes.forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
        if (lightboxModal && lightboxImgTarget) {
            lightboxImgTarget.src = this.src;
            lightboxImgTarget.alt = this.alt;
            lightboxModal.classList.add("show");
            document.body.style.overflow = "hidden";
        }
    });
});

if (closeBtn && lightboxModal) {
    closeBtn.addEventListener("click", function () {
        lightboxModal.classList.remove("show");
        document.body.style.overflow = "";
    });

    lightboxModal.addEventListener("click", function (e) {
        if (e.target === lightboxModal) {
            lightboxModal.classList.remove("show");
            document.body.style.overflow = "";
        }
    });
}