import { useState } from "react";
import { useHistory } from "react-router-dom";

const RecipeComponent2 = () => {

  const history = useHistory();
  const routeChangeNext = () => {
    history.push("/recipe/step3");
  };

  const routeChangeBack = () => {
    history.push("/recipe/step1");
  }
  
  return (  
    <div className="recipe">
    <div className="row">
      {/* <h6>Header</h6> */}
    </div>
    <div className="row">
    <h1 className="display-6">Shape Doughnuts</h1>
      <div className="col mainColLeft ">
        <div className="row rowForCol">
          <div className="col subColLeftOne">
            <ol className="list-group list-group-numbered myList">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Roll & cut into doughnuts:</div>
                  When the dough is ready, punch it down to release the air. 
                  Remove dough from the bowl and turn it out onto a lightly floured surface. 
                  Using a rolling pin, roll the dough out until it is 1/2 inch thick. 
                  Using a 3 to 3.5-inch doughnut cutter, cut into doughnuts. 
                  Re-roll the scraps and cut more.
                </div>
                <span className="badge text-bg-primary rounded-pill">1</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Let the doughnuts rest:</div>
                  Line 1 or 2 baking sheets with parchment paper or silicone baking mats. 
                  Place doughnuts and doughnut holes on each. Loosely cover and allow to rest for 30 minutes as you heat the oil. 
                  They will rise a bit as they rest. Place a cooling rack over another baking sheet.
                </div>
                <span className="badge text-bg-primary rounded-pill">2</span>
              </li>
              
            </ol>
            <div className="row buttonRow">
              <button type="button" className="btn btn-primary buttonDown" onClick={routeChangeBack}>Back to step 1</button>
              <button type="button" className="btn btn-primary buttonDown" onClick={routeChangeNext}>Go to step 3 </button>
            </div>
          </div>
          <div className="col subColLeftTwo">
            <div className="imageCont">
              <img className="imageRight" src={require("./images/CuttingDough3_d.jpg")} alt="Paris"/>
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
 
export default RecipeComponent2;