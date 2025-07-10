# Spotify Clone - Full-Stack Music Platform

<p align="center">
  <img src="./frontend/public/spotify.png" alt="Spotify Clone Logo" width="200"/>
</p>

A feature-rich, full-stack clone of the Spotify web application, built with modern technologies. This project showcases a complete user experience, from authentication and music playback to real-time chat and friend activity updates. It also includes a secure, dedicated admin panel for comprehensive content management.

**Live Demo:** [**spotify-clone**](https://spotify-clone-9xd3.onrender.com)

<img 
  src="https://raw.githubusercontent.com/Anshr23/spotify_clone/main/frontend/public/demo.png" 
  alt="Demo Screenshot" 
  width="500" 
  style="border: 1px solid #ddd; border-radius: 4px;" 
/>

---

## ✨ Features

This application is packed with features designed to replicate the core Spotify experience and beyond.

### 👤 User Features

*   **Secure Authentication:** Seamless and secure user sign-up and login using Google OAuth, powered by Clerk.
*   **Music & Album Browsing:** Explore a full library of songs and albums with a clean, intuitive interface.
*   **Full Audio Playback:** A persistent audio player with standard controls (play, pause, next, previous), volume adjustment, and a seekable progress bar.
*   **Real-time Friend Activity:** See what your friends are listening to in real-time in the "Friends Activity" sidebar, including their online status.
*   **Real-time Chat:** Engage in one-on-one chats with other users, with messages delivered instantly.
*   **Dynamic UI:** The UI updates in real-time to reflect the currently playing song and user statuses.

### 🛠️ Admin Panel Features

*   **Secure Admin Dashboard:** A separate, protected route (`/admin`) for application management.
*   **Live Statistics:** View real-time statistics, including total users, songs, albums, and unique artists.
*   **Song Management:** Easily upload new songs with audio files and artwork. Add, edit, and delete tracks from the library.
*   **Album Management:** Create new albums and manage existing ones, including adding songs to them.

---

## 🚀 Tech Stack

This project is built with a modern MERN-like stack, utilizing TypeScript and a robust set of tools for both the frontend and backend.

### Frontend

*   **Framework:** [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **State Management:** [Zustand](https://github.com/pmndrs/zustand)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Real-time Communication:** [Socket.IO Client](https://socket.io/)
*   **UI Components:** [Shadcn/ui](https://ui.shadcn.com/) (using Radix UI & Lucide React)
*   **Authentication:** [Clerk](https://clerk.com/)

### Backend

*   **Runtime:** [Node.js](https://nodejs.org/)
*   **Framework:** [Express.js](https://expressjs.com/)
*   **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
*   **Real-time Communication:** [Socket.IO](https://socket.io/)
*   **Authentication:** [Clerk SDK](https://clerk.com/docs) for backend verification
*   **Media Storage:** [Cloudinary](https://cloudinary.com/) for audio and image uploads

---

## 🔧 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18.x or later)
*   `npm` or `yarn`
*   A MongoDB Atlas account (or a local MongoDB instance)
*   A Cloudinary account
*   A Clerk account

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/jackofall-trades/spotify_clone.git
    cd spotify_clone
    ```

2.  **Set up Backend Environment Variables:**
    Create a `.env` file in the `backend` directory and add the following variables:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=5001
    
    # Clerk Credentials
    CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    
    # Cloudinary Credentials
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    
    # Your Admin Email
    ADMIN_EMAIL=your_email_for_admin_access
    ```

3.  **Set up Frontend Environment Variables:**
    Create a `.env` file in the `frontend` directory and add the following:
    ```env
    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    ```

4.  **Install all dependencies from the root directory:**
    This command will install dependencies for both the `frontend` and `backend`.
    ```sh
    npm install
    ```

5.  **Run the application:**
    *   To run the backend server:
        ```sh
        npm run dev --prefix backend
        ```
    *   To run the frontend development server:
        ```sh
        npm run dev --prefix frontend
        ```

    The frontend will be available at `http://localhost:3000` and will connect to the backend running on `http://localhost:5001`.

---

## ☁️ Deployment

This application is configured for easy deployment on platforms like [Render](https://render.com/). The root `package.json` contains the necessary `build` and `start` scripts to handle the entire process:
*   `npm run build`: Installs all dependencies and builds the frontend for production.
*   `npm start`: Starts the backend Node.js server, which also serves the static frontend files.

---

## License

Distributed under the ISC License. See `LICENSE` for more information.
