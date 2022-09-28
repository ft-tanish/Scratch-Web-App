import React, { useState } from "react";

const Size = ({ character, comp_id }) => {
    const [state, setState] = useState({
        scale: 1,
    });

    const changeSize = () => {
        const el = document.getElementById(character.active);
        el.style.transform = `scale(${state.scale})`;
    };

    return (
        <div
            id={comp_id}
            className="flex flex-row text-center bg-purple-700 rounded text-white p-2 my-3 text-sm cursor-pointer"
            onClick={() => changeSize()}
        >
            <div className="text-white">change size by</div>
            <input
                className="mx-2 p-1 py-0 w-14 rounded text-black text-center"
                type="number"
                value={state.scale}
                onChange={(e) =>
                    setState({ ...state, scale: parseInt(e.target.value) })
                }
            />
        </div>
    );
};

export default Size;