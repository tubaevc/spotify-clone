import React from "react";
import { Icon } from "Icons";
import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            exact
            to={"/"}
            className="h-10 gap-x-4 flex items-center text-sm text-link hover:text-white px-4 rounded bg-active  "
          >
            <span>
              <Icon name="home" size={24}></Icon>
            </span>
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={"/search"}
            className="h-10 gap-x-4 flex items-center text-sm text-link hover:text-white px-4 rounded "
          >
            <span>
              <Icon name="search" size={24}></Icon>
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={"/collection"}
            className="h-10 gap-x-4 flex items-center text-sm text-link hover:text-white px-4 rounded "
          >
            <span>
              <Icon name="collection" size={24}></Icon>
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
