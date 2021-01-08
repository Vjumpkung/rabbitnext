import React from "react";
import Link from "next/link"
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
            <div class="dropdown float-right">
              <button
                class="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                หน้าแรก
              </button>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenuButton"
              >
                <Link href="/"><a class="dropdown-item">หน้าแรก</a></Link>
                <Link href="/DTG"><a class="dropdown-item">DTG</a></Link>
                <Link href="/DST"><a class="dropdown-item">DST</a></Link>
                <Link href="/blockscreen"><a class="dropdown-item">Block Screen</a></Link>
                <Link href="/embroidery"><a class="dropdown-item">Embroidery</a></Link>
              </div></div>
            </div>
        </div>
      </div>
    </nav>
  );
};
export default MobileNav
