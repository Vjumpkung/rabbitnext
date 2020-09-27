import React from "react";
import ActiveLink from "./Link";
const WebHeader = () => (
  <nav
    className="navbar navbar-expand-lg navbar-dark sticky-top site-header"
    id="content-desktop"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-auto my-auto">
          <a className="navbar-brand" href="/">
            <img
              src="../public/image/Logo.png"
              width="130"
              height="46.71"
              alt="Rabbitsstore"
            />
          </a>
        </div>
        <div className="col-md-auto ml-auto">
          <ul className="navbar-nav justify-content-end ">
            <li className="nav-item">
              <h5 className="nav-link">
                <ActiveLink href="/" activeClassName="active">
                  <a className="text-decoration-none nav-link">หน้าแรก</a>
                </ActiveLink>
              </h5>
            </li>
            <li className="nav-item">
              <h5 className="nav-link active">
                <ActiveLink href="/DTG" activeClassName="active">
                  <a className=" text-decoration-none nav-link">DTG</a>
                </ActiveLink>
              </h5>
            </li>
            <li className="nav-item">
              <h5 className="nav-link">
                <ActiveLink href="/DST" activeClassName="active">
                  <a className="text-decoration-none nav-link "> DST</a>
                </ActiveLink>
              </h5>
            </li>
            <li className="nav-item">
              <h5 className="nav-link">
                <ActiveLink href="/blockscreen" activeClassName="active">
                  <a className="text-decoration-none nav-link">Block Screen</a>
                </ActiveLink>
              </h5>
            </li>
            <li className="nav-item">
              <h5 className="nav-link">
                <ActiveLink href="/embroidery" activeClassName="active">
                  <a className="text-decoration-none nav-link">Embroidery</a>
                </ActiveLink>
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);
export default WebHeader;
