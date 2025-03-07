# Todo Application

## Live Demo
🔗 [Todo App](https://too-do-app-bk.netlify.app/)

## Description
This is a modern **Todo Application** designed with a sleek **Glassmorphism UI**. It allows users to efficiently manage their tasks with priority selection, animations, and smooth interactions.

---

## 🚀 Features
- **Modern UI with Glassmorphism Design**
- **Authentication System** (Login & Logout)
- **Task Input with Priority Selection**
- **Beautiful Task List with Hover Effects**
- **Smooth Animations & Transitions**
- **Weather Integration Display**
- **Fully Responsive & Mobile-Friendly**
- **Dark & Light Theme Support** (if applicable)
- **Accessible for All Users**

---

## 📌 Technologies Used
- **React.js** - Frontend Framework
- **Tailwind CSS** - Styling & Design System
- **Lucide React** - Icons
- **Netlify** - Deployment

---

## 🎨 Design System & Styling
- **Implemented Glassmorphism Effect using Tailwind CSS:**
  ```css
  .glass-effect {
    @apply bg-white/70 backdrop-blur-md border border-white/20 shadow-xl;
  }
  .glass-effect-light {
    @apply bg-white/50 backdrop-blur-sm border border-white/10 shadow-lg;
  }
  ```
- **Smooth Animations & Transitions:**
  ```css
  .task-item {
    @apply transform transition-all duration-300 hover:scale-[1.02];
  }
  ```
- **Fade-in Animation in Tailwind Config:**
  ```js
  animation: {
    'fade-in': 'fadeIn 0.5s ease-out',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: '0', transform: 'translateY(10px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
  },
  ```

---

## 📂 Project Structure
```
📦 todo-app
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 LoginForm.tsx
 ┃ ┃ ┣ 📜 TaskInput.tsx
 ┃ ┃ ┣ 📜 TaskList.tsx
 ┃ ┃ ┗ 📜 Header.tsx
 ┃ ┣ 📜 App.tsx
 ┃ ┣ 📜 index.tsx
 ┃ ┗ 📜 styles.css
 ┣ 📜 package.json
 ┣ 📜 tailwind.config.js
 ┗ 📜 README.md
```

---

## 🛠️ Installation & Running Instructions
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Run the Application
```sh
npm run dev
```
The application will run locally at **http://localhost:5173/**.

### 4️⃣ Deploy to Netlify (Optional)
If you want to deploy it on **Netlify**, run:
```sh
netlify deploy --prod
```

---

## 📸 Screenshots
### 🌟 **Login Page**
![Login Page](https://github.com/i-am-bharathkumar/Todo-app/blob/main/images/Screenshot%2025-03-07%194813.png)
### ✅ **Todo List Page**
![Todo List](https://github.com/i-am-bharathkumar/Todo-app/blob/main/images/Screenshot%202025-03-07%20183818.png)

---

## 📜 License
This project is **open-source** under the MIT License.

---

## 📧 Contact
For any queries or feedback, feel free to reach out:
📩 Email: myself.bharathkumar@gmail.com
📌 GitHub: [Your GitHub Profile](https://github.com/i-am-bharathkumar)

