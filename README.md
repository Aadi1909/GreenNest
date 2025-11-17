# 🌿 GreenNest – Houseplant E-Commerce Web App

GreenNest is a fully functional **React + Vite + Redux Toolkit** houseplant shopping web application.  
It includes a landing page, product listing page, shopping cart functionality, and clean navigation — all deployable on **Netlify**.

---

## 🚀 Features

### ✅ Landing Page
- Full-screen plant-themed background image  
- Company name: **GreenNest Plants**  
- Short description paragraph  
- **Get Started** button → Navigates to product listing page  

---

### 🛒 Product Listing Page
- Displays **six unique houseplants**
- Each plant includes:
  - Thumbnail  
  - Name  
  - Price  
  - Add to Cart button  

- Plants grouped into **three or more categories**

- Add to Cart behavior:
  - Cart icon number increases  
  - Button becomes disabled  
  - Plant added to Redux cart  

---

### 🌱 Shopping Cart Page
Shows:

- Total number of plants in cart  
- Total cost  

Each plant in the cart displays:

- Thumbnail  
- Name  
- Unit price  
- Quantity  

Controls for each plant:

- Increase (+) quantity  
- Decrease (–) quantity  
- Delete item  

Dynamic updates handled by **Redux**:
- Quantity changes  
- Total cost  
- Cart badge count  

Other buttons:
- **Checkout** → Displays “Coming Soon”  
- **Continue Shopping** → Navigates back to product listing page  

---

## 🧭 Header (Shared on Non-Landing Pages)

- Company name  
- Navigation links:
  - Home  
  - Products  
  - Cart  
- Cart icon with **dynamic item count** using Redux selectors  

---

## 🧱 Tech Stack

| Technology        | Purpose                       |
|------------------|--------------------------------|
| **React**        | Frontend UI                    |
| **Vite**         | Fast dev server & build tool   |
| **Redux Toolkit**| State management               |
| **React Router** | Page routing                   |
| **CSS / Tailwind CSS** | Styling                  |
| **Netlify**      | Deployment                     |

---
