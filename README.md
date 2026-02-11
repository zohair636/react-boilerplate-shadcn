# React + Vite Boilerplate with shadcn/ui

A scalable, production-ready React boilerplate built with **Vite**, **TypeScript**, **TanStack Query**, **Axios**, and **shadcn/ui**.  
Designed for real-world applications where maintainability, clarity, and growth matter.

This boilerplate is not a demo setup. It is structured the way professional teams build and scale products.

## ✨ Tech Stack
- ⚡ Vite
- ⚛️ React + TypeScript
- 🎨 shadcn/ui
- 🔁 TanStack Query
- 🌐 Axios (centralized API handling)
- 🔐 Feature-based routing
- 🧩 Reusable UI and shared components

## 📁 Folder Structure

```
src/
├─ assets/
├─ components/
│  ├─ shared/
│  └─ ui/
│
├─ config/
│  ├─ api-client.ts
|  ├─ api-endpoints.ts
│  ├─ axios-instance.ts
│  ├─env.ts
|  └─ tanstack-keys.ts
|
├─ constants/
│  └─ roles.ts
│
├─ features/
│  ├─ auth/
│  └─ settings/
│
├─ hooks/
│  ├─ use-debounce.ts
│  └─ use-tanstack-query.ts
│
├─ lib/
│  └─ utils.ts
│
├─ pages/
│  ├─ admin/
│  │  └─ dashboard.tsx
│  │  └─ settings/
│  │     ├─ profile.tsx
│  │     └─ notifications.tsx
│  ├─ auth/
│  │  ├─ login.tsx
│  │  ├─ sign-up.tsx
│  │  ├─ otp.tsx
│  │  ├─ forgot-password.tsx
│  │  └─ reset-password.tsx
│  └─ public/
│
├─ router/
│  ├─ admin-routes.tsx
│  ├─ auth-routes.tsx
│  ├─ public-routes.tsx
│  └─ index.tsx
│
├─ types/
│  └─ api-types.ts
│
├─ utils/
│  ├─ icon-utils.tsx
│  └─ localstorage-utils.ts
│
├─ App.tsx
├─ main.tsx
└─ index.css
```

## 📂 Folder Breakdown and Responsibilities

This section explains the purpose of each major folder and how it fits into the overall architecture.

### `assets/`

Contains static assets such as images, icons, and fonts.

Use this folder only for files that do not contain logic and do not change at runtime.

### `components/`
`components/ui/`

Houses shadcn/ui components only.

- No business logic

- No API calls

- No feature-specific behavior

This keeps the design system clean and portable.

`components/shared/`

Reusable components specific to the application.

### Examples:

- Layout components

- Modals

- Tables

- Form wrappers

These components can be used across multiple features but should remain logic-light.

### `config/`

Application-wide configuration and setup files.

- `axios-instance.ts`
Central Axios configuration with interceptors.

- `api-client.ts`
Thin wrapper around Axios for consistency.

- `api-endpoints.ts`
Central source of truth for API routes.

- `tanstack-keys.ts`
Query keys for TanStack Query to avoid duplication and cache bugs.

- `env.ts`
Typed environment variables.

This folder exists to keep setup logic out of features and UI.

### `constants/`

Static values used across the app.

### Examples:

- Roles

- Enums

- Fixed labels

No logic. No side effects. Just constants.

### `features/`

The heart of the application.

Each feature contains everything required for its own functionality.

Typical feature contents:

- API logic

- Feature-specific hooks

- Feature-specific components

- Feature-specific types

Features do not depend on other features.
They may depend on shared components or config, but never sideways.

### `hooks/`

Reusable hooks that are not tied to a specific feature.

### Examples:

- Debounce logic

- Generic TanStack Query helpers

If a hook belongs to one feature only, it should live inside that feature.

### `lib/`

Low-level utilities and helpers.

This is where generic helpers live that have no React or business logic dependency.

### `pages/`

Route-level components.

Pages should:

- Compose features

- Handle layout

- Stay thin

Pages should not contain business logic.
If logic appears, it belongs in a feature.

### `router/`

Routing configuration split by responsibility.

- `auth-routes.tsx`

- `admin-routes.tsx`

- `public-routes.tsx`

This keeps access control explicit and avoids conditional routing chaos.

### `types/`

Global TypeScript types.

Used for:

- API responses

- Shared models

Feature-specific types should stay inside their feature.

### `utils/`

Small helper functions tied to browser or app behavior.

### Examples:

