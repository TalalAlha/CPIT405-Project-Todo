# CPIT-405: TaskFlow (To-Do Web App)

A React-based Task Management Application developed as a capstone project for CPIT-405. This application allows users to register, manage daily tasks via a dashboard, and receive daily motivational quotes through an external API.

## 👥 Team Members & Roles

| Name | ID | Role | Responsibilities |
|------|----|------|------------------|
| **Emad Alzahrani** | 2236570 | Frontend Developer | UI/UX Design, Login/Register pages, Dashboard layout, Protected Routes. |
| **Fuad Alawi** | 2236365 | Backend Developer | Authentication logic, CRUD operations service, LocalStorage database simulation. |
| **Talal Alharbi** | 2236482 | API Integrator | External Quotes API integration, Data fetching, Error handling. |

---

## 🚀 Features

*   **User Authentication:** Secure Registration and Login system.
*   **Protected Routes:** The Dashboard is inaccessible without logging in.
*   **Task Management (CRUD):** Create, Read, Update (mark as done), and Delete tasks.
*   **External API Integration:** Fetches random inspirational quotes from [Quotable.io](https://github.com/lukePeavey/quotable).
*   **Favorites System:** Users can save their favorite quotes.
*   **Data Persistence:** All data (users, tasks, sessions) is saved locally using LocalStorage.
*   **Responsive Design:** Fully mobile-responsive interface.

---

## 🛠️ Tech Stack

*   **Framework:** React (Vite)
*   **Routing:** React Router DOM (v6)
*   **HTTP Client:** Axios
*   **Icons:** Lucide React
*   **Styling:** CSS Modules / Custom CSS
*   **State Management:** React Context API

---

## 💻 Installation & Setup

Follow these steps to run the project locally.

### 1. Prerequisites
Ensure you have **Node.js** installed on your computer.
*   Download here: [nodejs.org](https://nodejs.org/)

### 2. Download the Project
Clone this repository or download the ZIP folder to your computer.

### 3. Install Dependencies
Open your terminal (Command Prompt or PowerShell) and **navigate into the project folder**.

```bash
cd todo-app
```

Run the installation command to download all required libraries (React, Router, Axios, etc.):

```bash
npm install
```

*(If you run into issues, try forcing the installation of specific packages)*:
```bash
npm install react-router-dom axios lucide-react
```

### 4. Run the Application
Start the development server:

```bash
npm run dev
```

You will see a link in the terminal (usually `http://localhost:5173`).
Hold **Ctrl + Click** on the link to open the app in your browser.

---

## 📂 Project Structure

```text
todo-app/
├── src/
│   ├── components/      # Reusable UI (Navbar, PrivateRoute)
│   ├── context/         # AuthContext (Login logic)
│   ├── pages/           # Views (Login, Dashboard)
│   ├── services/        # API calls & Mock DB
│   ├── styles/          # CSS files
│   ├── App.jsx          # Main Routing
│   └── main.jsx         # Entry point
├── package.json         # Dependencies list
└── README.md            # Documentation
```

## ⚠️ Troubleshooting

**Error: `vite: command not found`**
*   Make sure you are inside the `todo-app` folder. Run `ls` (Mac) or `dir` (Windows) to check if you see `package.json`.

**Error: `Failed to resolve import`**
*   You need to install the libraries. Stop the server (`Ctrl+C`) and run:
    `npm install react-router-dom axios lucide-react`
