import { useState } from "react";
import { useHistory } from "react-router-dom";

const RecipeComponent3 = () => {

  const history = useHistory();
  const routeChangeNext = () => {
    history.push("/recipe/step4");
  };

  const routeChangeBack = () => {
    history.push("/recipe/step2");
  }


  return (  
    <div className="recipe">
    <div className="row">
      {/* <h6>Header</h6> */}
    </div>
    <div className="row">
    <h1 className="display-6">Fry the doughnuts</h1>
      <div className="col mainColLeft ">
        <div className="row rowForCol">
          <div className="col subColLeftOne">
            <ol className="list-group list-group-numbered myList">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Prepare the oil:</div>
                  Using a heavy-bottomed pot or Dutch oven and an oil thermometer, 
                  heat vegetable oil to 375°F (191°C). 
                </div>
                <span className="badge text-bg-primary rounded-pill">1</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Fry the doughnuts:</div>
                  Working with 2 or 3 doughnuts at a time, cook for 1 minute on each side. 
                  Carefully remove from the oil and place onto prepared rack. Repeat with remaining doughnuts.
                </div>
                <span className="badge text-bg-primary rounded-pill">2</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Let them rest:</div>
                  Carefully remove with a metal slotted spatula or metal slotted spoon. 
                  Be sure to lower stove temperature if oil temperature is rising; 
                  you want it to stay at 375°F (191°C). 
                  Wear kitchen gloves if oil is splashing. Place fried doughnuts onto prepared rack and let them rest. 
                </div>
                <span className="badge text-bg-primary rounded-pill">3</span>
              </li>
            </ol>
            <div className="row buttonRow">
              <button type="button" className="btn btn-primary buttonDown" onClick={routeChangeBack}>Back to step 2</button>
              <button type="button" className="btn btn-primary buttonDown" onClick={routeChangeNext}> Go to step 4 </button>
            </div>
          </div>
          <div className="col subColLeftTwo">
            <div className="imageCont">
              <img className="imageRight" src={require("./images/FryingDonuts4.jpg")} alt="Paris"/>
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