- LocalStorage helpers

- Icon mapping helpers

Keep this folder small and intentional.

### Entry Files

- `App.tsx`
Application shell and provider setup.

- `main.tsx`
Application bootstrap.

- `index.css`
Global styles only.

## 🧠 Why Feature-Based Architecture?
This boilerplate uses feature-based architecture, and that choice is intentional.

### What it means
Instead of grouping files by type (all hooks together, all services together), everything related to a feature lives in one place.

### Example:
```
features/auth/
├─ api.ts
├─ hooks.ts
├─ types.ts
└─ components.tsx
```

## 🚀 Why Feature-Based Architecture Wins

### 1. Scales without pain

As the app grows, features grow independently. You can add new features without touching unrelated parts of the app.

### 2. Easier to reason about

Want to work on auth? Go to `features/auth`. No hunting across five folders.

### 3. Cleaner mental model

Each feature behaves like a mini app. This reduces cognitive load and speeds up development.

### 4. Safer refactors

Removing or updating a feature does not risk breaking others. The blast radius stays small.

### 5. Team-friendly

Multiple developers can work on different features without stepping on each other.

## ⚠️ Drawbacks of Other Common Approaches

### Type-based folders (components, hooks, services)
- Becomes unmanageable as the app grows

- Files related to one feature are scattered

- Refactoring requires touching many folders

- Encourages tight coupling over time

### Page-based only structure
- Business logic leaks into UI

- Hard to reuse logic across pages

- Features become implicit instead of explicit

This boilerplate avoids those traps.

### 🎨 shadcn/ui Integration
- All shadcn components live inside components/ui

- Shared app components live inside components/shared

- Clear separation between design system and business UI

- Easy to customize and extend

### 🔐 Routing Strategy
Routes are split by responsibility:

- auth-routes.tsx

- admin-routes.tsx

- public-routes.tsx

This keeps access control explicit and readable.

### 🌍 API & Data Handling
- Centralized Axios instance

- Typed API responses

- TanStack Query keys managed in one place

- Predictable and cache-friendly data flow

### ✅ Who This Boilerplate Is For
- Developers building real products

- Teams that care about structure

- Projects expected to scale

- Anyone tired of messy React folders

## 🔐 Environment Management
This boilerplate is configured to handle multiple environments out-of-the-box using Vite's built-in mode detection. This eliminates the manual headache of switching URLs between local development and live production.

- `.env.development`: Automatically loaded during npm run dev. Use this for your local or staging API URLs.
- `.env.production`: Automatically loaded during npm run build. Use this for your live production endpoints.
- `.env.example`: A template file containing all required keys. Always keep this updated for new collaborators.

**Note**: Never commit `.env.development` or `.env.production` to version control. They are already included in the `.gitignore` to protect your secrets.

## ⚡ Key Features

- **Pre-configured API Layer**: Includes `api-client.ts` and `axios-instance.ts` for immediate backend integration.

- **Comprehensive Auth Flow**: Ready-to-use pages for Login, Signup, OTP, and Password Reset.

- **Advanced UI Kit**: Full suite of shadcn components including ComboBox, Sonner, and Popovers.

- **Type Safety**: Strict TypeScript implementation with centralized `api-types.ts`.

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

## 🤝 Contributing
We welcome contributions from everyone! Whether you're fixing bugs, improving documentation, or adding new features, your help is appreciated.

### How to Contribute
1. **Fork the repository** and create a new branch.
2. **Follow the project’s coding style** (TypeScript, Prettier, ESLint).
3. **Write clear, descriptive commit messages** (e.g., `feat: add dark mode support`, `fix: resolve login API bug`).
4. **Test your changes** to ensure they work as expected.
5. **Open a Pull Request (PR)** with a detailed description of your changes.

For major changes or new features, please open an issue first to discuss the proposed changes.

## 🤝 Contribution Strategy
This project is built for speed and precision. To maintain the codebase:

1. **New Features**: Create a new sub-folder in `src/features`.

2. **UI Components**: Add raw shadcn components to `src/components/ui`.

3. **Routing**: Register new views in the appropriate file within `src/router`.

**Note**: This is a living boilerplate. If you find a way to optimize the "Feature" workflow further, open a PR.

### 📜 License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/zohair636/react-boilerplate-shadcn/blob/main/LICENSE) file for details.

## 📌 Final Note
This boilerplate prioritizes clarity over cleverness.
If your app grows, this structure grows with it.
No rewrites. No folder chaos. No regrets.