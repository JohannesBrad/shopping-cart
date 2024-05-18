//const Product = ({detailGuit, addToCart}) => {
// const Product = ({detailGuit,cart, setCart}) => {
//const Product = ({detailGuit, setCart}) => {

const Product = ({ detailGuit, addToCart}) => {
  //console.log(detailGuit);
  const { id, name, image, description, price } = detailGuit;

  // 2 opcion de la funcion
/*   const handleClick = (detailGuit) => {
    console.log("Diste click, ID:", detailGuit);
    setCart([...cart, detailGuit]);
  }; */

  // 3 opcion de la funcion
  // Se elimina la funcion handleClick y se envia directamente la funcion al btn
  // Se elimina cart

  return (
    <>
      <div className="col-md-6 col-lg-4 my-4 row align-items-center">
        <div className="col-4">
          <img
            className="img-fluid"
            // src="/img/guitarra_01.jpg"
            src={`/img/${image}.jpg`}
            alt="imagen guitarra"
          />
        </div>
        <div className="col-8">
          <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
          <p>{description}</p>
          <p className="fw-black text-primary fs-3">${price}</p>
          {/* <button type="button" className="btn btn-dark w-100" onClick={() => handleClick(detailGuit)}>  2d opcion*/}
          {/* <button
            type="button"
            className="btn btn-dark w-100"
            onClick={() => setCart((prevCart) => [...prevCart, detailGuit])}
          > */}
             <button type="button" className="btn btn-dark w-100" onClick={() =>  addToCart(detailGuit)}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
