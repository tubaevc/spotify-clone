import React from "react";
import logo from "img/spotify-logo.svg";
import Menu from "./Sidebar/Menu";
import { Icon } from "Icons";
import Playlists from "./Sidebar/Playlists";
import DownloadApp from "./Sidebar/DownloadApp";
function Sidebar() {
  return (
    <aside className="w-60 pt-6 flex flex-col bg-black">
      <a href="#" className="mb-5 px-6">
        <img src={logo} className="h-10"></img>
      </a>
      <Menu />
      <nav className="mt-6">
        <ul>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center bg-opacity-60 group group-hover:bg-opacity-100 text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white rounded-sm text-black">
                <Icon name="plus" size={12}></Icon>
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center bg-opacity-60 group group-hover:bg-opacity-100 text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-indigo-500 to-blue-300 rounded-sm text-white bg-white ">
                <Icon name="heart" size={12}></Icon>
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      <Playlists />
      <DownloadApp></DownloadApp>
    </aside>
  );
}

export default Sidebar;
