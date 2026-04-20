import ItemColor from "./ItemColor";

const ListaColores = ({ colores, borrarColor }) => {
  return (
    <div className="row">
      {colores.map((item, index) => (
        <ItemColor
          key={index}
          color={item}
          borrarColor={borrarColor}
        />
      ))}
    </div>
  );
};

export default ListaColores;