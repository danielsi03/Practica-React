import React from "react";

//Componente reutilizable Boton con props
const Boton = ({ texto, onClick, color = "blue" }) => {
  return (
    <button
      onClick={onClick}//Asignamos la función onClick al evento click del botón
      style={{
        backgroundColor: color,//Asignamos el color de fondo del botón
        color: "white",
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "5px"
      }}
    >
      {texto}
    </button>
  );
};

export default Boton;
