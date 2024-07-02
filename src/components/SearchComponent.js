import UserCartComponent from "./UserCartComponent";
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
            <h2>Title</h2>
          </div>
        </div>
        <div className="row gy-5">
          <div class="col-9">
            <div class="row gy-5">
              {filteredProducts.length === 0 ? (
                <p className="no-results">
                  Sorry Geek, No matching Product found.
                </p>
              ) : (
                filteredProducts.map((product) => (
                  <div key={product.id} className="col-sm-4 mb-3 mb-sm-0">
                    <div
                      className="card"
                      style={{
                        width: "18rem",
                        boxShadow: "10px 10px 10px black",
                      }}
                    >
                      <img
                        src={require(`${product.image}`)}
                        className="card-img-top"
                        alt={product.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.category}</h5>
                        <p className="card-text">{product.name}</p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li key={product.id} className="list-group-item">
                          {product.price}
                        </li>
                      </ul>
                      <button
                        className="btn btn-primary"
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
          <div class="col-3" style={{border:"2px solid red"}}>
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
