Now that we have our astro project setup.  Let's install Tailwind.

## 🧠 Astro Component Anatomy Explained

Astro components are `.astro` files that combine **HTML**, **JavaScript**, **CSS**, and optional **frontmatter logic** to create UI building blocks.

---

### 1. `---` Frontmatter Block (optional)

```astro
---
---
```

- This is called **Astro frontmatter**.
- It's where you write **server-side logic** that runs at build time.
- You can import data, define props, or write any top-level TypeScript/JavaScript.

Example with data:
```astro
---
const { title } = Astro.props;
import logo from "../assets/logo.svg";
---
```

If you don’t use any server-side logic, this block can be **omitted**.

---

### 2. HTML Template Section

```html
<div id="container">
  <button id="alert-button" class="button">Click me!</button>
</div>
```

- This is the **main markup** rendered into static HTML.
- You can use standard HTML tags or import and render Astro/JSX components.
- It defines the layout of your component.

---

### 3. `<script>` Block

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("alert-button") as HTMLButtonElement;
    button.addEventListener("click", () => {
      alert("Hello from Astro! 🎉");
    });
  });
</script>
```

- This is **client-side JavaScript** that runs in the browser.
- Used for interactivity (e.g., button clicks).
- By default, this runs when the page is loaded.

---

## Summary Table

| Section           | Purpose                                                      |
|-------------------|--------------------------------------------------------------|
| `---` frontmatter | Build-time logic (data fetching, imports, props)             |
| HTML Template     | Static layout and HTML rendered by Astro                     |
| `<script>` tag    | Browser-run JavaScript for interactivity (DOM events, etc.)  |

---

### Bonus: Framework Interactivity

If using a UI framework in Astro (React, Vue, etc.), hydrate it like so:

```astro
<MyComponent client:load />
```

This tells Astro to load the component on the client for interactivity.

Create new component

NewComponent.astro

basic example

``` astro
---
console.log("Hello From Front Matter");
---

<div id="container">
  <button id="alert-button" class="button">Click me!</button>
</div>

<style>
  #container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    font-family: "Inter", sans-serif;
  }

  .button {
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
  }

  .button:hover {
    background: linear-gradient(135deg, #5a0eb4 0%, #1f66e0 100%);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: scale(1.03);
  }

  .button:active {
    transform: scale(0.98);
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("alert-button") as HTMLButtonElement;
    button.addEventListener("click", () => {
      alert("Hello from Astro! 🎉");
    });
  });
</script>

```


This is easy to do in Astro all we have to do is run the following command:

``` bash
npx astro add tailwind
```

You can learn more [here](https://docs.astro.build/en/guides/styling/#tailwind)

``` bash

client git:(main) ✗ npx astro add tailwind

✔ Resolving packages...

  Astro will run the following command:
  If you skip this step, you can always run it yourself later

 ╭─────────────────────────────────────────────────────────╮
 │ yarn add @tailwindcss/vite@^4.1.11 tailwindcss@^4.1.11  │
 ╰─────────────────────────────────────────────────────────╯

✔ Continue? … yes
✔ Installing dependencies...

  Astro will scaffold ./src/styles/global.css.

✔ Continue? … yes

  Astro will make the following changes to your config file:

 ╭ astro.config.mjs ─────────────────────────────╮
 │ // @ts-check                                  │
 │ import { defineConfig } from 'astro/config';  │
 │                                               │
 │ import tailwindcss from '@tailwindcss/vite';  │
 │                                               │
 │ // https://astro.build/config                 │
 │ export default defineConfig({                 │
 │   vite: {                                     │
 │     plugins: [tailwindcss()]                  │
 │   }                                           │
 │ });                                           │
 ╰───────────────────────────────────────────────╯

✔ Continue? … yes
  
   success  Added the following integration to your project:
  - tailwind
  
   action required  You must import your Tailwind stylesheet, e.g. in a shared layout:

 ╭ src/layouts/Layout.astro ──────╮
 │ ---                            │
 │ import '../styles/global.css'  │
 │ ---                            │
 ╰────────────────────────────────╯

```


