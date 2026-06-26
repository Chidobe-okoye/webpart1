

# Maddison Bakery Web Interface Development (PoE Part 3)


* **Project Name:** Artisanal Bakery Digital Commerce Platform
* **Repository URL:** [https://github.com/Chidobe-okoye/webpart1](https://github.com/Chidobe-okoye/webpart1)
* **Production Live URL:** [https://chidobe-okoye.github.io/webpart1/maddison-bakery/index.html](https://chidobe-okoye.github.io/webpart1/maddison-bakery/index.html)

---

## 📝 Project Overview
Maddison Bakery is a fully responsive, multi-page web platform engineered for an artisanal bakery brand based in Cape Town. Developed through an iterative portfolio framework, this project demonstrates semantic document styling, advanced browser-side validation logic, interactive client-side scripting frameworks, and comprehensive technical SEO compliance.

The website allows users to seamlessly:
* Browse high-quality bakery products and menus
* Learn about the brand's artisanal history and values
* Engage with the business via responsive contact interfaces
* Submit custom order enquiries through a secure pipeline

---

## 🔄 Changelog & Feedback Integration Matrix

### Part 1 & Part 2 Feedback Integration ("Done")
As verified during the formative milestones, all previous feedback parameters regarding layout design systems, desktop typography, structural decoration assets, responsive mobile breakpoint mechanics, and initial repository structures have been fully integrated and accepted. 
* **Core Fixes:** Optimized proposal documentation, resolved asset paths, structured semantic HTML layouts, implemented custom CSS variables, and integrated a fluid CSS Grid/Flexbox UI layout.

### Part 3 Architectural Enhancements & Corrections
1. **Robust Form Architecture Hardening:** Migrated legacy input actions to programmatic event listener attachments within the contact and order sections. The system handles custom error state classes natively—blocking data transmissions if malformed data strings or empty inputs are detected.
2. **Product Catalog Search Implementation:** Engineered a dynamic client-side filtering component. Users can input specific text strings (such as a search query for "Chocolate Cake") to seamlessly mask non-matching structural card layouts in real time.
3. **Interactive Map Realignment:** Swapped old non-functional iframe nodes on the contact layer with an interactive Leaflet.js rendering engine mapping live geographic coordinates.
4. **Asynchronous UI Simulations:** Configured structured DOM injection routines that visually output simulated confirmation receipts to the customer upon successful data verification.
5. **Technical SEO Infrastructure:** Implemented production-ready `robots.txt` configuration routing rules and standard-compliant XML mapping vectors (`sitemap.xml`) referencing live production URLs.

---

## 🛠️ Feature Verification & UI Evidence

### 1. Robust Input Field & Contact Module Validation
The interactive modules use custom event listener loops to validate customer information before submission processing. If incorrect formats or empty fields are captured, data transmission is suspended, and contextual error highlights appear to enforce form validation logic.

#### UI Verification: Validation Logic Action State
![Form Validation State](screenshot-validation.png)


### 2. Live Catalog Search Component (e.g., "Chocolate Cake" Query)
A custom filtering layer reads input criteria natively to let users target specific bakery item cards in real time without refreshing the client browser window.

#### UI Verification: Search Query Execution
![Search Menu Feature](./maddison-bakery/images/image.png)

*(Note: If your screenshot filename is different, rename image_4.png to match your file name)*

---

## 📂 Production File Architecture
```text
maddison-bakery/
├── css/
│   └── style.css            # Unified production layout styles & design tokens
├── js/
│   └── script.js           # Client-side validation, search, & mapping routines
├── images/                 # Optimized graphic & media assets
├── index.html              # Landing UI View
├── about.html              # Brand Story Context Layout
├── menu.html               # Searchable Menu & Lightbox Component
├── contact.html            # Hardened Contact Form & Leaflet Map
├── order.html              # Custom Order Request Processing Pipeline
├── robots.txt              # Production Web Crawler Instruction Module
└── sitemap.xml             # Canonical Index Search Index Mapping Matrix
