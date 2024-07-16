import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import {
  HashRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Menu from "./components/Menu";
import HomeComponent from "./components/HomeComponent";
import SearchComponent from "./components/SearchComponent";
import UserCartComponent from "./components/UserCartComponent";
import CheckoutComponent from "./components/CheckoutComponent";
import AdvancedSearchComponent from "./components/AdvancedSearchComponent";
import RecipeComponent0 from "./components/RecipeComponent0";
import RecipeComponent1 from "./components/RecipeComponent1";
import RecipeComponent2 from "./components/RecipeComponent2";
import RecipeComponent3 from "./components/RecipeComponent3";
import RecipeComponent4 from "./components/RecipeComponent4";
import AboutUsComponent from "./components/AboutUsComponent";
import AdvSearchComponent from "./components/AdvSearchComponent";
import { useTranslation } from "react-i18next";
import Translate from "./components/Translate";
import ContactUsComponent from "./components/ContactUsComponent";
import LocationComponent from "./components/LocationComponent";
/* Language support */

function App() {
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     subcategory: "Mousse",
  //     name: "Chocolate Mousse",
  //     price: 499,
  //     image: "./images/pavlova.png",
  //   },
  //   {
  //     id: 2,
  //     subcategory: "Mousse",
  //     name: "Strawverry mousse",
  //     price: 699,
  //     image: "./images/pavlova.png",
  //   },
  //   {
  //     id: 3,
  //     category: "Mousse11",
  //     name: "GFG Hoodie",
  //     price: 799,
  //     image: "./pavlova.png",
  //   },
  //   {
  //     id: 4,
  //     category: "Mousse1",
  //     name: "Chocolate Mousse",
  //     price: 499,
  //     image: "./pavlova.png",
  //   },
  //   {
  //     id: 5,
  //     category: "Mousse1",
  //     name: "Strawverry mousse",
  //     price: 699,
  //     image: "./pavlova.png",
  //   },
  //   {
  //     id: 6,
  //     category: "Mousse1",
  //     name: "Chocolate Mousse",
  //     price: 499,
  //     image: "./pavlova.png",
  //   },
  //   {
  //     id: 7,
  //     category: "Mousse1",
  //     name: "Strawverry mousse",
  //     price: 699,
  //     image: "./pavlova.png",
  //   },
  // ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      category: "Cake",
      subcategory: "Mousse",
      name: "Chocolate Mousse",
      price: 29,
      ingred: {
        ingredient1: "Chocolate",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "dairy",
      },
      image: "./images/Chocolate_Mousse.jpg",
    },
    {
      id: 2,
      category: "Cake",
      subcategory: "Mousse",
      name: "Mango Mousse",
      price: 29,
      ingred: {
        ingredient1: "Mango",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "dairy",
      },
      image: "./images/Mango_Mousse.jpg",
    },
    {
      id: 3,
      category: "Cake",
      subcategory: "Mousse",
      name: "Strawberry Mousse",
      price: 29,
      ingred: {
        ingredient1: "Strawberry",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "dairy",
      },
      image: "./images/Berries_Mousse.jpg",
    },
    {
      id: 4,
      category: "Cake",
      subcategory: "Cheese Cake",
      name: "Strawberry Cheese Cake",
      price: 29,
      ingred: {
        ingredient1: "Strawberry",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "cheese",
      },
      image: "./images/Berries_CheeseCake.jpeg",
    },
    {
      id: 5,
      category: "Cake",
      subcategory: "Cheese Cake",
      name: "Chocolate Cheese Cake",
      price: 29,
      ingred: {
        ingredient1: "Chocolate",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "cheese",
      },
      image: "./images/Chocolate_CheeseCake.jpg",
    },
    {
      id: 6,
      category: "Cake",
      subcategory: "Cheese Cake",
      name: "Vanilla Cheese Cake",
      price: 29,
      ingred: {
        ingredient1: "Vanilla",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "cheese",
      },
      image: "./images/Vanilla_CheeseCake.jpg",
    },
    {
      id: 7,
      category: "Cake",
      subcategory: "Buttercream Cake",
      name: "Chocolate Buttercream Cake",
      price: 29,
      ingred: {
        ingredient1: "Chocolate",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "butter",
      },
      image: "./images/Chocolate_Buttercream.jpeg",
    },
    {
      id: 8,
      category: "Cake",
      subcategory: "Buttercream Cake",
      name: "Vanilla Buttercream Cake",
      price: 29,
      ingred: {
        ingredient1: "Vanilla",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "butter",
      },
      image: "./images/Vanilla_Buttercream.jpeg",
    },
    {
      id: 9,
      category: "Cake",
      subcategory: "Buttercream Cake",
      name: "Mocha Buttercream Cake",
      price: 29,
      ingred: {
        ingredient1: "Coffe",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "butter",
      },
      image: "./images/Mocha_Buttercream.jpg",
    },
    {
      id: 10,
      category: "Pastries",
      subcategory: "Croissant",
      name: "Chocolate Croissants",
      price: 3.5,
      ingred: {
        ingredient1: "Chocolate",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "butter",
      },
      image: "./images/CroissantChocolate.jpg",
    },
    {
      id: 11,
      category: "Pastries",
      subcategory: "Croissant",
      name: "Almonds Croissants",
      price: 3.5,
      ingred: {
        ingredient1: "Almonds",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "butter",
      },
      image: "./images/CroissantAlmond.jpg",
    },
    {
      id: 12,
      category: "Pastries",
      subcategory: "Croissant",
      name: "Plain Croissants",
      price: 3,
      ingred: {
        ingredient1: "milk",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "butter",
      },
      image: "./images/CroissantPlain.jpg",
    },
    {
      id: 13,
      category: "Pastries",
      subcategory: "Turnover",
      name: "Apple Turnover",
      price: 4,
      ingred: {
        ingredient1: "Apple",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "butter",
      },
      image: "./images/TurnoverApple.jpeg",
    },
    {
      id: 14,
      category: "Pastries",
      subcategory: "Turnover",
      name: "Blueberry Turnover",
      price: 4,
      ingred: {
        ingredient1: "Blueberry",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "butter",
      },
      image: "./images/TurnoverBlueberry.jpg",
    },
    {
      id: 55,
      category: "Pastries",
      subcategory: "Turnover",
      name: "Apricot Turnover",
      price: 4,
      ingred: {
        ingredient1: "Apricot",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "butter",
      },
      image: "./images/TurnoverApricot.jpg",
    },
    {
      id: 15,
      category: "Pastries",
      subcategory: "Brioche",
      name: "Plain Brioche",
      price: 4,
      ingred: {
        ingredient1: "Milk",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "butter",
      },
      image: "./images/BriochePlain.jpg",
    },
    {
      id: 16,
      category: "Pastries",
      subcategory: "Brioche",
      name: "Chocolate Brioche",
      price: 4,
      ingred: {
        ingredient1: "Chocolate",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "butter",
      },
      image: "./images/BriocheChocolate.jpg",
    },
    {
      id: 17,
      category: "Pastries",
      subcategory: "Brioche",
      name: "Vanilla Brioche",
      price: 4,
      ingred: {
        ingredient1: "Vanilla",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "butter",
      },
      image: "./images/BriocheVanilla.jpg",
    },
    {
      id: 18,
      category: "Pastries",
      subcategory: "Muffin",
      name: "Chocolate Muffin",
      price: 3,
      ingred: {
        ingredient1: "Chocolate",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/MuffinChocolate.jpg",
    },
    {
      id: 19,
      category: "Pastries",
      subcategory: "Muffin",
      name: "Blueberry Muffin",
      price: 3,
      ingred: {
        ingredient1: "Blueberry",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/MuffinBlueberry.jpg",
    },
    {
      id: 20,
      category: "Pastries",
      subcategory: "Muffin",
      name: "Almond Muffin",
      price: 3,
      ingred: {
        ingredient1: "Almond",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/MuffinAlmond.jpg",
    },
    {
      id: 21,
      category: "Tarts",
      subcategory: "TartsSweet",
      name: "Chocolate Tart",
      price: 3,
      ingred: {
        ingredient1: "Chocolate",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/ChocolateTart.jpg",
    },
    {
      id: 22,
      category: "Tarts",
      subcategory: "TartsSweet",
      name: "Raspberry Tart",
      price: 3,
      ingred: {
        ingredient1: "Raspberry",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/RaspberryTart.jpg",
    },
    {
      id: 23,
      category: "Tarts",
      subcategory: "TartsSweet",
      name: "Pecan Tart",
      price: 3,
      ingred: {
        ingredient1: "Pecan",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/PecanTart.jpg",
    },
    {
      id: 24,
      category: "Tarts",
      subcategory: "TartsSavory",
      name: "Spinach Tart",
      price: 3,
      ingred: {
        ingredient1: "Spinach",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/SpinachTart.jpg",
    },
    {
      id: 25,
      category: "Tarts",
      subcategory: "TartsSavory",
      name: "Onion Tart",
      price: 3,
      ingred: {
        ingredient1: "Onion",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/OnionTart.jpg",
    },
    {
      id: 26,
      category: "Tarts",
      subcategory: "TartsSavory",
      name: "Leek Tart",
      price: 3,
      ingred: {
        ingredient1: "Leek",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/LeekTart.jpg",
    },
    {
      id: 27,
      category: "Special Events",
      subcategory: "Weddings",
      name: "White Orchid",
      price: 50,
      ingred: {
        ingredient1: "vanilla",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/WhiteOrchid.jpg",
    },
    {
      id: 28,
      category: "Special Events",
      subcategory: "Weddings",
      name: "Pink Imperial",
      price: 55,
      ingred: {
        ingredient1: "Raspberry",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/PinkImperial.jpg",
    },
    {
      id: 29,
      category: "Special Events",
      subcategory: "Weddings",
      name: "White and Red Roses",
      price: 55,
      ingred: {
        ingredient1: "Chocolate",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/WhiteRedRoses.jpg",
    },
    {
      id: 30,
      category: "Special Events",
      subcategory: "Birthdays",
      name: "Birth Day Chocolate",
      price: 40,
      ingred: {
        ingredient1: "Chocolate",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/BirthDayChocolate.jpg",
    },
    {
      id: 31,
      category: "Special Events",
      subcategory: "Birthdays",
      name: "Birth Day 18",
      price: 45,
      ingred: {
        ingredient1: "Vanilla",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/Birthday18.jpg",
    },
    {
      id: 32,
      category: "Special Events",
      subcategory: "Birthdays",
      name: "Birth Day Strawberry",
      price: 40,
      ingred: {
        ingredient1: "Strawberry",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/BirthDayStrawberry.jpg",
    },
    {
      id: 33,
      category: "Special Events",
      subcategory: "Graduations",
      name: "Vanilla Graduation",
      price: 43,
      ingred: {
        ingredient1: "Vanilla",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/GraduationVanilla.jpg",
    },
    {
      id: 34,
      category: "Special Events",
      subcategory: "Graduations",
      name: "Strawberry Graduation",
      price: 49,
      ingred: {
        ingredient1: "Strawberry",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/GraduationStrawberry.jpg",
    },
    {
      id: 35,
      category: "Special Events",
      subcategory: "Graduations",
      name: "Chocolate Graduation",
      price: 43,
      ingred: {
        ingredient1: "Chocolate",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "milk",
      },
      image: "./images/GraduationChocolate.jpg",
    },
    {
      id: 36,
      category: "Dietary Restriction",
      subcategory: "GlutenFree",
      name: "Mango Gluten Free",
      price: 43,
      ingred: {
        ingredient1: "Mango",
        ingredient2: "Coconut powder",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "cream",
      },
      image: "./images/GlutenFreeMango.jpg",
    },
    {
      id: 37,
      category: "Dietary Restriction",
      subcategory: "GlutenFree",
      name: "Pistachio Gluten Free",
      price: 43,
      ingred: {
        ingredient1: "Pistachio",
        ingredient2: "Coconut powder",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "cream",
      },
      image: "./images/GlutenFreePistachio.jpg",
    },
    {
      id: 38,
      category: "Dietary Restriction",
      subcategory: "GlutenFree",
      name: "Almond Gluten Free",
      price: 43,
      ingred: {
        ingredient1: "Almond",
        ingredient2: "Coconut powder",
        ingredient3: "eggs",
        ingredient4: "sugar",
        ingredient5: "cream",
      },
      image: "./images/GlutenFreeAlmond.jpg",
    },
    {
      id: 39,
      category: "Dietary Restriction",
      subcategory: "SugarFree",
      name: "Hazelnut Sugar Free",
      price: 43,
      ingred: {
        ingredient1: "Hazelnut",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "Erythritol",
        ingredient5: "milk",
      },
      image: "./images/SugarFreeHazelnut.jpg",
    },
    {
      id: 40,
      category: "Dietary Restriction",
      subcategory: "SugarFree",
      name: "Chocolate Sugar Free",
      price: 43,
      ingred: {
        ingredient1: "Chocolate",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "Erythritol",
        ingredient5: "milk",
      },
      image: "./images/SugarFreeChocolate.jpg",
    },
    {
      id: 41,
      category: "Dietary Restriction",
      subcategory: "SugarFree",
      name: "Strawberry Sugar Free",
      price: 43,
      ingred: {
        ingredient1: "Strawberry",
        ingredient2: "flour",
        ingredient3: "eggs",
        ingredient4: "Erythritol",
        ingredient5: "milk",
      },
      image: "./images/SugarFreeStrawberry.jpg",
    },
    {
      id: 42,
      category: "Dietary Restriction",
      subcategory: "Vegan",
      name: "Strawberry Vegan",
      price: 47,
      ingred: {
        ingredient1: "Strawberry",
        ingredient2: "flour",
        ingredient3: "tofu",
        ingredient4: "sugar",
        ingredient5: "coconut cream",
      },
      image: "./images/VeganStrawberry.jpg",
    },
    {
      id: 43,
      category: "Dietary Restriction",
      subcategory: "Vegan",
      name: "Mango Vegan",
      price: 45,
      ingred: {
        ingredient1: "Mango",
        ingredient2: "flour",
        ingredient3: "tofu",
        ingredient4: "sugar",
        ingredient5: "coconut cream",
      },
      image: "./images/VeganMango.jpg",
    },
    {
      id: 44,
      category: "Dietary Restriction",
      subcategory: "Vegan",
      name: "Chocolate Vegan",
      price: 45,
      ingred: {
        ingredient1: "Chocolate",
        ingredient2: "flour",
        ingredient3: "tofu",
        ingredient4: "sugar",
        ingredient5: "coconut cream",
      },
      image: "./images/VeganChocolate.jpg",
    },
    {
      id: 45,
      category: "Breads",
      subcategory: "Baguette",
      name: "White Baguette",
      price: 6,
      ingred: {
        ingredient1: "water",
        ingredient2: "flour",
        ingredient3: "yeast",
        ingredient4: "sugar",
        ingredient5: "salt",
      },
      image: "./images/WhiteBaguette.jpg",
    },
    {
      id: 46,
      category: "Breads",
      subcategory: "Baguette",
      name: "Oats Baguette",
      price: 6,
      ingred: {
        ingredient1: "water",
        ingredient2: "oats flour",
        ingredient3: "yeast",
        ingredient4: "sugar",
        ingredient5: "salt",
      },
      image: "./images/OatsBaguette.jpg",
    },
    {
      id: 47,
      category: "Breads",
      subcategory: "Baguette",
      name: "Whole Wheat Baguette",
      price: 6,
      ingred: {
        ingredient1: "water",
        ingredient2: "whole wheat flour",
        ingredient3: "yeast",
        ingredient4: "sugar",
        ingredient5: "salt",
      },
      image: "./images/WholeWheatBaguette.jpg",
    },
    {
      id: 48,
      category: "Breads",
      subcategory: "Sourdough",
      name: "Whole Wheat Sourdough",
      price: 6,
      ingred: {
        ingredient1: "water",
        ingredient2: "whole wheat flour",
        ingredient3: "yeast",
        ingredient4: "sugar",
        ingredient5: "salt",
      },
      image: "./images/WholeWheatSourdough.jpg",
    },
    {
      id: 49,
      category: "Breads",
      subcategory: "Sourdough",
      name: "White Sourdough",
      price: 6,
      ingred: {
        ingredient1: "water",
        ingredient2: "flour",
        ingredient3: "yeast",
        ingredient4: "sugar",
        ingredient5: "salt",
      },
      image: "./images/WhiteSourdough.jpg",
    },
    {
      id: 50,
      category: "Breads",
      subcategory: "Sourdough",
      name: "Multigrain Sourdough",
      price: 6,
      ingred: {
        ingredient1: "water",
        ingredient2: "multigrain flour",
        ingredient3: "yeast",
        ingredient4: "sugar",
        ingredient5: "salt",
      },
      image: "./images/MultigrainSourdough.jpg",
    },
    {
      id: 51,
      category: "Breads",
      subcategory: "Loaf",
      name: "Multigrain Loaf",
      price: 5,
      ingred: {
        ingredient1: "water",
        ingredient2: "multigrain flour",
        ingredient3: "yeast",
        ingredient4: "sugar",
        ingredient5: "salt",
      },
      image: "./images/MultigrainLoaf.jpg",
    },
    {
      id: 52,
      category: "Breads",
      subcategory: "Loaf",
      name: "Oats Loaf",
      price: 5,
      ingred: {
        ingredient1: "water",
        ingredient2: "oats flour",
        ingredient3: "yeast",
        ingredient4: "sugar",
        ingredient5: "salt",
      },
      image: "./images/OatsLoaf.jpg",
    },
    {
      id: 53,
      category: "Breads",
      subcategory: "Loaf",
      name: "White Loaf",
      price: 5,
      ingred: {
        ingredient1: "water",
        ingredient2: "flour",
        ingredient3: "yeast",
        ingredient4: "sugar",
        ingredient5: "salt",
      },
      image: "./images/WhiteLoaf.jpg",
    },
  ]);

  const [searchedProduct, setSearchedProduct] = useState("");
  const [cartProducts, setCartProducts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [language,setLanguage] = useState("en")

  // ******************* Advanced Search **************
  const [arrayProducts, setArrayProducts] = useState([]);
  // let advFilterCrit = [];
  const getAdvFilteredProd_BACKUP = (filterCriteria) => {
    // let advResult = advFilterCrit ? products.filter(advFilterFunc) : null;
    // console.log("Advanced search criteria: ", filterCriteria);
    if (filterCriteria.length === 0) {
      return products;
    } else {
      const filteredArray = products.filter((item) => {
        let result = true;
        for (let key in filterCriteria) {
          // console.log("key:", key);
          // console.log("item[key]: ", item[key]);
          if (item[key] !== filterCriteria[key]) {
            return false;
            break;
          }
        }
        return result;
      });
      return filteredArray;
    }
  };

  const getAdvFilteredProd_NO_PRICE = (filterCriteria) => {
    // let advResult = advFilterCrit ? products.filter(advFilterFunc) : null;
    // console.log("Advanced search criteria: ", filterCriteria);
    if (filterCriteria.length === 0) {
      return products;
    } else {
      const filteredArray = products.filter((item) => {
        let result = true;
        for (let key in filterCriteria) {
          // console.log("key:", key);
          if (key === "ingred") {
            for (let ingredientX in item.ingred) {
              result = false;
              // console.log(item.ingred[ingredientX]);
              if (item.ingred[ingredientX] === filterCriteria[key]) {
                result = true;
                // console.log(item.ingred[ingredientX]);
              }
              if (result === true) {
                break;
              }
            }
          } else {
            // console.log("item[key]: ", item[key]);
            if (item[key] !== filterCriteria[key]) {
              result = false;
              break;
            }
          }
        }
        return result;
      });
      // console.log("FINAL:", filteredArray);
      return filteredArray;
    }
  };

  const getAdvFilteredProd_SWITCH = (filterCriteria) => {
    // let advResult = advFilterCrit ? products.filter(advFilterFunc) : null;
    //console.log("Advanced search criteria: ", filterCriteria);
    if (filterCriteria.length === 0) {
      return products;
    } else {
      const filteredArray = products.filter((item) => {
        let result = true;
        for (let key in filterCriteria) {
          //console.log("key:", key);
          switch (key) {
            case "category":
              if (item[key] !== filterCriteria[key]) {
                result = false;
                break;
              }
              break;
            case "subcategory":
              if (item[key] !== filterCriteria[key]) {
                result = false;
                break;
              }
              break;
            case "ingred":
              for (let ingredientX in item.ingred) {
                result = false;
                // console.log(item.ingred[ingredientX]);
                if (item.ingred[ingredientX] === filterCriteria[key]) {
                  result = true;
                  //console.log(item.ingred[ingredientX]);
                }
                if (result === true) {
                  break;
                }
              }
              break;
            case "price":
              if (filterCriteria[key] === ">30") {
                if (item[key] < 30) {
                  result = false;
                  break;
                }
              }
              if (filterCriteria[key] === "<30") {
                if (item[key] > 30) {
                  result = false;
                  break;
                }
              }
              if (filterCriteria[key] === "<15") {
                if (item[key] > 15) {
                  result = false;
                  break;
                }
              }
              if (filterCriteria[key] === "<5") {
                if (item[key] > 5) {
                  result = false;
                  break;
                }
              }
              break;
            // default:
            //   if (item[key] !== filterCriteria[key]) {
            //     result = false;
            //     break;
            //   }
          }
        }
        return result;
      });
      //console.log("FINAL:", filteredArray);
      return filteredArray;
    }
  };

  const getAdvFilteredProd = (filterCriteria) => {
    // let advResult = advFilterCrit ? products.filter(advFilterFunc) : null;
    // console.log("Advanced search criteria: ", filterCriteria);
    if (filterCriteria.length === 0) {
      return products;
    } else {
      const filteredArray = products.filter((item) => {
        let result = true;
        for (let key in filterCriteria) {
          // console.log("key:", key);
          if (key === "ingred") {
            for (let ingredientX in item.ingred) {
              result = false;
              // console.log(item.ingred[ingredientX]);
              if (item.ingred[ingredientX] === filterCriteria[key]) {
                result = true;
                //console.log(item.ingred[ingredientX]);
              }
              if (result === true) {
                break;
              }
            }
          } else {
            // console.log("item[key]: ", item[key]);
            if (key === "price") {
              // Check for > 30
              if (filterCriteria[key] === ">30") {
                if (item[key] < 30) {
                  result = false;
                  break;
                }
              }
              // Check for < 30
              if (filterCriteria[key] === "<30") {
                if (item[key] > 30) {
                  result = false;
                  break;
                }
              }
              // Check for < 15
              if (filterCriteria[key] === "<15") {
                if (item[key] > 15) {
                  result = false;
                  break;
                }
              }
              //Check for < 5
              if (filterCriteria[key] === "<5") {
                if (item[key] > 5) {
                  result = false;
                  break;
                }
              }
            } else {
              // IF key is not price
              if (item[key] !== filterCriteria[key]) {
                result = false;
                break;
              }
            }

            // if (item[key] !== filterCriteria[key]) {
            //   result = false;
            //   break;
            // }
          }
        }
        return result;
      });
      // console.log("FINAL:", filteredArray);
      return filteredArray;
    }
  };

  // ********** end advanced search ******************

  // searchedProduct is the currently searched product in the menu
  const handleSearchedProduct = (searchedProduct) => {
    setSearchedProduct(searchedProduct);
    //console.log(searchedProduct);
  };

  // ************ SearchComponent ************************//
  const getFilteredProducts = (searchedProduct) => {
    let result = searchedProduct ? products.filter(func) : null;
    // console.log(searchedProduct, "  RESULT: ", result);
    return result;
  };

  const func = (prod) => {
    // console.log(prod);
    // return prod.category === searchedProduct;
    return prod.subcategory === searchedProduct;
  };

  // ***************** CART Functions *********************
  const addProductToCartFunction = (prod) => {
    const alreadyProducts = cartProducts.find(
      (item) => item.product.id === prod.id
    );
    if (alreadyProducts) {
      const latestCartUpdate = cartProducts.map((item) =>
        item.product.id === prod.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      setCartProducts(latestCartUpdate);
      //setTotalItems(cartProducts[0].quantity+1);
    } else {
      setCartProducts([...cartProducts, { product: prod, quantity: 1 }]);
      //console.log("ADD PROD:", cartProducts);
    }
  };

  const deleteProductFromCartFunction = (prod) => {
    const updatedCart = cartProducts.filter(
      (item) => item.product.id !== prod.id
    );
    setCartProducts(updatedCart);
    setTotalItems(total);
  };

  const totalAmountCalculationFunction = () => {
    return cartProducts.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  // ************* End of Search Component ***************** //
  // Executes after each render
  let total = 0;
  useEffect(() => {
    //console.log("useEffect executed");
    cartProducts.forEach((prod) => {
      //console.log(prod.quantity);
      total = total + prod.quantity;
      //console.log("TOTAL ITEMS: ", total);
      setTotalItems(total);
    });
  }, [cartProducts]);
  //

  // ******************* LANGUAGE *********************** //
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="container">
      <HashRouter>
        <Menu
          handleSearchedProduct={handleSearchedProduct}
          totalItems={totalItems}
          handleChangeLanguage={handleChangeLanguage}
          t={t}
        />
        <Switch>
          <Route exact path="/">
            <HomeComponent t={t}/>
          </Route>
          <Route path="/contactUs">
            <ContactUsComponent />
          </Route>
          <Route path="/location">
            <LocationComponent />
          </Route>
          <Route path="/search">
            <SearchComponent
              filteredProducts={getFilteredProducts({ searchedProduct })}
              addProductToCartFunction={addProductToCartFunction}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              deleteProductFromCartFunction={deleteProductFromCartFunction}
              totalAmountCalculationFunction={totalAmountCalculationFunction}
            />
          </Route>
          <Route path="/advancedSearch">
            <AdvSearchComponent
              filteredProducts={products}
              advFilteredCriteria={getAdvFilteredProd}
              addProductToCartFunction={addProductToCartFunction}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              deleteProductFromCartFunction={deleteProductFromCartFunction}
              totalAmountCalculationFunction={totalAmountCalculationFunction}
            />
          </Route>
          <Route path="/checkout">
            <CheckoutComponent
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              totalItems={totalItems}
              setTotalItems={setTotalItems}
            />
          </Route>
          <Route path="/recipe/step0">
            <RecipeComponent0></RecipeComponent0>
          </Route>
          <Route path="/recipe/step1">
            <RecipeComponent1></RecipeComponent1>
          </Route>
          <Route path="/recipe/step2">
            <RecipeComponent2></RecipeComponent2>
          </Route>
          <Route path="/recipe/step3">
            <RecipeComponent3></RecipeComponent3>
          </Route>
          <Route path="/recipe/step4">
            <RecipeComponent4></RecipeComponent4>
          </Route>
          <Route path="/aboutus">
            <AboutUsComponent />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
