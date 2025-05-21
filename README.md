# SvelteKit Express Prisma Starter

A full-stack starter template combining SvelteKit frontend with Express backend, Prisma ORM, and PostgreSQL in Docker.

## 🚀 Features

- **Frontend**: SvelteKit with shadcn-svelte components (svelte 5 version)
- **Backend**: Express.js REST API
- **Database**: PostgreSQL (containerized with Docker)
- **ORM**: Prisma for type-safe database access
- **Development**: Separate client and server workspaces for clean separation of concerns
- **TypeScript**: End-to-end type safety

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [pnpm](https://pnpm.io/) (package manager)
- [Docker](https://www.docker.com/) and Docker Compose
- [Git](https://git-scm.com/)

## 🛠️ Project Structure

```
sveltekit-express-prisma-starter/
├── client/                 # SvelteKit frontend
│   ├── src/                # Source files
│   │   ├── lib/            # Library files
│   │   │   ├── components/ # UI components (including shadcn components)
│   │   │   └── hooks/      # Custom hooks
│   │   └── routes/         # SvelteKit routes
│   └── ...
└── server/                 # Express backend
    ├── prisma/             # Prisma schema and migrations
    ├── src/                # Source files
    │   ├── middleware/     # Express middlewares
    │   └── task/           # Example API module
    └── docker-compose.yml  # Docker Compose configuration
```

## 🚦 Getting Started

### Clone the Repository

```bash
git clone https://github.com/Alexandre-Burger/sveltekit-express-prisma-starter.git
cd sveltekit-express-prisma-starter
```

### Backend Setup

1. Start the PostgreSQL database:

```bash
cd server
docker-compose up -d
```

2. Install dependencies:

```bash
npm install
```

3. Apply database migrations:

```bash
npx prisma migrate dev
```

4. Start the Express server:

```bash
npm run dev
```

The server will start on http://localhost:3000 by default.

### Frontend Setup

1. Open a new terminal and navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The SvelteKit app will be available at http://localhost:5173.

## 💻 Development Workflow

- The client and server are independent applications that can be developed separately.
- The client connects to the server API endpoints for data.
- Prisma Studio can be used to inspect the database: `cd server && npx prisma studio`

## 🔄 Database Migrations

When you modify your Prisma schema:

```bash
cd server
npx prisma migrate dev --name your_migration_name
```

## 🎨 UI Components

This template uses [shadcn-svelte](https://next.shadcn-svelte.com/) for UI components. To add new components:

```bash
cd client
npx shadcn-svelte@next add [component-name]
```

## 🏗️ Building for Production

### Backend

```bash
cd server
npm run build
```

### Frontend

```bash
cd client
pnpm build
```

## 🐳 Docker Configuration

The PostgreSQL database runs in Docker with the following configuration:

- Database name: `mini-db`
- Username: `user`
- Password: `pswd123`
- Port: `5558`

You can modify these settings in the `server/docker-compose.yml` file.

### Docker Commands

#### Start the Database

```bash
cd server
docker-compose up -d
```

#### Check Running Containers

```bash
docker ps
```

#### View Database Logs

```bash
docker-compose logs db
```

#### Pause the Database

```bash
docker-compose stop
```

#### Resume the Database

```bash
docker-compose start
```

#### Stop the Database

```bash
cd server
docker-compose down
```

#### Reset the Database (removes all data)

```bash
cd server
docker-compose down -v
docker-compose up -d
```

## 📜 License

MIT

---

Happy coding! 🎉
