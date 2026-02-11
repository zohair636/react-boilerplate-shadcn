# React + Vite Boilerplate with shadcn/ui

**A high-scale, feature-oriented foundation for modern web applications**. Built with **Vite**, **TypeScript**, **TanStack Query**, and **shadcn/ui**, this boilerplate is structured for professional teams where maintainability is a requirement, not an option.

## ✨ Tech Stack

- ⚡ **Vite** – lightning-fast bundler
- ⚛️ **React + TypeScript** – typed and reliable
- 🎨 **shadcn/ui** – atomic UI components
- 🔁 **TanStack Query** – client-state & caching
- 🌐 **Axios** – centralized API handling
- 🔐 **Feature-based routing**
- 🧩 **Reusable UI & shared components**

## 🏗️ Architecture Philosophy

Most projects collapse under their own weight because they group files by **technical type** (e.g., all hooks in one folder, all components in another). This leads to:
- **Scattered logic**: Business logic for a single feature is spread across multiple folders.
- **Tight coupling**: Changes in one area ripple unpredictably through the codebase.
- **Scaling pain**: Adding new features becomes a game of "Where does this go?"

This boilerplate enforces **Feature-Based Architecture** to solve these problems.

### 🏆 Why Feature-Based Wins
| Benefit | Description |
| :--- | :--- |
| **Encapsulation** | Logic for `auth` or `settings` is isolated. Changes in one cannot break the other. |
| **Scalability** | Add 50+ features without the `src/components` folder becoming unmanageable. |
| **Speed** | Developers find everything related to a domain in one folder. No hunting across the tree. |
| **Safety** | Removing a feature is as simple as deleting one folder. |

## 📁 Folder Structure

```
├── components/
│   ├── ui/         # Atomic shadcn components (No business logic)
│   └── shared/     # App-specific reusable components (Modals, Tables)
├── features/       # Modular business logic (Auth, Settings, etc.)
├── pages/          # Route-level composition layer (Thin wrappers, no business logic)
├── config/         # API Clients, TanStack keys, and Env config
├── router/         # Split routing (Admin, Auth, Public)
├── hooks/          # Domain-agnostic hooks (e.g., use-debounce)
├── types/          # Global API and Model interfaces
└── utils/          # Browser helpers (LocalStorage, Icon mapping)
```

### Feature folder example:
```
features/
└── auth/
    ├── components/    # Feature-specific UI
    ├── hooks/         # Feature hooks (useLogin)
    ├── api.ts         # Axios requests
    └── types.ts       # Interfaces & types
```

## High-Level Breakdown

- `features/`: The heart of the app. Contains feature-specific components, hooks, and API logic. Features should not depend on other features "sideways."
- `config/`: Centralizes setup logic. Includes axios-instance.ts for interceptors and tanstack-keys.ts for standardized caching.
- `pages/`: These are "thin" wrappers. They handle layout and compose various features but contain zero business logic.
- `router/`: Explicitly split into auth-routes.tsx, admin-routes.tsx, etc., to make access control readable.

## 🔄 Application Flow

User Action
   → Page (layout & composition)
   → Feature Hook (business logic)
   → API Client
   → Axios Instance (interceptors, tokens, error handling)
   → Backend Response
   → TanStack Query Cache
   → Feature Layer
   → UI Update


## 🌍 API & Data Handling
This boilerplate uses a centralized API layer to ensure predictable data flow:

- `axios-instance.ts`: Pre-configured with interceptors for token injection and error handling.

- `api-endpoints.ts`: The single source of truth for all backend URLs.

- `tanstack-keys.ts`: Centralized query keys to prevent cache-busting bugs and duplication.

- `api-types.ts`: Contract-first development with strict TypeScript interfaces for all responses.

## 🔐 Environment Management
This boilerplate is configured to handle multiple environments out-of-the-box using Vite's built-in mode detection. This eliminates the manual headache of switching URLs between local development and live production.

- `.env.development`: Automatically loaded during npm run dev. Use this for your local or staging API URLs.
- `.env.production`: Automatically loaded during npm run build. Use this for your live production endpoints.
- `.env.example`: A template file containing all required keys. Always keep this updated for new collaborators.

**Note**: Never commit `.env.development` or `.env.production` to version control. They are already included in the `.gitignore` to protect your secrets.

### Accessing Environment Variables
In your code, access environment variables using Vite’s built-in `import.meta.env`:
```
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
// or using config helper
import { env } from "@/config/env";
const apiBaseUrl = env.VITE_API_BASE_URL;
```

## 🏁 Getting Started

### 1. Clone & Install
```
git clone <your-repo-link>
cd <your-repo-name>
npm install
```

### 2. Environment Setup
Create your local environment files based on the example.
```
cp .env.example .env.development
cp .env.example .env.production
```

### 3. Start Development
`npm run dev`

## 4. Build for Production
`npm run build`

## 🤝 Contributing
We welcome contributions from everyone! Whether you're fixing bugs, improving documentation, or adding new features, your help is appreciated.

### How to Contribute
1. **Fork the repository** and create a new branch.
2. **Follow the project’s coding style** (TypeScript, Prettier, ESLint).
3. **Write clear, descriptive commit messages** (e.g., `feat: add dark mode support`, `fix: resolve login API bug`).
4. **Test your changes** to ensure they work as expected.
5. **Open a Pull Request (PR)** with a detailed description of your changes.

For major changes or new features, please open an issue first to discuss the proposed changes.

## 🎯 Who This Boilerplate Is For

- Developers building **production-grade applications**

- Teams that care about **structure and long-term maintainability**

- Projects expected to **scale beyond MVP**

- Engineers who prefer **clear boundaries** over scattered logic

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/zohair636/react-boilerplate-shadcn/blob/main/LICENSE) file for details.

## 📌 Final Note
This boilerplate prioritizes **clarity over cleverness**. If your app grows, this structure grows with it. Built for predictable growth and long-term maintainability.