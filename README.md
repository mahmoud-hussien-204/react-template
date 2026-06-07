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
│  │  ├─ router
│  │  ├─ store
│  │  └─ styles
│  │     └─ index.css
│  ├─ assets
│  │  └─ react.svg
│  ├─ interfaces
│  │  └─ index.d.ts
│  ├─ lib
│  │  ├─ api
│  │  │  ├─ interceptor.ts
│  │  │  └─ utils.ts
│  │  ├─ react-query
│  │  │  ├─ index.ts
│  │  │  └─ utils.ts
│  │  ├─ toaster.ts
│  │  └─ utils.ts
│  ├─ main.tsx
│  ├─ modules
│  │  ├─ admin
│  │  │  └─ routes.ts
│  │  ├─ common
│  │  │  └─ routes.ts
│  │  └─ user
│  │     └─ routes.ts
│  └─ shared
│     ├─ components
│     │  ├─ providers
│     │  │  └─ theme-provider.tsx
│     │  └─ ui
│     │     ├─ button.tsx
│     │     └─ sonner.tsx
│     └─ hooks
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```