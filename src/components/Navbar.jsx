import { useState } from "react";

import { Link } from "react-scroll";

import { NavbarContainer } from "../styles/style";
import { NavbarItems } from "./NavbarItems";
import { NavList } from "./NavList";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const menu = "./menu.svg";
  const close = "./close.svg";

  return (
    <NavbarContainer>
      <Link smooth={true} to="home">
        <div className="aligned">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="20"
            fill="#fff"
            className="bi bi-terminal"
            viewBox="0 0 16 16"
          >
            <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
            <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" />
          </svg>
          <h3>Gerardo_Dev</h3>
        </div>
      </Link>
      {toggle ? (
        <NavList />
      ) : (
        <NavbarItems toggle={toggle} setToggle={setToggle} />
      )}
      <img
        onClick={() => setToggle(!toggle)}
        src={toggle ? close : menu}
        alt="menu"
      />
    </NavbarContainer>
  );
};
