import React from "react";
import { Icon } from "Icons";
import { useNavigate } from "react-router-dom";
function Navigation() {
  return (
    <nav className="flex items-center gap-x-4">
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70 gap-x-2">
        <Icon name="prev" size={22}></Icon>
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70 gap-x-2">
        <Icon name="next" size={22}></Icon>
      </button>
    </nav>
  );
}

export default Navigation;
