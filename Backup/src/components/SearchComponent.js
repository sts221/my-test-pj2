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
                        width: "15rem",
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
          <div className="col-lg-3 col-sm-5 p-3" style={{border:"1px solid", boxShadow:"black 10px 10px 10px"}}>
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
