import React from "react";
import { pages } from "./header";
const NavMobile = () => {
  return (
    <div>
      <div>
        {pages.map((page, idx) => (
          <div key={idx}> {page.label}</div>
        ))}
      </div>
    </div>
  );
};

export default NavMobile;
