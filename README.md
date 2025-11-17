🌿 GreenNest – Houseplant E-Commerce Web App

GreenNest is a fully functional React + Vite + Redux Toolkit houseplant shopping web application.
It includes a landing page, product listing page, shopping cart functionality, and clean navigation — all deployable on Netlify.

🚀 Features
✅ Landing Page

Full-screen plant-themed background image

Company name: GreenNest Plants

Short description paragraph

Get Started button → Navigates to product listing page

🛒 Product Listing Page

Displays six unique houseplants

Each plant has:

Thumbnail

Name

Price

Add to Cart button

Plants grouped into three or more categories

Add to Cart behavior:

Cart icon number increases

Button becomes disabled

Plant added to Redux cart

🌱 Shopping Cart Page

Shows:

Total number of plants in cart

Total cost

Each plant in the cart shows:

Thumbnail

Name

Unit price

Quantity

Controls for each plant:

Increase (+) quantity

Decrease (–) quantity

Delete item

Updates totals and badge count dynamically using Redux

“Checkout” button → Displays “Coming Soon”

“Continue Shopping” → Back to product listing page

🧭 Header (Shared on all pages except landing)

Company name

Navigation links:

Home

Products

Cart

Cart icon with dynamic item count (Redux selector)

🧱 Tech Stack
Technology	Purpose
React	Frontend UI
Vite	Fast dev server & build tool
Redux Toolkit	State management
React Router DOM	Page routing
CSS / Tailwind CSS	Styling
Netlify	Deployment
📂 Project Structure
GreenNest/
│── public/
│── src/
│   ├── components/
│   │   └── Header.jsx
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── ProductListingPage.jsx
│   │   └── CartPage.jsx
│   ├── store/
│   │   ├── cartSlice.js
│   │   └── index.js
│   ├── data/
│   │   └── plants.js
│   ├── App.jsx
│   └── main.jsx
│── package.json
│── vite.config.js
│── README.md

📦 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/yourusername/GreenNest.git
cd GreenNest

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev

4️⃣ Build for Production
npm run build
