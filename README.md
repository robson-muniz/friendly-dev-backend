# 🚀 Friendly Dev | Headless CMS (Strapi 5)

[![Strapi Version](https://img.shields.io/badge/Strapi-v5.15.0-blue.svg)](https://strapi.io/)
[![Node Version](https://img.shields.io/badge/Node->=18.0.0-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The robust backend powering the **Friendly Dev** platform. Built with Strapi 5, this API manages project portfolios and technical blog content with a focus on performance, scalability, and ease of use.

---

## 🏗️ Architecture & Tech Stack

- **Core:** [Strapi v5](https://strapi.io/) (Headless CMS)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** PostgreSQL (Neon.tech) / SQLite (Local Dev)
- **Media Storage:** [Cloudinary](https://cloudinary.com/)
- **Frontend Integration:** React-based architecture

## ✨ Key Features

- **Content Management:** Fully customized Project and Blog Post models.
- **Media Optimization:** Automatic image hosting and transformation via Cloudinary.
- **Advanced API:** RESTful endpoints with built-in support for filtering, sorting, and deep population.
- **Security:** Role-Based Access Control (RBAC) and JWT authentication.
- **Performance:** Optimized queries and efficient data structures.

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js:** `>=18.0.0 <=22.x.x`
- **NPM:** `>=6.0.0`
- **Database:** PostgreSQL (recommended for production) or SQLite (dev).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bradtraversy/friendly-dev-backend.git
   cd friendly-dev-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Copy the example environment file and update it with your credentials:
   ```bash
   cp .env.example .env
   ```
   *Note: Ensure you provide your `CLOUDINARY_*` and `DATABASE_*` credentials in the `.env` file.*

4. **Launch Development Server:**
   ```bash
   npm run develop
   ```
   Access the admin panel at: [http://localhost:1337/admin](http://localhost:1337/admin)

---

## ⚙️ Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `1337` |
| `DATABASE_CLIENT` | DB Type (`postgres` or `sqlite`) | `sqlite` |
| `CLOUDINARY_NAME` | Cloudinary Cloud Name | - |
| `CLOUDINARY_KEY` | Cloudinary API Key | - |
| `CLOUDINARY_SECRET`| Cloudinary API Secret | - |

---

## 🔌 API Documentation

The API follows standard REST patterns. All responses are in JSON format.

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/posts` | Fetch all blog posts |
| `GET` | `/api/posts/:id` | Fetch a single post |
| `GET` | `/api/projects` | Fetch all projects |
| `GET` | `/api/projects/:id` | Fetch a single project |

### Common Query Parameters

- **Population:** `?populate=*` (Retrieve related media/data)
- **Sorting:** `?sort=createdAt:desc`
- **Filtering:** `?filters[category][$eq]=design`
- **Pagination:** `?pagination[pageSize]=10&pagination[page]=1`

---

## 🔐 Permissions Setup

To enable public access for the frontend:
1. Navigate to **Settings** > **Users & Permissions Plugin** > **Roles**.
2. Select the **Public** role.
3. Under **Permissions**, locate `Post` and `Project`.
4. Check `find` and `findOne` for both.
5. Save changes.

---

## 🚀 Deployment

This application is ready for deployment on platforms like **Render**, **Railway**, or **DigitalOcean App Platform**.

1. Set up a PostgreSQL database (e.g., [Neon.tech](https://neon.tech/)).
2. Configure environment variables on your hosting provider.
3. Run `npm run build` followed by `npm run start`.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---
Created with ❤️ by Robson Muniz, Portugal.
