

# 📝 Multi-Tenant Blog Platform

A simple multi-tenant blog application built with **Next.js (TypeScript)**, **Drizzle ORM**, **Clerk**, and **PostgreSQL (Docker)**.
Each organization has its own isolated blog space accessible via a **unique subdomain**.

---

## 🚀 Features

* 🔐 **Authentication & Organizations** using Clerk
* 🏢 Users can **create organizations**, and each organization becomes a **separate tenant** for which we can create blogs for that organization.
* 🌐 **Subdomain-based routing**

  * Example:
    * `localhost:3000` → landing 
    * `my-organization.localhost:3000` → shows blogs for *that* organization
      
* 🗄️ **Drizzle ORM + PostgreSQL** for data storage
* 🐳 Database containerized using **Docker**

---

## 🛠️ Tech Stack

* **Next.js 15** (TypeScript, App Router)
* **Clerk** (Auth + Organizations)
* **Drizzle ORM**
* **PostgreSQL**
* **Docker**

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```sh
git clone https://github.com/rishika105/multi-tenant-blog-app.git
cd multi-tenant-blog-app
```

### 2. Install dependencies

```sh
npm install
```

### 3. Start PostgreSQL via Docker

Your `docker-compose.yml` should include PostgreSQL.

Run:

```sh
docker compose up -d
```

### 4. Configure environment variables

Create `.env.local`:

```
DATABASE_URL=postgres://postgres:password@localhost:5432/mydb
CLERK_SECRET_KEY=your_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
```

### 5. Run Drizzle migrations

```sh
npm run db:push
```

(for drizzle studio)

```sh
npm run db:studio
```

### 6. Start the dev server

```sh
npm run dev
```

---


## 🤝 Contributing

Contributions are always welcome!
If you find a bug, have an idea, or want to resolve something:

1. **Open an Issue**

   * Describe the problem clearly.
   * Add screenshots or logs if possible.

2. **Create a Pull Request**

   * Fork the repository
   * Create a new branch
   * Make your changes with clear commit messages
   * Open a PR explaining what you fixed or added

