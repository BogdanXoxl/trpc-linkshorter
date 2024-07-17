# [Link shorter](https://trpc-linkshorter.vercel.app/) with TRPC

<a href="https://trpc-linkshorter.vercel.app/" target="_blank" rel="noreferrer"><img src="https://github.com/BogdanXoxl/trpc-linkshorter/blob/main/public/trpc-linkshorter-800.gif"></a>

### 🔥 About

<p>about ...</p>

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

## TODO//::

- [x] ~~**1. LocalStorage Support:**~~
<p>Implement local storage support to persist user tasks even after closing the browser. This feature ensures that users don't lose their task data between sessions. By utilizing the browser's localStorage API, the app will store and retrieve task data locally. This addition enhances user experience and convenience.</p>
<br/>

- [x] ~~**2. Upload/Download Functionality:**~~
<p>Integrate the ability to upload and download task lists as files. Users can export their tasks as a file and import them back into the app. This feature offers users a way to back up their tasks externally or transfer them between devices easily. It enhances the app's versatility and makes task management even more user-friendly.</p>
<br/>

- [x] ~~**3. TypeScript Support**~~
<p>Incorporate TypeScript to the project for enhanced code maintainability and type safety. TypeScript provides static type checking, which helps catch errors during development and makes the codebase more robust. By adding TypeScript support, the app's codebase becomes more predictable and less prone to runtime errors, leading to better code quality.</p>
<br/>

- [x] ~~**4. State Manager:**~~
<p>Integrate a state management solution, such as Vuex, to efficiently manage the app's global state. As the app grows in complexity, managing state across various components can become challenging. A state manager centralizes the data, making it easier to share and modify across different parts of the app. This improves code organization and reduces the risk of state-related bugs.</p>
<br/>

- [x] ~~**5. Composition API:**~~
<p>Transitioning my existing options-style todo app to the Composition API isn't just an upgrade—it's a deliberate step to deepen my Vue.js understanding. Embracing the Composition API means rethinking how I structure code, moving from options to composition functions for more intuitive logic organization. This transition sharpens my grasp of reactive state, lifecycle management, and modular composition, resulting in more maintainable code. By making this change, I'm not only rewriting my app but also advancing my proficiency and building a stronger foundation in Vue.js development.</p>
<br/>

- [x] ~~**6. Edit functionality:**~~
<p>Adding the "Edit functionality" isn't just about enhancing my todo app; it's a deliberate choice to deepen my grasp of the basic concepts in Vue.js. By giving users the ability to edit their tasks, I'm not only making the app more user-friendly but also taking a deep dive into the core principles that underlie Vue.js development.</p>
<br/>

- [ ] **7. Accessibility (a11y) Enhancement:**
<p>Prioritize accessibility (a11y) to ensure that the todo app is usable by everyone, regardless of their abilities. Implementing accessibility features not only adheres to best practices but also makes the app more inclusive and user-friendly.</p>

### 🌶️ Why These Features:

* **LocalStorage Support:** This feature adds persistence to the app, ensuring that users' task data remains intact across sessions, enhancing usability.

* **Upload/Download Functionality:** Enabling users to export and import task data empowers them to manage their tasks flexibly and safely.

* **TypeScript Support:** TypeScript enhances code quality and maintainability by adding static types, catching errors early, and providing better developer tooling.

* **State Manager:** As the app evolves, managing state becomes crucial. A state manager simplifies state management, enhancing code organization and reducing bugs.

* **Composition API:** The Composition API offers a more organized and reusable way to manage component logic, promoting better code structure and maintainability.

* **Edit functionality:** Allowing users to edit tasks improves the user experience by providing the flexibility to update task details without starting from scratch.

* **Accessibility Enhancement (a11y):** Prioritizing accessibility ensures that the todo app is usable by everyone, regardless of their abilities. By making the app accessible, you're promoting inclusivity, adhering to legal and ethical obligations, and improving the overall user experience for everyone, including those with disabilities. This commitment to accessibility aligns with the principles of universal design and responsible development.
