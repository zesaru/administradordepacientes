import React, { useState } from "react";

const Formulario = () => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });
  // Función que se ejecuta cada que el usuario escribe en un input
  const actualizarState = () => {
    console.log("escribiendo...");
  };
  return (
    <>
      <h2>Crear cita</h2>
      <form>
        <label>Nombre de la mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={actualizarState}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
        />
        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Formulario;
