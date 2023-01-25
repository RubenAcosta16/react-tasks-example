// npm create vite para crear react app
//   cd react-tasks--app
//   npm install
// npm run dev == npm start

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import { useState, useEffect } from "react";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;

// 4:42:27
