# 📝 Taskify | Your Reliable Task Tracker

**Taskify** is a clean, minimal, and high-performance To-Do application. It combines smooth **GSAP** animations with robust functionality like persistent storage and custom modal interactions.

---

## ✨ Key Features
* **Persistent Storage:** Uses `localStorage` to keep your tasks safe even after a page refresh.
* **GSAP Powered Interactions:** * Dynamic strike-through animations using `scaleX`.
    * Smooth transitions for task states.
* **Custom Modal System:** A built-in confirmation dialog for deleting tasks to prevent accidental clicks.
* **Modern UI:** Built with a "Poppins" and "Rubik" typography duo for a premium look.
* **Responsive:** Styled with CSS Variables and Flexbox for a seamless experience on any device.

---

## 🛠️ Built With
* **HTML5:** Structured for accessibility.
* **CSS3:** Featuring custom properties (Variables) and a sleek minimalist aesthetic.
* **JavaScript (ES6+):** Logic for task rendering, state management, and event delegation.
* **GSAP (GreenSock):** Handling the micro-interactions and line-through effects.

---

## 🚀 How It Works
### 1. Adding a Task
Type your task in the input field. If you try to submit an empty task, the input will flash red (a neat UX touch!).
### 2. Striking Through
When you check a task, GSAP animates a `.check-line` from left to right using:
```javascript
gsap.to(elem, { scaleX: 1 });
```
### 3. Deletion
Clicking the "Delete" button triggers a custom modal for confirmation before removing the item from the array and ```localStorage```.

---

## 📂 Project Structure
```text
├── styles/
│   └── style.css  # All the variables and layout logic
├── scripts/
│   └── script.js # GSAP animations and Taskify logic
└── index.html    # The main entry point
```

---

## ⚙️ Installation
### Fast Access
You can access the project directly [here](https://jasseramir.github.io/taskify).

### Local Installation
1. Clone the repo:
```bash
git clone https://github.com/jasseramir/taskify.git
```
2. Open ```index.html``` in your browser.
3. Start tracking your tasks!