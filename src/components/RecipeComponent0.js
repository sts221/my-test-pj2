import { useState } from "react";
import { useHistory } from "react-router-dom";

const RecipeComponent1 = () => {

  const history = useHistory();
  const routeChangeNext = () => {
    history.push("/recipe/step1");
  };
  
  return (  
    <div className="recipe">
    <div className="row">
      {/* <h6>Header</h6> */}
    </div>
    <div className="row">
      <div>
      <h1 className="display-6">List of ingredients</h1>
      </div>
      <div className="col mainColLeft ">
        <div className="row rowForCol">
          <div className="col subColLeftOne">
            <ol className="list-group list-group-numbered myList">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Content for list item one
                </div>
                <span className="badge text-bg-primary rounded-pill">1</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span className="badge text-bg-primary rounded-pill">2</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Content for list item xdfsdfg
                </div>
                <span className="badge text-bg-primary rounded-pill">3</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Content for list item four
                </div>
                <span className="badge text-bg-primary rounded-pill">4</span>
              </li>
            </ol>
            <div className="row buttonRow">
              {/* <button type="button" className="btn btn-primary buttonDown" >Back to step 1</button> */}
              <button type="button" className="btn btn-primary buttonDown" onClick={routeChangeNext}>START</button>
            </div>
          </div>
          <div className="col subColLeftTwo">
            <div className="imageCont">
              <img className="imageRight" src={require("./images/DonutsIngredients.jpg")} alt="Paris"/>
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
 
export default RecipeComponent1;