import ItemColor from "./ItemColor";

const ListaColores = ({ colores}) => {
  return (
    <div className="row">
      {colores.map((item, index) => (
        <ItemColor
          key={index}
          color={item}
        />
      ))}
    </div>
  );
};

export default ListaColores;