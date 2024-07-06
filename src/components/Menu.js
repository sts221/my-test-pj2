import { Link } from "react-router-dom";

const Menu = ({ handleSearchedProduct }) => {
  document.addEventListener("DOMContentLoaded", function () {
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
      // close all inner dropdowns when parent is closed
      document
        .querySelectorAll(".navbar .dropdown")
        .forEach(function (everydropdown) {
          everydropdown.addEventListener("hidden.bs.dropdown", function () {
            // after dropdown is hidden, then find all submenus
            this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
              // hide every submenu as well
              everysubmenu.style.display = "none";
            });
          });
        });

      document
        .querySelectorAll(".dropdown-menu fs-5 a")
        .forEach(function (element) {
          element.addEventListener("click", function (e) {
            let nextEl = this.nextElementSibling;
            if (nextEl && nextEl.classList.contains("submenu")) {
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              if (nextEl.style.display == "block") {
                nextEl.style.display = "none";
              } else {
                nextEl.style.display = "block";
              }
            }
          });
        });
    }
    // end if innerWidth
  });
  // DOMContentLoaded  end

  return (
    <div className="container">
      <nav
        className="navbar sticky-top navbar-expand-lg "
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid fs-5">
          {/* <a className="navbar-brand" href="/">
            Little Euro Bakery
          </a> */}
          <img
            src={require("./images/logo.png")}
            className="img-thumbnail img-fluid"
            alt="Little Euro Bakery"
            style={{ width: "50px" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {/* Products */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Products
                </a>
                <ul className="dropdown-menu fs-5">
                  <li>
                    <a className="dropdown-item" href="#">
                      Cakes &raquo;
                    </a>
                    <ul className="submenu dropdown-menu fs-5">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("Mousse")}
                        >
                          Mousse
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("Cheese Cake")}
                        >
                          Cheese Cake
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Buttercream Cake &raquo;{" "}
                        </a>
                        <ul className="submenu dropdown-menu fs-5">
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/search"
                              onClick={() =>
                                handleSearchedProduct("Buttercream Cake")
                              }
                            >
                              Buttercream 1
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/search"
                              onClick={() =>
                                handleSearchedProduct("Buttercream Cake")
                              }
                            >
                              Buttercream 2
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pastries &raquo;
                    </a>
                    <ul className="submenu dropdown-menu fs-5">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("Croissant")}
                        >
                          Croissants
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("Turnover")}
                        >
                          Turnovers
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Brioches &raquo;
                        </a>
                        <ul className="submenu dropdown-menu fs-5">
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/search"
                              onClick={() => handleSearchedProduct("Brioche")}
                            >
                              Brioche 1
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/search"
                              onClick={() => handleSearchedProduct("Brioche")}
                            >
                              Brioches 2
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("Muffin")}
                        >
                          Muffins
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tarts &raquo;{" "}
                    </a>
                    <ul className="submenu dropdown-menu fs-5">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("TartsSweet")}
                        >
                          Sweets
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("TartsSavory")}
                        >
                          Savory
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Special Events &raquo;
                    </a>
                    <ul className="submenu dropdown-menu fs-5">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("Weddings")}
                        >
                          Weddings
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("Birthdays")}
                        >
                          Birthdays
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("Graduations")}
                        >
                          Graduations
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dietary Restrictions &raquo;
                    </a>
                    <ul className="submenu dropdown-menu fs-5">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("GlutenFree")}
                        >
                          Gluten free
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("SugarFree")}
                        >
                          Sugar free
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("Vegan")}
                        >
                          Vegan
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() =>
                            handleSearchedProduct("NoRestrictions")
                          }
                        >
                          No restrictions
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Breads &raquo;
                    </a>
                    <ul className="submenu dropdown-menu fs-5">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("Baguette")}
                        >
                          Baguette
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("Sourdough")}
                        >
                          Sourdough
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/search"
                          onClick={() => handleSearchedProduct("Loaf")}
                        >
                          Loaf
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Location */}
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  aria-disabled="true"
                  href="/#/"
                >
                  Location(not ready)
                </a>
              </li>
              {/* Recipe of the month */}
              <li className="nav-item">
                {/* <a className="nav-link" href="#">
                  Recipe of the month
                </a> */}
                <Link className="nav-link" to="/recipe/step0">
                  Recipe of the month
                </Link>
              </li>
              {/* Advanced Search*/}
              <li className="nav-item">
                {/* <a className="nav-link" href="#">
                  Advanced Search
                </a> */}
                <Link className="nav-link" to="/advancedSearch">
                  Advanced Search
                </Link>
              </li>
              {/* Reviews */}
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  aria-disabled="true"
                  href="/#/"
                >
                  {" "}
                  Reviews{" "}
                </a>
              </li>
              {/* Contact us */}
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  aria-disabled="true"
                  href="/#/"
                >
                  {" "}
                  Contact us{" "}
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About us
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto"></ul>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </nav>
    </div>
  );
};

export default Menu;
