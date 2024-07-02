import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import HomeComponent from "./components/HomeComponent";
import SearchComponent from "./components/SearchComponent";
import UserCartComponent from "./components/UserCartComponent";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      category: "Mousse1",
      name: "Chocolate Mousse",
      price: 499,
      image:"./pavlova.png",
    },
    {
      id: 2,
      category: "Mousse1",
      name: "Strawverry mousse",
      price: 699,
      image:"./pavlova.png"
    },
    {
      id: 3,
      category: "Mousse11",
      name: "GFG Hoodie",
      price: 799,
      image:"./pavlova.png"
    },
    {
      id: 4,
      category: "Mousse1",
      name: "Chocolate Mousse",
      price: 499,
      image:"./pavlova.png",
    },
    {
      id: 5,
      category: "Mousse1",
      name: "Strawverry mousse",
      price: 699,
      image:"./pavlova.png",
    },
    {
      id: 6,
      category: "Mousse1",
      name: "Chocolate Mousse",
      price: 499,
      image:"./pavlova.png",
    },
    {
      id: 7,
      category: "Mousse1",
      name: "Strawverry mousse",
      price: 699,
      image:"./pavlova.png",
    },
  ]);

  const [searchedProduct, setSearchedProduct] = useState("");
  const [cartProducts, setCartProducts] = useState([]);

  // searchedProduct is the currently searched product in the menu
  const handleSearchedProduct = (searchedProduct) => {
    setSearchedProduct(searchedProduct);
    console.log(searchedProduct);
  };

  // ************ SearchComponent ************************//
  const getFilteredProducts = (searchedProduct) => {
    let result = searchedProduct ? products.filter(func) : null;
    console.log(searchedProduct, "  RESULT: ", result);
    return result;
  };
  const func = (prod) => {
    // console.log(prod);
    return prod.category === searchedProduct;
  };

  const addProductToCartFunction = (prod) => {
    const alreadyProducts = cartProducts.find(
      (item) => item.product.id === prod.id
    );
    if (alreadyProducts) {
      const latestCartUpdate = cartProducts.map((item) =>
        item.product.id === prod.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      setCartProducts(latestCartUpdate);
    } else {
      setCartProducts([...cartProducts, { product: prod, quantity: 1 }]);
    }
  };

  const deleteProductFromCartFunction = (prod) => {
    const updatedCart = cartProducts.filter(
      (item) => item.product.id !== prod.id
    );
    setCartProducts(updatedCart);
  };

  const totalAmountCalculationFunction = () => {
    return cartProducts.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };
  // ************* End of Search Component ***************** //

  return (
    <div className="container">
      <Router>
        <Menu handleSearchedProduct={handleSearchedProduct} />
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/search">
            <SearchComponent
              filteredProducts={getFilteredProducts({ searchedProduct })}
              addProductToCartFunction={addProductToCartFunction}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              deleteProductFromCartFunction={deleteProductFromCartFunction}
              totalAmountCalculationFunction={totalAmountCalculationFunction}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
