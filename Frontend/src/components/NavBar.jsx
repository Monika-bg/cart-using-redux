import React, { useState } from "react";
import { data } from "../pages/restApi.json";
import { NavLink } from "react-router-dom"; // Import NavLink
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="logo">PALATE PLEASERS</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => (
            <NavLink
              to={`/${element.link}`} // Use NavLink to navigate to different pages
              key={element.id}
            >
              {element.title}
            </NavLink>
          ))}
        </div>
        
        {/* Updated RouterLink to point to the login page */}
        <NavLink to="/login" className="menuBtn">Order Online</NavLink>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu/>
      </div>
    </nav>
  );
};

export default Navbar;
