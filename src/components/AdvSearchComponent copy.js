import { useState, useEffect } from "react";
import SearchComponent from "./SearchComponent";

const AdvSearchComponent = ({
  filteredProducts,
  advFilteredCriteria,
  addProductToCartFunction,
  cartProducts,
  setCartProducts,
  deleteProductFromCartFunction,
  totalAmountCalculationFunction,
}) => {
  const [advFilteredProducts, setAdvFilteredProducts] = useState([]);
  const [subCategories, setSubcategories] = useState([]);
  const [subIngredients, setSubIngredients] = useState([]);

  let filteredResults = [];
  let category = "";
  let subCategory = "";
  let ingredient = "";
  let price = "";
  let filterCriteria = {};

  useEffect(() => {
    // Setup the initial products on SearchComponent (all of them)
    setAdvFilteredProducts(filteredProducts);
  },[])

  function handleCategory(e) {
    category = document.getElementById("selCategory").value;
    // console.log("The category is ", category);
    // filterCriteria = { category: category };
    filterCriteria.category = category;
    // setFilterCriteria({ category: category });
    console.log("FILTER CRITERIA: ", filterCriteria);

    // Clear the subcategory
    subCategory = "";
    let subCat = [];
    // Get the filteredResults based on category (cake, patries, etc)
    filteredResults = advFilteredCriteria(filterCriteria);
    setAdvFilteredProducts(filteredResults);
    
    // Get the subcategories for the specific category
    filteredResults.forEach((item) => {
      if (subCat.indexOf(item.subcategory) === -1) {
        subCat.push(item.subcategory);
      }
      // console.log(subCat);
    });
    // console.log("Subcategories:", subCat);
    // subCategories is an array. Will populate the dropdown
    setSubcategories(subCat);
    console.log("Filtered results: ", filteredResults);

    // display the next select list
  }

  function handleSubCategory(e) {
    subCategory = document.getElementById("selSubCategory").value;
    category = document.getElementById("selCategory").value;
    filterCriteria.category = category;
    filterCriteria.subcategory =subCategory;
    //console.log("This is the filtered criteria: ", filterCriteria);
    filteredResults = advFilteredCriteria(filterCriteria);
    //console.log("These are the filtered results: " , filteredResults);
    setAdvFilteredProducts(filteredResults);
    
    // Get the ingredients for the selection
    let subIng = [];
    filteredResults.forEach((item) => {
      for (let key in item.ingred) {
        if (item.ingred.hasOwnProperty(key)) {
          if (subIng.indexOf(item.ingred[key]) === -1) {
            subIng.push(item.ingred[key]);
          };
        };
      };
    });
    console.log("Filtered ingredients: ", subIng);
    setSubIngredients(subIng);
  }

  function handleIngredient(e) {
    subCategory = document.getElementById("selSubCategory").value;
    category = document.getElementById("selCategory").value;
    ingredient = document.getElementById("selIngredient").value;
    filterCriteria.category = category;
    filterCriteria.subcategory =subCategory;
    filterCriteria.ingred = ingredient;
    //console.log("This is the filtered criteria: ", filterCriteria);
    filteredResults = advFilteredCriteria(filterCriteria);
    //console.log("These are the filtered results: " , filteredResults);
    setAdvFilteredProducts(filteredResults);

    // PRICE
    // Get the price for the selection
  }

  return (
    <>
      <div className="container">
        
        <div className="row searchCriteria">
          {/* CATEGORY */}
          <div className="col-3">
            <div>
              <select
                className="form-select form-select-lg mb-3 my-2"
                aria-label=".form-select-lg"
                id="selCategory"
                onChange={handleCategory}
              >
                <option defaultValue>Cake category:</option>
                <option value="Cake">Cake</option>
                <option value="Pastries">Pastries</option>
                <option value="Tarts">Tarts</option>
                <option value="Breads">Breads</option>
                <option value="Special">Special Events</option>
                <option value="Restrictions">Dietary Restriction</option>
                <option value="Nothing" disabled></option>
                <option value="All">All products</option>
              </select>
            </div>
          </div>
          {/* SUBCATEGORY */}
          <div className="col-3">
            <div>
              <select
                className="form-select form-select-lg mb-3 my-2"
                aria-label=".form-select-lg"
                id="selSubCategory"
                onChange={handleSubCategory}
              >
                <option key="12" value="Select category">Select type</option>
                {subCategories.map((sub, indx) => (
                  <>
                     <option key={indx} value={sub}>{sub}</option>
                  </>
                ))}
              </select>
            </div>
          </div>
          {/* INGREDIENTS */}
          <div className="col-3">
            <div>
              <select
                className="form-select form-select-lg mb-3 my-2"
                aria-label=".form-select-lg"
                id="selIngredient"
                onChange={handleIngredient}
              >
                <option key="12" value="Select ingredient">Ingredient</option>
                {subIngredients.map((sub, indx) => (
                  <>
                     <option key={indx} value={sub}>{sub}</option>
                  </>
                ))}
              </select>
            </div>
          </div>
          {/* Price */}
          <div className="col-3">
            <div>
              <select
                className="form-select form-select-lg mb-3 my-2"
                aria-label=".form-select-lg"
                id="selPrice"
                // onChange={handlePrice}
              >
                <option value="Select price">Select price</option>
                <option value="Select price">Select price</option>
                <option value="Select price">Select price</option>
                <option value="Select price">Select price</option>
                <option value="Select price">Select price</option>
                <option value="Select price">Select price</option>      
              </select>
            </div>
          </div>
        </div>
        <div className="row">  
          <SearchComponent 
            filteredProducts={advFilteredProducts} 
            addProductToCartFunction={addProductToCartFunction}
            cartProducts={cartProducts} 
            setCartProducts={setCartProducts} 
            deleteProductFromCartFunction={deleteProductFromCartFunction} 
            totalAmountCalculationFunction={totalAmountCalculationFunction}
          />
        </div>
      </div>
    </>
  );
};

export default AdvSearchComponent;
