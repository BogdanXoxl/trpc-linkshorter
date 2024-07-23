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

### 🌶️ Why This Tech Stack:

* **Yarn Workspaces** were chosen for their ability to efficiently manage the monorepo structure of the project, allowing for better dependency management and streamlined development across multiple packages. Their simplicity and ease of use make them preferable over other technologies for managing complex project structures.

* **Vite** was selected as the build tool for its fast development server, optimized production builds, and better development experience, enhancing both the speed and quality of the development process.

* **Tailwind CSS** was used for styling due to its utility-first approach, allowing for rapid and consistent UI development with minimal custom CSS. The main goal of the project was to explore tRPC technology, not styling, so I used Tailwind for its simplicity. For complex animations, I supplemented it with vanilla CSS.

* **Express.js** was used for the backend due to its simplicity and flexibility. There was no need for a highly complex structure like Nest.js, as the project required a simple backend service with straightforward logic.

* **tRPC** was chosen for its type-safe, end-to-end communication between the frontend and backend, ensuring type consistency and reducing the potential for runtime errors. Exploring and utilizing tRPC was a primary objective of this project.

* **React-Query:** was utilized for data fetching and state management on the client side, providing powerful and efficient handling of server state and caching. Its simplicity with tRPC integration made it an ideal choice for this project.

* **Zod** was used for schema validation, ensuring that data being sent and received adheres to the expected structures, improving reliability and security.

* **Vercel** was selected for deployment due to its seamless integration with frontend frameworks, serverless functions, and managed PostgreSQL database. I encountered some challenges deploying the entire project on a single Vercel instance, but with the help of GitHub Actions, I successfully managed the deployment. Vercel’s serverless architecture allows the project to scale effortlessly with demand, providing a reliable and scalable hosting solution.
