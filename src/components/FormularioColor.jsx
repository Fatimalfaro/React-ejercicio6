import { useState, useEffect } from "react";
import ListaColores from "./ListaColores";

const coloresEspaniol = {
  rojo: "red",
  azul: "blue",
  verde: "green",
  amarillo: "yellow",
  negro: "black",
  blanco: "white",
  gris: "gray",
  rosa: "pink",
  violeta: "purple",
  naranja: "orange"
};

const FormularioColor = () => {
  const [color, setColor] = useState("");
  const [colores, setColores] = useState([]);

  useEffect(() => {
    const coloresGuardados =
      JSON.parse(localStorage.getItem("colores")) || [];
    setColores(coloresGuardados);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (color.trim() === "") return;

    const colorTraducido = color.toLowerCase();
    const colorFinal =
      coloresEspaniol[colorTraducido] || colorTraducido;

    const nuevosColores = [...colores, colorFinal];

    setColores(nuevosColores);

    localStorage.setItem(
      "colores",
      JSON.stringify(nuevosColores)
    );

    setColor("");
  };

  const borrarColor = (colorABorrar) => {
    const nuevaLista = colores.filter(
      (item) => item !== colorABorrar
    );

    setColores(nuevaLista);

    localStorage.setItem(
      "colores",
      JSON.stringify(nuevaLista)
    );
  };

  return (
    <>
      <div className="card p-4 mb-4">
        <h4>Paleta de colores</h4>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Ingrese un color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <button className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>

      <ListaColores
        colores={colores}
        borrarColor={borrarColor}
      />
    </>
  );
};

export default FormularioColor;