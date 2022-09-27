import React from "react";
import Control from "./SidebarCard/Control";
import Events from "./SidebarCard/Events";
import Looks from "./SidebarCard/Looks";
import Motion from "./SidebarCard/Motion";

export default function Sidebar() {

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <Motion />
      <Looks />
      <Control />
      <Events />
    </div>
  );
}
