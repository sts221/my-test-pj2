import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const UserCartComponent = ({
  cartProducts,
  setCartProducts,
  deleteProductFromCartFunction,
  totalAmountCalculationFunction,
}) => {
  const history = useHistory();
  const routeChange = () => {
    history.push("/checkout");
  };

  return (
    <>
      <div className="row g-5">
        <div className="col col-lg col-md col-sm order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Product name</h6>
              </div>
            </li>

            {cartProducts.map((item) => (
              <li key={item.product.id} className="cart-item">
                <div>
                  <div className="item-info">
                    <div className="item-image">
                      <img
                        src={require(`${item.product.image}`)}
                        className="card-img-top"
                        alt={item.product.name}
                      />
                      {/* <img src={item.product.image} alt={item.product.name} /> */}
                    </div>
                    <div className="item-details">
                      <h3 className="fs-5">{item.product.name}</h3>
                      <p>Price: {item.product.price}</p>
                    </div>
                  </div>
                  <div>
                    <div className="item-actions">
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          deleteProductFromCartFunction(item.product)
                        }
                      >
                        Remove Product
                      </button>
                      <div className="quantity">
                        <button
                          style={{ margin: "1%" }}
                          onClick={(e) => {
                            setCartProducts((prevCartCourses) => {
                              const updatedCart = prevCartCourses.map(
                                (prevItem) =>
                                  prevItem.product.id === item.product.id
                                    ? {
                                        ...prevItem,
                                        quantity: item.quantity + 1,
                                      }
                                    : prevItem
                              );
                              return updatedCart;
                            });
                          }}
                        >
                          +
                        </button>
                        <p className="quant">{item.quantity} </p>
                        <button
                          onClick={(e) => {
                            setCartProducts((prevCartCourses) => {
                              const updatedCart = prevCartCourses.map(
                                (prevItem) =>
                                  prevItem.product.id === item.product.id
                                    ? {
                                        ...prevItem,
                                        quantity: Math.max(
                                          item.quantity - 1,
                                          0
                                        ),
                                      }
                                    : prevItem
                              );
                              return updatedCart;
                            });
                          }}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {/* <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">−$5</span>
          </li> */}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (CAD)</span>
              <strong>{totalAmountCalculationFunction()}</strong>
            </li>
          </ul>

          {/* <form className="card p-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Promo code"
            />
            <button type="submit" className="btn btn-secondary">
              Redeem
            </button>
          </div>
        </form> */}
        </div>
      </div>
      <div className="col p-3">
        <button
          className="checkout-button"
          disabled={
            cartProducts.length === 0 || totalAmountCalculationFunction() === 0
          }
          onClick={routeChange}
        >
          Proceed to Payment
        </button>
      </div>
    </>
  );
};

export default UserCartComponent;
