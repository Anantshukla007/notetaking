# NoteTaking App 📝

A simple and elegant **Note Taking Application** built using **React** and **Tailwind CSS**, designed to let users **create, view, search, update, and delete notes** — all stored locally in the browser using **Local Storage**.  
The app also features **secure authentication** using **Auth0**.

---

## 🚀 Features

- 🔐 **Authentication** via **Auth0** (Google login supported)
- 🧠 **Persistent notes** using **Local Storage**
- 📝 **CRUD Operations**: Create, Read, Update, and Delete notes
- 🔍 **Search functionality** to quickly find notes
- 🎨 **Responsive UI** styled with Tailwind CSS
- ⚡ **Deployed on Vercel** for fast and reliable hosting

---

## 🧰 Tech Stack

- **Frontend:** React + Vite  
- **Styling:** Tailwind CSS  
- **Authentication:** Auth0  
- **Storage:** Local Storage (Browser)  
- **Deployment:** Vercel

---

## 📦 Folder Structure

```
src/
│
├── auth/
│   ├── AuthProvider.jsx     # Provides Auth0 authentication context
│   └── useAuth.js           # Custom hook for accessing auth state
│
├── components/
│   ├── NoteForm.jsx         # Form for creating and editing notes
│   ├── NoteList.jsx         # Displays list of notes with edit/delete options
│   ├── SearchBar.jsx        # Allows searching notes
│   └── Navbar.jsx           # Navigation bar with login/logout controls
│
├── pages/
│   ├── Home.jsx             # Main note-taking interface
│   └── Login.jsx            # Auth0 login redirect handler
│
├── App.jsx                  # Main app component
└── main.jsx                 # Entry point
```

---

## 🧭 How It Works

1. Users authenticate through **Auth0** (Google Login).  
2. Once logged in, they are redirected to the main app page.  
3. Notes are created, updated, deleted, or searched directly in the UI.  
4. Data is saved in **Local Storage**, ensuring persistence even after page reloads.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/notetaking.git
cd notetaking
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add Auth0 Configuration
Create a `.env` file in the root directory and add your Auth0 credentials:
```bash
VITE_AUTH0_DOMAIN=your-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
VITE_AUTH0_CALLBACK_URL=http://localhost:5173
```

### 4. Run the Project Locally
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

### 6. Deploy on Vercel
Simply connect your GitHub repo to **Vercel** and deploy.  
Make sure to update your **Auth0 Allowed Callback URLs** and **Logout URLs** with your deployed domain (e.g. `https://notetaking-swart.vercel.app`).

---

## 🔒 Auth0 Settings

Ensure these are added under **Application Settings → Allowed URLs**:

| Setting | Local URL | Deployed URL |
|----------|------------|---------------|
| **Callback URL** | `http://localhost:5173` | `https://notetaking-swart.vercel.app` |
| **Logout URL** | `http://localhost:5173` | `https://notetaking-swart.vercel.app` |
| **Allowed Web Origins** | `http://localhost:5173` | `https://notetaking-swart.vercel.app` |

---

## ✨ Future Enhancements

- 🗂️ Add folder organization for notes  
- ☁️ Optionally integrate with backend (Node.js + MongoDB)  
- 🕵️ Add dark mode support  
- 📱 Improve mobile UX

---

## 🧑‍💻 Author

**Anant Shukla**  
Built with ❤️ using React, Tailwind CSS, and Auth0.  
Deployed on **Vercel**.
