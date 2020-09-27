import React from "react";
import dynamic from 'next/dynamic'
const WebHeader = dynamic(() => import('./webheader'));
const MobileHeader = dynamic(() => import('./mbheader'));

const Header = () => {
  return (
    <div className="sticky-top">
      <div id="site-header">
          <WebHeader/>
          <MobileHeader/>
      </div>
    </div>
  );
};
export default Header;
