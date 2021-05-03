import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between fixed-top">
        <a className="navbar-brand" href="#">
          Joseph Monreal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>

          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <ion-icon size="small" color="" name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <ion-icon size="small" color="" name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <ion-icon size="small" color="" name="logo-github"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
