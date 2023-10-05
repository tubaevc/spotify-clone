import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "Icons";

function Section({ title, more = false, items }) {
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
  return (
    <section className="text-2xl text-white font-semibold tracking-tight">
      <header className="flex items-center justify-between mb-4">
        <NavLink to={more ?? "#"}>
          <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">
            {title}
          </h3>
        </NavLink>
        {more && (
          <NavLink
            className={
              "text-xs font-semibold uppercase text-link hover:underline tracking-wider"
            }
            to={more}
          >
            SEE ALL
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
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
              <button className="w-10 rounded-full bg-primary absolute bottom-2 right-2 flex items-center justify-center hidden group-hover:flex ">
                <Icon name="play" size={16}></Icon>
              </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap">
              {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-xs mt-1">
              {item.desciription}
            </p>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default Section;