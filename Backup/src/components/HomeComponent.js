import ProdPdf from './Our_Products.pdf';
const HomeComponent = () => {
  return (
    <>
      {/* <div>
      <h1>This is the Home page</h1>
    </div> */}
      {/* <div className="container"> */}
        <div className="row px-3">
          {/* <div className="row"> */}
            <div className="col">
              <div id="carouselExampleIndicators" className="carousel slide m-auto">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={require("./images/Home11.jpg")} className="d-block slide" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={require("./images/Home9.jpg")} className="d-block slide" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={require("./images/Home12.jpg")} className="d-block slide" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="row py-4 px-3 mx-1">
                  <div className="col p-0" style={{ textAlign: "right" }}>
                    <h5>Address:</h5>
                  </div>
                  <div className="col" style={{ textAlign: "left" }}>
                    <h5>100 Kent Street</h5>
                    <h5>Ottawa, ON</h5>
                    <h5>K1K 2S2</h5>
                  </div>
                  <div className="col" style={{ textAlign: "right" }}>
                    <h5>Email: </h5>
                    <h5>Phone: </h5>
                  </div>
                  <div className="col" style={{ textAlign: "left" }}>
                    <h5>bakery@bakery.com</h5>
                    <h5>(613) 123-4567</h5>
                  </div>
                  <div className="col" style={{ textAlign: "right" }}>
                    <h5>Hours: </h5>
                  </div>
                  <div className="col" style={{ textAlign: "left" }}>
                    <h5>Mon-Fri: 9:00-17:00</h5>
                    <h5>Sat:     9:00-14:00</h5>
                    <h5>Sun:     closed</h5>
                  </div>
                </div>
                <div className="row py-4 px-3 mx-1" style={{textAlign:"center"}}>
                  <h5>Do you want to know more about our products?  </h5>
                  <h5>Please read detailed descriptions <a href = {ProdPdf} target = "_blank">here</a>
                  </h5>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      {/* </div> */}
    </>
  );
};

export default HomeComponent;
