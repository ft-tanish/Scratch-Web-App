import React from "react";
import Icon from "../Icon";

export default function Control() {

    return (
        <div>
            <div className="font-bold"> {"Control"} </div>
            <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
                {"When "}
                <Icon name="flag" size={15} className="text-green-600 mx-2" />
                {"clicked"}
            </div>
            <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
                {"When this sprite clicked"}
            </div>
        </div>
    );
}