import React, { useState } from "react";
import Icon from "../../Icon";


const RotateClockwise = ({ character, characterAngle, comp_id }) => {
    const [angle, setAngle] = useState(0);

    const handleClick = () => {
        const el = document.getElementById(character.active);
        const character_angle = character.characters.find(
            (x) => x.id === character.active
        );
        if (character_angle) {
            el.style.transform = `rotate(${character_angle.angle + angle}deg)`;
            characterAngle(character_angle.angle + angle);
        }
    };

    return (
        <div className="text-center rounded bg-blue-500 p-2 my-3">
            <div className="grid grid-cols-2">
                <div className="text-white">Rotate By:</div>
                <input
                    className="mx-2 p-1 py-0 text-center"
                    type="number"
                    value={angle}
                    onChange={(e) => setAngle(parseInt(e.target.value))}
                />
            </div>
            <div
                id={comp_id}
                className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
                onClick={() => handleClick()}
            >
                <div className="flex mx-auto">
                    Turn
                    <Icon className="mx-2" /> {angle} degrees
                </div>
            </div>
        </div>
    );
};

export default RotateClockwise;