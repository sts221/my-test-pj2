import { useHistory } from "react-router-dom";
const ContactUsComponent = () => {
  const history = useHistory();
  const routeChange = (e) => {
    let button = e.target.id;
    switch (button) {
      case "submit":
        alert("Your message was successfully sent.");
        history.push("/");
        break;
      case "back":
        history.push("/");
        break;
    }
  };
  return (
    <div className="col-md col-lg p-3">
      <form className="was-validated">
        {" "}
        {/*//onSubmit={routeChange} */}
        <div className="row g-3 advCheckout">
          <h4 className="fw-bold">Contact us</h4>
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
              // onChange={() => {
              //   handleChangeValue();
              // }}
              // onChange={handleChangeValue}
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
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label fs-5">
              Email{" "}
              {/* <span className="text-body-secondary">(Required)</span> */}
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              required
            />
            <div className="invalid-feedback">
              Please enter a valid email address.
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label fs-5">
              Phone number
              <span className="text-body-secondary">(Optional)</span>
            </label>
            <input
              type="phone"
              className="form-control"
              id="phone"
              placeholder="613-123-4567"
            />
            <div className="invalid-feedback">
              Please enter a valid phone number.
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label fs-5">
              <h4 className="fw-bold">Your message:</h4>
            </label>
            <textarea
              id="message"
              className="form-control fs-5"
              placeholder="Type your custom message here..."
            ></textarea>
          </div>
          We will not sell or share your personal data information
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="same-address"
              required
            />
            <label className="form-check-label" htmlFor="same-address">
              I agree with the terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree with the terms before submitting.
            </div>
          </div>
          
          <div style={{ display: "inline-flex", justifyContent: "center" }}>
            <div className="col-3 mx-3">
              <button
                id="submit"
                className="w-100 btn btn-primary btn-lg"
                type="submit"
                onClick={routeChange}
              >
                Send
              </button>
            </div>
            <div className="col-3 mx-3" style={{}}>
              <button
                id="back"
                className="w-100 btn btn-primary btn-lg"
                type="submit"
                // onClick={displayConfirmation}
                onClick={routeChange}
              >
                Back to home page
              </button>
            </div>
          </div>
        </div>
        <hr className="my-4" />
      </form>
    </div>
  );
};

export default ContactUsComponent;
