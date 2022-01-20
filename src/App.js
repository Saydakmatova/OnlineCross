import { useState } from "react";
import AddProduct from "./Components/AddProduct";
import ProductsList from "./Components/ProductsList";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  function addProduct(newProduct) {
    setAllProducts([...allProducts, newProduct]);

  }

  function deleteProduct(id) {
    let arr = [...allProducts];
    arr = arr.filter(item => {
      return item.id !== id
    })
    setAllProducts(arr);
  }
  return (
    <>
    <div className="container">
      <AddProduct
      addProduct={addProduct}
      />
      <ProductsList
      allProducts={allProducts}
      deleteProduct ={deleteProduct}
      />
    </div>
    </>
  );
}

export default App;
