import { useState } from "react";

import Header from "./components/Header";
import Product from "./components/Product";

import { db } from "./data/db.js";

function App() {
  const [dataProducto, setDataProducto] = useState(db);
  const [cart, setCart] = useState([]);


  // Una recomendacion la agregar productso al arreglo es crear una funcion
  function addToCart(item) {

    const itemExist = cart.findIndex((guitar) => guitar.id === item.id )
    //console.log(itemExist);
    if (itemExist >= 0) {
      console.log("ya existe");
      // crear una variable
      const updateCart = [...cart]
      updateCart[itemExist].quantity++
      setCart(updateCart)
    }else{
      console.log("Noo existe, agregando");
      item.quantity = 1
      //setCart( prevCart => ([...prevCart, item]))
      setCart(([...cart, item]))
    }
  }

  

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {/* dentro del parentesis de map, agrago un valor para acceder al objeto */}
          {dataProducto.map((detailGuit) => (
            <Product
              key={detailGuit.id}
              detailGuit={detailGuit}
              // cart={cart}
              setCart={setCart}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
