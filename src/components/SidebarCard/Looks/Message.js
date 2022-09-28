import React, { useState } from "react";

const Message = ({ character, comp_id }) => {
    const [state, setState] = useState({
        show_msg: false,
        message: "",
        character_id: "",
    });

    const displayMessage = () => {
        const el = document.getElementById(`${character.active}-message-box`);
        const el2 = document.getElementById(`${character.active}-message-box1`);

        if (state.show_msg && state.character_id === character.active) {
            setState({ ...state, show_msg: false });
            el.style.display = "none";
            return;
        }
        setState({ ...state, show_msg: true });
        el.style.display = "block";
        el.style.position = "relative";

        el2.style.display = "none";

        window.clearTimeout();
        el.innerHTML = state.message;
    };

    return (
        <div
            id={comp_id}
            className="flex flex-row flex-wrap rounded bg-purple-700 text-white p-2 my-3 text-sm cursor-pointer"
            onClick={() => displayMessage()}
        >
            say {" "}
            <input
                className="mx-2 w-24 p-1 py-0 text-black rounded text-center"
                type="text"
                value={state.message}
                onChange={(e) => {
                    e.target.value.length > 0 &&
                        setState({ ...state, message: e.target.value });
                }}
            />
        </div>
    );
};


export default Message;