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
├─ assets/              # Static assets
├─ components/
│  ├─ shared/            # App-specific reusable components
│  └─ ui/                # shadcn/ui components
│
├─ config/
│  ├─ api-client.ts
   ├─ api-endpoints.ts
│  ├─ axios-instance.ts
│  ├─env.ts
   └─ tanstack-keys.ts
│
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
│  │  └─ settings/
│  │     ├─ dashboard.tsx
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

## 🏁 Getting Started
```
npm install
npm run dev
```

## 📌 Final Note
This boilerplate prioritizes clarity over cleverness.
If your app grows, this structure grows with it.
No rewrites. No folder chaos. No regrets.