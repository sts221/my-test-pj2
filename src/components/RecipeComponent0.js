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
      <h1>Homemade Glazed Doughnuts</h1>
      <h1 className="display-6">List of ingredients</h1>
      </div>
      <div className="col mainColLeft ">
        <div className="row rowForCol">
          <div className="col subColLeftOne">
            <ol className="list-group list-group-numbered myList">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Dough Ingredients:</div>
                     <ul>
                       <li>1 cup (240ml) butter milk, warmed to about 110°F (43°C)</li>
                       <li>2 and 1/4 teaspoons (7g) baking soda </li>
                       <li>1 and 1/2 teaspoons (4g) baking powder </li>
                       <li>1/3 cup (65g) granulated sugar, divided</li>
                       <li>2 large eggs </li>
                       <li>6 Tablespoons (85g) unsalted butter </li>
                       <li>2 Tablespoons (30g) lard </li>
                       <li>1 teaspoon pure vanilla extract </li>
                       <li>1/4 teaspoon ground nutmeg</li>
                       <li>1/2 teaspoon salt</li>
                       <li>4 cups (500g) all-purpose flour </li>
                       <li>1 to 2 quarts vegetable oil </li>
                     </ul>
                      
                      
                </div>
                <span className="badge text-bg-primary rounded-pill">1</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Glaze Ingredients:</div>
                  <ul>
                       <li>2 cups (240g) confectioners sugar, sifted</li>
                       <li>1/3 cup (80ml) heavy cream, half-and-half, or whole milk </li>
                       <li>1/2 teaspoon pure vanilla extract</li>
                  </ul>
                </div>
                <span className="badge text-bg-primary rounded-pill">2</span>
              </li>
 
            </ol>
            <div className="row buttonRow">
              {/* <button type="button" className="btn btn-primary buttonDown" >Back to step 1</button> */}
              <button type="button" className="btn btn-primary buttonDown" onClick={routeChangeNext}>START</button>
            </div>
          </div>
          <div className="col subColLeftTwo">
            <div className="imageCont">
              <img className="imageRight" src={require("./images/DonutsIngredients2.jpg")} alt="Ingredients"/>
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