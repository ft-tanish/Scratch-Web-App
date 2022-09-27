import React from "react";
import Icon from "../Icon";

export default function Motion() {

    return (
        <div>
            <div className="font-bold"> {"Motion"} </div>
            <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
                {"Move 10 steps"}
            </div>
            <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
                {"Turn "}
                <Icon name="undo" size={15} className="text-white mx-2" />
                {"15 degrees"}
            </div>
            <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
                {"Turn "}
                <Icon name="redo" size={15} className="text-white mx-2" />
                {"15 degrees"}
            </div>

        </div>
    );
}
