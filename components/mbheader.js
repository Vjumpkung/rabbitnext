import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
const MobileNav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark site-header"
      id="content-mobile"
    >
      <div className="container mobileShow">
        <div className="row">
          <div className="col">
            <img src="../public/image/Logo.png" width="120" alt="" />
            <Dropdown className="float-right">
              <DropdownButton variant="dark" id="dropdown-basic" title="Menu">
                <Dropdown.Item href="/">หน้าแรก</Dropdown.Item>
                <Dropdown.Item href="/DTG">DTG</Dropdown.Item>
                <Dropdown.Item href="/DST">DST</Dropdown.Item>
                <Dropdown.Item href="/blockscreen">Block Screen</Dropdown.Item>
                <Dropdown.Item href="/embroidery">Embroidery</Dropdown.Item>
              </DropdownButton>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default MobileNav
