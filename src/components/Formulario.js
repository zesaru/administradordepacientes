import React from "react";

const Formulario = () => {
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
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
        />
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" />
        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" />
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" />
        <label>Síntomas</label>
        <textarea className="u-full-width" name="sintomas"></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Formulario;
