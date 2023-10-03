import React from "react";
import { Icon } from "Icons";
function DownloadApp() {
  return (
    <a
      href="#"
      className="h-10 flex items-center text-sm font-semibold text-link hover:text-white px-6 flex-shrink-0 gap-x-4"
    >
      <Icon name="download" className="size={20}"></Icon>
      Uygulamayı Yükle
    </a>
  );
}

export default DownloadApp;
