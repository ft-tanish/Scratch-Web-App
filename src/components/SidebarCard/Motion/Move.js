import React, { useState } from "react";

const Move = ({ character, comp_id }) => {
    const [steps, setSteps] = useState(0);

    const handleClick = () => {
        const el = document.getElementById(`${character.active}-div`);

        var left = el.offsetLeft;
        el.style.position = "relative";
        el.style.left = left + steps + "px";
    };
    return (
        <div
            id={comp_id}
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
            onClick={() => handleClick()}>
            Move {" "}
            <input
                type="number"
                className="text-black text-center w-16 mx-2"
                value={steps}
                onChange={(e) => setSteps(parseInt(e.target.value))}
            />{" "}
            steps
        </div>
    );
};



export default Move;
