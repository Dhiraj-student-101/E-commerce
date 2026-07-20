# NOVACART - Full Stack E-Commerce Platform

A modern, full-stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🌟 Live Demo coming soon
- **Frontend:** [NOVACART Store](#)
- **Backend:** [NOVACART Store](#)
- **Admin Panel:** [NOVACART Admin](#)

## 🚀 Features

### Customer Features
- 🛍️ Browse products by category and subcategory
- 🔍 Search products
- 🛒 Add to cart and manage cart
- 💳 Multiple payment methods (Stripe, Razorpay, Cash on Delivery)
- 📦 Track orders
- 👤 User authentication (Login/Register)
- 📱 Fully responsive design

### Admin Features
- ➕ Add, edit and remove products
- 📋 View and manage all orders
- 🔄 Update order status
- 🔐 Secure admin authentication

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Axios
- React Toastify
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Multer
- Cloudinary

### Payment Gateways
- Stripe
- Razorpay
- Cash on Delivery

## 📁 Project Structure

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- Git

### 1. Clone the repository
```bash
git clone https://github.com/Dhiraj-student-101/E-commerce.git
cd E-commerce
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in backend folder:
```env
PORT=4000
MONGODB_URI=your_mongodb_uri
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Run backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create `.env` file in frontend folder:
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Run frontend:
```bash
npm run dev
```

### 4. Admin Panel Setup
```bash
cd admin
npm install
```

Create `.env` file in admin folder:
```env
VITE_BACKEND_URL=http://localhost:4000
```

Run admin:
```bash
npm run dev
```

## 🌐 API Endpoints

### User Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/user/register | Register new user |
| POST | /api/user/login | Login user |
| POST | /api/user/admin | Admin login |

### Product Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/product/add | Add product (Admin) |
| GET | /api/product/list | Get all products |
| GET | /api/product/single | Get single product |
| DELETE | /api/product/remove | Remove product (Admin) |

### Cart Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/cart/add | Add to cart |
| POST | /api/cart/update | Update cart |
| POST | /api/cart/get | Get user cart |

### Order Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/order/place | Place COD order |
| POST | /api/order/stripe | Place Stripe order |
| POST | /api/order/razorpay | Place Razorpay order |
| POST | /api/order/verifyStripe | Verify Stripe payment |
| POST | /api/order/verifyRazorpay | Verify Razorpay payment |
| POST | /api/order/userorders | Get user orders |
| POST | /api/order/list | Get all orders (Admin) |
| POST | /api/order/status | Update order status (Admin) |

## 👨‍💻 Developer

**Dhiraj Kumar**
- LinkedIn: [Dhiraj Kumar](https://www.linkedin.com/in/dhiraj-kumar-275218289)
- GitHub: [Dhiraj-student-101](https://github.com/Dhiraj-student-101)
- Email: dhirajkumar887350@gmail.com

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgements

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)
- [Razorpay](https://razorpay.com/)
