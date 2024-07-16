const LocationComponent = () => {
  // const resizeIframe = (obj) => {
  //   obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  //   obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  // }
  return (
    <>
      <section id="locations">
        <div className="container-fluid text-center ">
          <div className="row ch-row-header mx-3 p-3">
            <h3 className="h3">Contact us and Directions </h3>
          </div>
          {/* One row CONTACTS htmlFor two main columns ch-row-contact
      One form htmlFor both left and right buttons */}
          <form action="#" className="was-validated advCheckout">
            <div className="row ch-row-contact mx-3 p-3">
              {/* Main column left: ch-col-left */}
              <div className="col ch-col-left">
                <div className="row">
                  <div className="col ch-col-left-label text-center">
                    <p>
                      <b>Contact us </b>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col ch-col-left-label text-center">
                    <p>
                      To send an enquiry please provide the information below
                    </p>
                  </div>
                </div>

                {/* Row htmlFor label-text: ch-col-left-label/ch-col-left-text */}
                <div className="row">
                  <div className="col ch-col-left-label text-end">
                    <label htmlFor="fname">First name: </label>
                  </div>
                  <div className="col ch-col-left-text text-start">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                </div>

                {/* Row htmlFor label-text: ch-col-left-label/ch-col-left-text */}
                <div className="row">
                  <div className="col ch-col-left-label text-end">
                    <label htmlFor="lname">Last name: </label>
                  </div>
                  <div className="col ch-col-left-text text-start">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lname"
                      placeholder="Last Name"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                {/* Row htmlFor label-text: ch-col-left-label/ch-col-left-text*/}
                <div className="row">
                  <div className="col ch-col-left-label text-end">
                    <label htmlFor="email">Email: </label>
                  </div>
                  <div className="col ch-col-left-text text-start">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address.
                    </div>
                  </div>
                </div>
                {/* Row htmlFor label-text: ch-col-left-label/ch-col-left-text */}
                <div className="row">
                  <div className="col ch-col-left-label text-end">
                    <label htmlFor="phone">Phone number: </label>
                  </div>
                  <div className="col ch-col-left-text text-start">
                    <input
                      className="form-control"
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col ch-col-left-label text-end">
                    <label htmlFor="description">Your message: </label>
                  </div>
                  <div className="col ch-col-left-label text-center">
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      placeholder="Please type your message here:"
                      rows="4"
                      cols="52"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your message before submitting.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col ch-col-left-label text-end">
                    <p>
                      We will not sell or share your personal data information.
                    </p>
                    <input
                      type="checkbox"
                      className="mx-2"
                      id="agreeterms"
                      name="agreeterms"
                      value="agreed"
                      required
                    />                   
                    <label htmlFor="agreeterms">
                      I agree with the terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      Please enter your message before submitting.
                    </div>
                    <br />
                  </div>
                </div>
              </div>


              {/* Main column Right: ch-col-right */}
              <div className="col ch-col-right">
                {/* <form action="https://www.google.com/maps" method="get"> */}
                  <iframe style={{height: "100%", width:"100%", borderRadius:"10px"}}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5608.31064459772!2d-75.76390169999999!3d45.3456768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0722df7c775f%3A0x82f2d3b7ba2b8ea2!2s100%20Constellation%20Dr%2C%20Nepean%2C%20ON%20K2G%206J8!5e0!3m2!1sen!2sca!4v1717466542440!5m2!1sen!2sca"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    // height = {`obj.contentWindow.document.documentElement.scrollHeight + 'px'`}
                  ></iframe>
                {/* </form> */}
              </div>
            </div>
            {/* Row htmlFor the SUBMIT buttons */}
            <div className="row ch-row-contact-submit mx-3">
              <div className="col ch-col-left">
                <input
                  
                  type="submit"
                  className="btn btn-lg btn-primary my-1"
                  id="ch-col-left-contact-submit"
                  value="Submit "
                />
              </div>

              <div className="col ch-col-right">
                <a href="https://www.google.com/maps">
                  <button
                    className="btn btn-lg btn-primary my-1"
                    id="ch-col-right-contact-submit"
                  >
                    Get Directions
                  </button>
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default LocationComponent;
