import { useState, useEffect } from "react";
import ListaColores from "./ListaColores";

const FormularioColor = () => {
  const [color, setColor] = useState("");
  const [colores, setColores] = useState([]);

  useEffect(() => {
    const coloresGuardados = JSON.parse(localStorage.getItem("colores")) || [];
    setColores(coloresGuardados);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (color.trim() === "") return;

    const nuevosColores = [...colores, color];

    setColores(nuevosColores);

    localStorage.setItem("colores", JSON.stringify(nuevosColores));

    setColor("");
  };


  return (
    <>
      <div className="card p-4 mb-4">
        <h4>Paleta de colores</h4>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Ingrese un color ej Blue"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <button className="btn btn-primary">Guardar</button>
        </form>
      </div>
    </>
  );
};

export default FormularioColor;