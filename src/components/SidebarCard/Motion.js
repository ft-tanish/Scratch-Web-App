import React from "react";
import Icon from "../Icon";
import Move from "./Motion/Move";
import RotateAnticlockwise from "./Motion/RotateAnticlockwise";
import RotateClockwise from "./Motion/RotateClockwise";

export default function Motion() {

    return (
        <div>
            <div className="font-bold"> {"Motion"} </div>
            <Move />
            <RotateClockwise />
            <RotateAnticlockwise />
        </div>
    );
}
