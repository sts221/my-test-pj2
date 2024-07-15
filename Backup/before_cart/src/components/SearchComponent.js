import UserCartComponent from "./UserCartComponent";
import { useState } from "react";

const SearchComponent = ({
  filteredProducts,
  addProductToCartFunction,
  cartProducts,
  setCartProducts,
  deleteProductFromCartFunction,
  totalAmountCalculationFunction,
}) => {
  console.log("SEARCHCOMPONENT: ", { filteredProducts });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Search results</h3>
          </div>
        </div>
        <div className="row gy-5" style={{width:"100%"}}>
          <div className="col-lg-9 col-md-9 col-sm-3 ">
            <div className="row gy-5">
              {filteredProducts.length === 0 ? (
                <p className="no-results">
                  Sorry, No matching Product found.
                </p>
              ) : (
                filteredProducts.map((product) => (
                  // <div key={product.id} className="col-sm col-mb-6 col-lg-4 mb-3 mb-sm-0">
                  <div key={product.id} className="col-sm-auto col-mb-auto col-lg-auto">
                    <div
                      className="card"
                      style={{
                        width: "290px",
                        boxShadow: "10px 10px 10px black",
                        borderRadius:"10px"
                      }}
                    >
                      <div className="p-1 imageContSearch" style={{height:"280px"}}>
                      <img
                        src={require(`${product.image}`)}
                        className="card-img-top searchImg"
                        alt={product.name}
                      />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{product.category}</h5>
                        <p className="card-text">{product.name}</p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <div  >
                        <li key={product.id} className="list-group-item">
                          Price: {product.price} CAD
                        </li>
                        </div>
                      </ul>
                      <button
                        className="btn btn-primary m-2"
                        onClick={() => addProductToCartFunction(product)}
                      >
                        Add to Shopping Cart
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="col-lg-3 col-sm-5 p-1 imageContSearch" style={{border:"1px solid", boxShadow:"black 10px 10px 10px"}}>
            <UserCartComponent
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              deleteProductFromCartFunction={deleteProductFromCartFunction}
              totalAmountCalculationFunction={totalAmountCalculationFunction}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchComponent;
