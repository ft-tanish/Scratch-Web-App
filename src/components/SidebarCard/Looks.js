import React from "react";
import Icon from "../Icon";

export default function Looks() {

    return (
        <div>
            <div className="font-bold"> {"Looks"} </div>
            <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
                {"Say"}
                <button>Hello</button>
                {"for"}
                <input className="mx-2 p-1 py-0 text-center"
                    type="number" value={"2 sec"} />
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
