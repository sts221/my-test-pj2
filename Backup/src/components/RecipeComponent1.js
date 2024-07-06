import { useState } from "react";
import { useHistory } from "react-router-dom";

const RecipeComponent1 = () => {

  const history = useHistory();
  const routeChangeNext = () => {
    history.push("/recipe/step2");
  };

  const routeChangeBack = () => {
    history.push("/recipe/step0");
  };
  
  return (  
    <div className="recipe">
    <div className="row">
      {/* <h6>Header</h6> */}
    </div>
    <div className="row">
      <div>
      <h1 className="display-6">Prepare the dough</h1>
      </div>
      <div className="col mainColLeft ">
        <div className="row rowForCol">
          <div className="col subColLeftOne">
            <ol className="list-group list-group-numbered myList">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Prepare the dough:</div>
                  Whisk the warm milk, yeast, and 1 Tablespoon sugar together in the bowl of your stand mixer. 
                  Loosely cover and allow to sit for 5 to 10 minutes until foamy and frothy on top.
                  Add the remaining sugar, the eggs, butter, vanilla, nutmeg, salt, and 2 cups (about 250g) flour. 
                  Beat on low speed for 1 minute.  
                </div>
                <span className="badge text-bg-primary rounded-pill">1</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Knead the dough:</div>
                  The dough comes together with a mixer. You can also make the dough by hand, 
                  but it requires a bit of arm muscle. 
                  After the dough comes together in the mixing bowl, knead it for 5 to 7 minutes. 
                </div>
                <span className="badge text-bg-primary rounded-pill">2</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Let the dough rise:</div>
                  Lightly grease a large bowl with oil or nonstick spray. 
                  Place the dough in the bowl, turning it to coat all sides in the oil. 
                  Cover the bowl and allow the dough to rise in a relatively warm environment for 1.5 to 2 hours or until double in size
                </div>
                <span className="badge text-bg-primary rounded-pill">3</span>
              </li>
            </ol>
            <div className="row buttonRow">
              <button type="button" className="btn btn-primary buttonDown" onClick={routeChangeBack}>Back to Ingredients</button>
              <button type="button" className="btn btn-primary buttonDown" onClick={routeChangeNext}>Go to step 2 </button>
            </div>
          </div>
          <div className="col subColLeftTwo">
            <div className="imageCont">
              <img className="imageRight" src={require("./images/Dough1.jpg")} alt="Paris"/>
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