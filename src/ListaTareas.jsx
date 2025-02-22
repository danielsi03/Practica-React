import React, { useState } from "react";// Importamos useState desde react
import Boton from "./Boton"; // Importamos el componente reutilizable de botón
import "./App.css";

const ListaTareas = () => {
  // Estado que almacena las tareas en un array
  const [tareas, setTareas] = useState([""]);
  const [nuevaTarea, setNuevaTarea] = useState(""); // Estado para almacenar nueva tarea
  const [editando, setEditando] = useState(null); // Estado para saber si está editando una tarea
  const [textoEditado, setTextoEditado] = useState(""); // Estado para almacena edición de una tarea

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return; 
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea("");
  };

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index)); // Filtra tareas y elimina la seleccionada
  };

  const editarTarea = (index) => {
    setEditando(index); 
    setTextoEditado(tareas[index]); // Guarda texto actual de la tarea a editar
  };

  const guardarEdicion = (index) => {
    const nuevasTareas = [...tareas]; // Copiamos las tareas actuales
    nuevasTareas[index] = textoEditado; // Reemplazamos la tarea editada
    setTareas(nuevasTareas); // Actualizamos el estado de las tareas
    setEditando(null); // Reseteamos el estado de edición
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <div className="input-container">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe una tarea..."
        />
        <Boton texto="Agregar" onClick={agregarTarea} color="green" className="add-btn" />
      </div>
      <ul className="task-list">
        {tareas.map((tarea, index) => (
          <li key={index} className="task">
            {editando === index ? (
              <>
                <input
                  type="text"
                  value={textoEditado}
                  onChange={(e) => setTextoEditado(e.target.value)}//
                />
                <Boton texto="Guardar" onClick={() => guardarEdicion(index)} color="blue" className="edit-btn" />
              </>
            ) : (
              <>
                <span>{tarea}</span>
                <div>
                  <Boton texto="✏️" onClick={() => editarTarea(index)} color="orange" className="edit-btn" />
                  <Boton texto="🗑️" onClick={() => eliminarTarea(index)} color="red" className="delete-btn" />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListaTareas;

