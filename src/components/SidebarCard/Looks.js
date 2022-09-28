import React from "react";
import Icon from "../Icon";
import Message from "./Looks/Message";
import MessageTimer from "./Looks/MessageTimer";
import Size from "./Looks/Size";

export default function Looks() {

    return (
        <div>
            <div className="font-bold"> {"Looks"} </div>
            <Message />
            <MessageTimer />
            <Size />

        </div>
    );
}
