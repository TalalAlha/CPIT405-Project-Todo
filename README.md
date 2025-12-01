# 🎣 PhishTrain: Employee Phishing Awareness Simulator

A robust, full-stack application designed to enhance employee cybersecurity awareness by running simulated phishing campaigns and assessing user performance through interactive quizzes.

This project aligns with modern cybersecurity best practices, providing a crucial defense layer against social engineering threats.

---

## 1. 🌟 Project Overview

**PhishTrain** is a comprehensive solution that features:

* **Custom Email Templates:** Allows administrators to design and deploy realistic simulated phishing emails.
* **Campaign Management:** Tools for scheduling, deploying, and tracking the performance of different campaigns.
* **Interactive Quizzes:** Short educational quizzes delivered after a user fails a simulation, reinforcing learning.
* **Reporting Dashboard:** Provides administrators with detailed analytics on employee click rates, reporting behavior, and overall security posture improvement.

### 💻 Technology Stack

* **Backend:** ASP.NET Core (C#) for API services and business logic.
* **Frontend:** Angular for the responsive web application (Admin and Employee views).
* **Database:** SQL Server or PostgreSQL (as configured) for campaign data, user tracking, and results.
* **Containerization:** Docker for consistent environment setup and deployment.
* **Version Control:** Git / GitHub.
* **Simulation Engine:** Python (potentially for email generation/delivery scripts).

---

## 2. 🛠️ Dependencies and Installation

This project is separated into a **Backend API**, an **Angular Frontend**, and a **Database** component.

### 2.1. Prerequisites

Ensure the following software is installed on your system:

| Dependency | Minimum Version | Installation Check Command |
| :--- | :--- | :--- |
| **.NET SDK** | 8.0 | `dotnet --version` |
| **Node.js** | 18.x or 20.x | `node -v` |
| **npm** | 9.x or later | `npm -v` |
| **Angular CLI** | 17.x | `ng version` |
| **Python** | 3.10 | `python3 --version` |
| **Docker** | Latest Stable | `docker --version` |

### 2.2. Backend Setup (ASP.NET Core)

1.  **Navigate to the Backend Directory:**
    ```bash
    cd PhishTrain.API
    ```
2.  **Restore Dependencies:**
    ```bash
    dotnet restore
    ```
3.  **Build the Project:**
    ```bash
    dotnet build
    ```
4.  **Database Migration:**
    * Ensure your connection string in `appsettings.json` is correct.
    * Apply any pending migrations (using Entity Framework Core):
        ```bash
        dotnet ef database update
        ```

### 2.3. Frontend Setup (Angular)

1.  **Navigate to the Frontend Directory:**
    ```bash
    cd PhishTrain.Client
    ```
2.  **Install Node Dependencies:**
    ```bash
    npm install
    ```
3.  **Configure API Endpoint:**
    * Verify the API URL in the environment files (`src/environments/environment.ts`) points to your running backend.

### 2.4. Python Simulation Scripts

The project uses Python for specific tasks like generating and sending simulated emails.

1.  **Navigate to the Python Scripts Directory:**
    ```bash
    cd PhishTrain.Scripts
    ```
2.  **Create and Activate a Virtual Environment (Recommended):**
    ```bash
    python3 -m venv venv
    source venv/bin/activate # For Linux/macOS
    .\venv\Scripts\activate # For Windows PowerShell
    ```
3.  **Install Python Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
    * *(Note: You must create a `requirements.txt` file listing all necessary Python packages, e.g., `requests`, `smtplib`, etc.)*

---

## 3. 🚀 Running the Application

### Option A: Docker (Recommended for Production/Deployment)

1.  **Build and Run Containers:** This command will build the necessary Docker images and start the entire stack (Backend, Frontend, Database) defined in `docker-compose.yml`.
    ```bash
    docker-compose up --build
    ```

### Option B: Local Development

1.  **Start the Backend API:**
    * In a terminal from the `PhishTrain.API` directory:
        ```bash
        dotnet run
        ```
2.  **Start the Angular Frontend:**
    * In a **separate terminal** from the `PhishTrain.Client` directory:
        ```bash
        ng serve --open
        ```
    The application should open in your browser, typically at `http://localhost:4200`.

---

## 4. 🤝 Contribution

For any issues, bugs, or feature suggestions, please use the GitHub Issues tracker .
