import DatePickerComponent from "./DatePickerComponent";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./checkoutComponent.css";

const CheckoutComponent = ({ cartProducts }) => {
  const [startDate, setStartDate] = useState(new Date());
  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  const displayConfirmation = (e) => {
    e.stopPropagation();
    alert("Confirmation number: 123456789");
  }

  return (
    <>
      <div className="container">
        <main>
          <div class="row" style={{ border: "2px solid red" }}>
            
              {cartProducts.map((item, i) => (
                <div key={i} className="col-1" style={{ margin: "10px" }}>
                  <h6> {item.product.name}</h6>
                  <img
                    className="item_img"
                    src={require(`${item.product.image}`)}
                    alt={item.product.name}
                    style={{width:"100px"}}
                  />
                  <p>Price: ₹{item.product.price}</p>
                </div>
              ))}
            
          </div>

          {/* <div className="col-md-7 col-lg-8"> */}
          <div className="col-md col-lg p-3">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label for="firstName" className="form-label fs-5">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label for="lastName" className="form-label fs-5">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label for="email" className="form-label fs-5">
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
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label for="address" className="form-label fs-5">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                />
                <label className="form-check-label" for="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="save-info"
                />
                <label className="form-check-label" for="save-info">
                  Save this information for next time
                </label>
              </div>

              <hr className="my-4" />

              <DatePickerComponent />

              <div className="col-12">
                <label for="message" className="form-label fs-5">
                  Custom message for the cake:{" "}
                </label>
                <textarea
                  id="message"
                  className="form-control fs-5"
                  placeholder="Type your custom message here..."
                ></textarea>
              </div>

              <hr className="my-4" />

              <div className="col-12">
                <label for="instructions" className="form-label fs-5">
                  Additional instructions:{" "}
                </label>
                <textarea
                  id="instructions"
                  className="form-control fs-5"
                  placeholder="Additional instructions ..."
                ></textarea>
              </div>
              <hr className="my-4" />
              <hr className="my-4" />

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
                  />
                  <label className="form-check-label" for="credit">
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
                  />
                  <label className="form-check-label" for="debit">
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
                  />
                  <label className="form-check-label" for="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label for="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small className="text-body-secondary">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label for="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label for="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div className="col-md-3">
                  <label for="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={displayConfirmation}>
                Continue to checkout 121
              </button>
            </form>
          </div>

          {/* <form className="checkout">
            <div className="item_checkout full-width">
              {cartProducts.map((item, i) => (
                <div key={i} className="item" style={{ margin: "10px" }}>
                  <h2 className="item_name"> {item.product.name}</h2>
                  <img
                    className="item_img"
                    src={item.product.image}
                    alt={item.product.name}
                  />
                  <p>Price: ₹{item.product.price}</p>
                </div>
              ))}
            </div>
            <div>
              <label for="name">Name</label>
              <input id="name" type="text" />
            </div>
            <div>
              <label for="email">Email</label>
              <input id="email" type="email" />
            </div>
            <DatePickerComponent />
            <div>
              <label for="message" className="large-label">
                Custom message for the cake:{" "}
              </label>
              <textarea id="message"></textarea>
            </div>

            <div>
              <label for="message" className="large-label">
                Additional instructions:{" "}
              </label>
              <textarea id="message"></textarea>
            </div>

            <div className="full-width">
              <button type="submit">Send Response</button>
              <button type="reset">Clear Form</button>
            </div>
          </form> */}
        </main>
      </div>
    </>
  );
};

export default CheckoutComponent;
