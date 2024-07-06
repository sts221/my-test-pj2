import ProdPdf from './Our_Products.pdf';
const AboutUsComponent = () => {
  return (
    <div className="container">
      <div className="row">
        {/* <h6>Header</h6> */}
      </div>
      <div className="row">
        {/* <h6>Content </h6> */}
        <div
          className="col mainColLeft"
        >
          {/* <h4>COL 1</h4> */}
          <div className="row rowForCol">
            <div
              className="col subColLeftOne"
            >
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <h1 className="display-6">About us</h1>
                <h6>At Little Euro Bakery, we aim to offer you artisanal products that are true to French tradition. 
                  Here, you will find authentic, top-quality products, excellent service and a warm, welcoming atmosphere. 
                  An indispensable destination for all gourmands!</h6>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Our Mission
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <strong>Baking the Finest and Freshest for You.</strong>{" "}
                      For over 21 years we have produced an unparalleled variety of fine cakes, French pastries, breads, tarts, chocolates, 
                      and more. All items are freshly baked daily on the premises using only the finest ingredients. 
                      We do not use artificial additives and preservatives to prolong shelf life, neither do we use expensive over-packaging. 
                      Come visit us to see what a real scratch bakery should be!
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Our Staff
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <strong> Our experienced bakers and staff</strong>{" "}
                      try to ensure an adequate supply of baked goods to keep pace with consumers demand. 
                      In addition to our sales at the counter, we welcome wholesale accounts with restaurants, hotels and other institutions. 
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Our Suppliers
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      Any good baker knows that you have to have start with the right ingredients to create something special. 
                      We, at Little Euro Bakery, believe this to be true. We also know that we cannot do it alone. 
                      That is why we have teamed up with world-class suppliers of the finest 
                      quality ingredients to make the best possible products for you and your customers.
                      Here is a list of our highly-valued ingredient suppliers:
                       
                         Bruce Farm,  Arnprior ON
                         Dairy Central, Stittsville ON
                         BakeMark Canada, Mississauga ON
                       
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      Our ingredients
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFour"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <strong>All our sweet and savory products </strong>{" "}
                      are made from all-natural, clean label ingredients rest 
                      assured that you aren not sacrificing quality or the best-for-you option for flavor. 
                      Along with the classic bakery products, we also offers to our clients the gluten free, 
                      sugar free and vegan options.Most of our ingredients are from local farmers to help them to grow and strengthen to our communities. The ingredients are free of pesticide and hormone. Our products are GMO free and are  meticulously crafted using premium ingredients.

                       
                    </div>
                  </div>
                </div>

                
              </div>

              <div className="row buttonRow"></div>
            </div>
            <div
              className="col subColLeftTwo"
            >
              <div className="imageCont" style={{marginTop:"10px"}}>
                <img className="imageRight" src={require("./images/Home0.jpg")} alt="Paris"/>
              </div>
            </div>
            {/* <div className="col mx-2" style="background-color:rgb(193, 253, 255)">
            <h4>COL 13</h4>
          </div> */}
          </div>
        </div>
        {/* <div className="col mainColRight" style="background-color:rgb(193, 253, 255)">
        <h4>COL 2</h4>
      </div> */}
      </div>
      <div className="row rowFooter">
        <h5>Do you want to know more about our products?</h5>
        <h5>Please read detailed descriptions <a href = {ProdPdf} target = "_blank">here</a></h5> 
      </div>
    </div>
  );
};

export default AboutUsComponent;
