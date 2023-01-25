import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({ title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            //   console.log(e.target.value);
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white rounded">Guardar</button>
      </form>
    </div>
  );
};

export default TaskForm;
