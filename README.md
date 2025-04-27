# Mini Blog Application
### A Full Stack Mini Blog App built with React, Redux Toolkit, Node.js, Express, MongoDB, JWT Authentication, TailwindCSS, Pagination, and Debounced Search functionality.
</hr>

## Features

- User Registration and Login (with JWT Token Authentication)
- Secure API with protected routes
- View Blogs (only your own blogs)
- Create New Blog Post (with title, image, category, content)
- Pagination (with dynamic page loading)
- Search Blogs (with debouncing for better performance)
- Responsive UI (TailwindCSS)
- Navbar and Footer (with Logout functionality)
- Private Routes (redirects based on auth)
- Clean and Professional Code Structure (MVC)

</hr>
📂 Project Structure:

```bash
MiniBlogApp/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── app/store
│   │   ├── components/
│   │   ├── features/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
└── README.md
```

## Tech Stack
## Frontend:
- React
- Redux Toolkit
- React Router DOM
- Axios
- TailwindCSS

## Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- BcryptJS
- JWT (JSON Web Tokens)
- CORS

## 🔥 Setup Instructions
1. Clone the Repository
```bash
git clone https://github.com/Pruthviraj3196/Blog_WebSite.git
```

2. Backend Setup
```bash
cd server
npm install
npm start
```

3. Frontend Setup
```bash
cd client
npm install
npm run dev
```

## API Endpoints
| Method | Endpoint     | Description               |
|--------|--------------|----------------------------|
| POST   | /api/register | Register a new user        |
| POST   | /api/login    | Login user and get token   |
| GET    | /api/blogs    | Get all blogs              |
| POST   | /api/blogs    | Create a new blog          |

