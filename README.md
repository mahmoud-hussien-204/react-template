# React + TypeScript + Vite + shadcn/ui

This is a template for a new Vite project with React, TypeScript, and shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `src/components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button"
```

```
react-template
├─ .husky
│  ├─ _
│  │  ├─ applypatch-msg
│  │  ├─ commit-msg
│  │  ├─ h
│  │  ├─ husky.sh
│  │  ├─ post-applypatch
│  │  ├─ post-checkout
│  │  ├─ post-commit
│  │  ├─ post-merge
│  │  ├─ post-rewrite
│  │  ├─ pre-applypatch
│  │  ├─ pre-auto-gc
│  │  ├─ pre-commit
│  │  ├─ pre-merge-commit
│  │  ├─ pre-push
│  │  ├─ pre-rebase
│  │  └─ prepare-commit-msg
│  ├─ pre-commit
│  └─ pre-push
├─ .prettierignore
├─ .prettierrc
├─ README.md
├─ components.json
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ src
│  ├─ App.tsx
│  ├─ app
│  │  ├─ constants
│  │  │  └─ index.ts
│  │  ├─ router
│  │  │  ├─ guards
│  │  │  │  └─ index.ts
│  │  │  └─ index.ts
│  │  ├─ store
│  │  │  └─ index.ts
│  │  └─ styles
│  │     └─ index.css
│  ├─ assets
│  ├─ data
│  │  └─ nav.ts
│  ├─ i18n
│  │  ├─ index.ts
│  │  └─ locales
│  │     ├─ ar.json
│  │     └─ en.json
│  ├─ interfaces
│  │  └─ index.d.ts
│  ├─ lib
│  │  ├─ api
│  │  │  ├─ interceptor.ts
│  │  │  └─ utils.ts
│  │  ├─ react-query
│  │  │  ├─ index.ts
│  │  │  └─ utils.ts
│  │  ├─ storage.ts
│  │  ├─ toaster.ts
│  │  └─ utils.ts
│  ├─ main.tsx
│  ├─ modules
│  │  ├─ admin
│  │  │  └─ routes.ts
│  │  ├─ auth
│  │  │  ├─ layout
│  │  │  │  └─ index.tsx
│  │  │  └─ utils
│  │  │     ├─ index.ts
│  │  │     └─ token.ts
│  │  ├─ common
│  │  │  └─ routes.ts
│  │  └─ user
│  │     └─ routes.ts
│  └─ shared
│     ├─ components
│     │  ├─ animation
│     │  │  └─ page-animation.tsx
│     │  ├─ app-breadcrumb.tsx
│     │  ├─ app-logo.tsx
│     │  ├─ app-sidebar.tsx
│     │  ├─ icons
│     │  │  ├─ access-denied-icon.tsx
│     │  │  ├─ error-icon.tsx
│     │  │  ├─ not-found-icon.tsx
│     │  │  └─ offline-icon.tsx
│     │  ├─ other
│     │  │  ├─ container.tsx
│     │  │  └─ splash-screen.tsx
│     │  ├─ providers
│     │  │  └─ theme-provider.tsx
│     │  └─ ui
│     │     ├─ breadcrumb.tsx
│     │     ├─ button-link.tsx
│     │     ├─ button.tsx
│     │     ├─ input.tsx
│     │     ├─ separator.tsx
│     │     ├─ sheet.tsx
│     │     ├─ sidebar.tsx
│     │     ├─ skeleton.tsx
│     │     ├─ sonner.tsx
│     │     └─ tooltip.tsx
│     ├─ hooks
│     │  ├─ use-mobile.ts
│     │  └─ use-network-status.ts
│     └─ layouts
│        ├─ access-denied-layout.tsx
│        ├─ app-layout.tsx
│        ├─ error-layout.tsx
│        ├─ not-found-layout.tsx
│        ├─ offline-layout.tsx
│        └─ root-layout.tsx
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```