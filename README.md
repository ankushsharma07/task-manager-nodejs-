# Task Manager App ✅  
A functional and lightweight **Task Manager application** built using **Node.js, Express.js, EJS**, and a **file-based storage system**.  
Users can create tasks, view task details, and edit task names in a clean, responsive UI styled with **TailwindCSS**.

---

## 📌 Features

- 📝 **Create Task**: Add task title and detailed description  
- 📄 **View Task Details** (opens a dedicated page)  
- ✏️ **Edit Task Name** with smooth UX  
- 📁 **File-based storage system** (tasks saved as files)  
- 🎨 **TailwindCSS UI** (modern & responsive)  
- ⚡ Simple, fast & clean Node.js backend  
- 📱 Mobile responsive layout

---

## 🛠️ Tech Stack

### **Frontend**
- HTML  
- EJS (Embedded JavaScript Templates)  
- TailwindCSS  

### **Backend**
- Node.js  
- Express.js  
- File System (fs module)

---

## 📂 Project Structure  
Matches EXACTLY your repository:

```bash
Task-Manager/
│
├── files/              # All created tasks stored as .txt or similar
│
├── node_modules/       # Installed npm packages
│
├── views/              # EJS templates
│   ├── home.ejs        # Main page (create + list tasks)
│   ├── details.ejs     # View a task's details
│   └── edit.ejs        # Edit task name
│
├── index.js            # Main Node.js backend server
│
├── package.json        # Project dependencies
├── package-lock.json
│
└── README.md
