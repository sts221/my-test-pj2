import { useState } from "react";
import { useHistory } from "react-router-dom";

const RecipeComponent3 = () => {

  const history = useHistory();
  const routeChangeNext = () => {
    history.push("/");
  };

  const routeChangeBack = () => {
    history.push("/recipe/step3");
  }


  return (  
    <div className="recipe">
    <div className="row">
      {/* <h6>Header</h6> */}
    </div>
    <div className="row">
    <h1 className="display-6">Glaze the doughnuts</h1>
      <div className="col mainColLeft ">
        <div className="row rowForCol">
          <div className="col subColLeftOne">
            <ol className="list-group list-group-numbered myList">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Make the glaze:</div>
                  Make a simple 3-ingredient glaze: just milk or cream, confectionery sugar, and vanilla extract. 
                  This part couldn not be easier; literally just whisk the 3 ingredients together. 
                </div>
                <span className="badge text-bg-primary rounded-pill">1</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Glaze the doughnuts:</div>
                  Dunk each side of the warm doughnuts into the glaze. The glaze will set in about 20 minutes.
                </div>
                <span className="badge text-bg-primary rounded-pill">2</span>
              </li>
              
            </ol>
            <div className="row buttonRow">
              <button type="button" className="btn btn-primary buttonDown" onClick={routeChangeBack}>Back to step 3</button>
              <button type="button" className="btn btn-primary buttonDown" onClick={routeChangeNext}> Done! </button>
            </div>
          </div>
          <div className="col subColLeftTwo">
            <div className="imageCont">
              <img className="imageRight" src={require("./images/GlazeDonuts5.jpg")} alt="Paris"/>
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
    <div className="row">
      <h6>Footer</h6>
    </div>
  </div>

  );
}
 
export default RecipeComponent3;