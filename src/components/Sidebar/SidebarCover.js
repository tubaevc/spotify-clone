import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "Icons";
import { setSidebar } from "components/store/player";
function SidebarCover() {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.player.current);
  return (
    <div className="pt-[100%] relative bg-white group">
      <img
        src={current.image}
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className="rounded-full -rotate-90 w-6 h-6 bg-black opacity-0 group-hover:opacity-80 hover:scale-[1.06] hover:bg-opacity-100 top-1 right-1 absolute flex items-center justify-center "
      >
        <Icon size={16} name="arrowLeft" />
      </button>
    </div>
  );
}

export default SidebarCover;
