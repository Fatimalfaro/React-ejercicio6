const ItemColor = ({ color}) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3 text-center">
        <div className="card-body">
          <p>{color}</p>

          <div className="cuadrado" style={{ backgroundColor: color.toLowerCase() }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ItemColor;