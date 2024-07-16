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
            <h3 className="h3">Get Directions </h3>
          </div>
          {/* One row CONTACTS htmlFor two main columns ch-row-contact
            One form htmlFor both left and right buttons */}
            <div className="row ch-row-contact mx-3 p-3">

              {/* Main column Right: ch-col-right */}
              <div className="col ch-col-right advCheckout" style={{height:"500px"}}>
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
        </div>
      </section>
    </>
  );
};
export default LocationComponent;
