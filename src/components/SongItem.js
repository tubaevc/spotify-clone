import React from "react";
import { Icon } from "Icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "./store/player";
function SongItem({ item }) {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);
  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";

      case "podcast":
        return "rounded-xl";

      default:
        return "rounded";
    }
  };
  const updateCurrent = () => {
    if (current.id === item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };
  const isCurrentItem = current?.id === item.id && playing;
  return (
    <NavLink
      to="/"
      key={item.id}
      className={"bg-footer p-4 rounded  hover:bg-active group"}
    >
      <div className="pt-[100%] relative mb-4 ">
        <img
          src={item.image}
          className={`absolute inset-0 w-full h-full object-cover ${imageStyle(
            item
          )}`}
        ></img>
        <button
          onClick={updateCurrent}
          className={`w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center ${
            !isCurrentItem ? "hidden" : "flex"
          }`}
        >
          <Icon name={isCurrentItem ? "pause" : "play"} size={16}></Icon>
        </button>
      </div>
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap">
        {item.title}
      </h6>
      <p className="line-clamp-2 text-link text-xs mt-1">{item.desciription}</p>
    </NavLink>
  );
}

export default SongItem;
