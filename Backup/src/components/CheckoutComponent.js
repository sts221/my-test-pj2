import DatePickerComponent from "./DatePickerComponent";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./checkoutComponent.css";

const CheckoutComponent = ({ cartProducts, setCartProducts }) => {
  const [startDate, setStartDate] = useState(new Date());
  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  const history = useHistory();
  const routeChange = () => {
    setCartProducts([]);
    {
      alert("Confirmation number: 123456789");
    }
    history.push("/");
  };

  const handleChangeValue = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <div className="container">
        <main>
          <div className="row rowCheckOut" style={{ paddingLeft: "20px"}}>
            {cartProducts.map((item, i) => (
              <div
                key={i}
                className="col-1 checkoutProducts"
                style={{ margin: "10px" }}
              >
                <div className="checkoutName">
                  <h6> {item.product.name}</h6>
                </div>
                <div className="checkoutImg">
                  <img
                    className="item_img"
                    src={require(`${item.product.image}`)}
                    alt={item.product.name}
                    style={{ width: "100px", height: "80px" }}
                  />
                </div>
                <div className="checkOutPrice">
                  <p>Price: {item.product.price}CAD</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="advChekout"> */}
          {/* <div className="col-md-7 col-lg-8"> */}
          <div className="col-md col-lg p-3">
            <form className="needs-validation" noValidate>
              <div className="row g-3 advCheckout">
                <h4 className="fw-bold">Billing address</h4>
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label fs-5">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    required
                    onChange={() => {
                      handleChangeValue();
                    }}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label fs-5">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label fs-5">
                    Email{" "}
                    <span className="text-body-secondary">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address htmlFor shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label fs-5">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                    onChange={() => {
                      handleChangeValue();
                    }}
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="same-address"
                  />
                  <label className="form-check-label" htmlFor="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="save-info"
                    onChange={() => {
                      handleChangeValue();
                    }}
                  />
                  <label className="form-check-label" htmlFor="save-info">
                    Save this information for next time
                  </label>
                </div>
              </div>

              <hr className="my-4" />

              {/* </div> */}
              <div className="advCheckout">
                <DatePickerComponent />
              </div>
              <hr className="my-4" />

              <div className="col-12 advCheckout">
                <label htmlFor="message" className="form-label fs-5">
                  <h4 className="fw-bold">Custom message for the cake:</h4>
                </label>
                <textarea
                  id="message"
                  className="form-control fs-5"
                  placeholder="Type your custom message here..."
                ></textarea>
              </div>

              <hr className="my-4" />

              <div className="col-12 advCheckout">
                <label htmlFor="instructions" className="form-label fs-5">
                  <h4 className="fw-bold">Additional instructions:</h4>
                </label>
                <textarea
                  id="instructions"
                  className="form-control fs-5"
                  placeholder="Additional instructions ..."
                ></textarea>
              </div>
              <hr className="my-4" />
              <div className="advCheckout">
                <h4 className="mb-3">Payment</h4>

                <div className="my-3">
                  <div className="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      checked
                      required
                      onChange={() => {
                        handleChangeValue();
                      }}
                    />
                    <label className="form-check-label" htmlFor="credit">
                      Credit card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                      onChange={() => {
                        handleChangeValue();
                      }}
                    />
                    <label className="form-check-label" htmlFor="debit">
                      Debit card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                      onChange={() => {
                        handleChangeValue();
                      }}
                    />
                    <label className="form-check-label" htmlFor="paypal">
                      PayPal
                    </label>
                  </div>
                </div>

                <div className="row gy-3">
                  <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                      onChange={() => {
                        handleChangeValue();
                      }}
                    />
                    <small className="text-body-secondary">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="cc-number" className="form-label">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                      onChange={() => {
                        handleChangeValue();
                      }}
                    />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="cc-expiration" className="form-label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required
                      onChange={() => {
                        handleChangeValue();
                      }}
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="cc-cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required
                      onChange={() => {
                        handleChangeValue();
                      }}
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />

              <button
                type="button"
                className="w-100 btn btn-primary btn-lg"
                // type="submit"
                // onClick={displayConfirmation}
                onClick={routeChange}
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default CheckoutComponent;
