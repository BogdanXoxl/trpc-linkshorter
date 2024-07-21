# [Link shorter](https://trpc-linkshorter.vercel.app/) with TRPC

<a href="https://trpc-linkshorter.vercel.app/" target="_blank" rel="noreferrer"><img src="https://github.com/BogdanXoxl/trpc-linkshorter/blob/main/public/trpc-linkshorter-800.gif"></a>

### 🔥 About

<p>I developed a URL shortener using tRPC to deepen my expertise in tRPC technology and monorepo structures. The frontend leverages React, React Query, TypeScript, Tailwind CSS, SCSS for animations, and Vite, while the backend is built with Express, Prisma, and Zod. For deployment, I utilized Vercel and implemented CI/CD with GitHub Actions to automate the build and deployment process. The application allows users to shorten URLs with customizable expiration times (15 minutes, 1 hour, or 1 day). Upon submission, users experience a smooth loading transition followed by a modal displaying the new link and a copy button. This project solidified my expertise in modern web development practices and highlighted my proficiency in creating seamless, full-stack solutions with advanced technologies.</p>

<p align="left"> <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a> <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a> <a href="https://trpc.io/" target="_blank" rel="noreferrer"><img src="https://trpc.io/img/logo.svg" width="36" height="36" alt="TRPC"/></a> <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://vitejs.dev/logo.svg" width="36" height="36" alt="Vite"/></a> <a href="https://tanstack.com/query/latest" target="_blank" rel="noreferrer"><img src="https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png" width="36" height="36" alt="React-Query"/></a> <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express.js" /></a> <a href="https://zod.dev/" target="_blank" rel="noreferrer"><img src="https://zod.dev/logo.svg" height="36" alt="Zod.js" /></a> <a href="https://www.prisma.io/" target="_blank" rel="noreferrer"><img src="https://prismalens.vercel.app/header/logo-white.svg" height="30" alt="Prisma.js" /></a></p>

### 🔧 Project Setup

```sh
yarn
```

### ⚙️ Compile and Hot-Reload for Development

```sh
yarn dev
```

### 🔨 Compile and Minify for Production

```sh
yarn build
```

### 🪄 Clean node_modules and Build Artifacts

```sh
yarn clean:node_modules
```
```sh
yarn clean:dist
```
```sh
yarn clean
```

### 💌 Install new dependencies

```sh
yarn workspace trpc-client add <package>
```
```sh
yarn workspace trpc-server add <package>
```

### 🌶️ Why These Features:

* **LocalStorage Support:** This feature adds persistence to the app, ensuring that users' task data remains intact across sessions, enhancing usability.

* **Upload/Download Functionality:** Enabling users to export and import task data empowers them to manage their tasks flexibly and safely.

* **TypeScript Support:** TypeScript enhances code quality and maintainability by adding static types, catching errors early, and providing better developer tooling.

* **State Manager:** As the app evolves, managing state becomes crucial. A state manager simplifies state management, enhancing code organization and reducing bugs.

* **Composition API:** The Composition API offers a more organized and reusable way to manage component logic, promoting better code structure and maintainability.

* **Edit functionality:** Allowing users to edit tasks improves the user experience by providing the flexibility to update task details without starting from scratch.

* **Accessibility Enhancement (a11y):** Prioritizing accessibility ensures that the todo app is usable by everyone, regardless of their abilities. By making the app accessible, you're promoting inclusivity, adhering to legal and ethical obligations, and improving the overall user experience for everyone, including those with disabilities. This commitment to accessibility aligns with the principles of universal design and responsible development.
