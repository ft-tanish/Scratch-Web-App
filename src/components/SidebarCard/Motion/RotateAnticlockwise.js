import React, { useState } from "react";
import Icon from "../../Icon";

const RotateAnticlockwise = ({ character, characterAngle, comp_id }) => {
    const [angle, setAngle] = useState(0);

    const handleClick = () => {
        let anti_angle = -1 * angle;
        const el = document.getElementById(character.active);
        const character_angle = character.characters.find(
            (x) => x.id === character.active
        );
        if (character_angle) {
            el.style.transform = `rotate(${character_angle.angle + anti_angle}deg)`;
            characterAngle(character_angle.angle + anti_angle);
        }
    };

    return (
        <div className="flex flex-row">
            <div
                id={comp_id}
                className="flex flex-row flex-wrap bg-blue-500 p-2 my-2 rounded text-white text-sm cursor-pointer"
                onClick={() => handleClick()}
            >
                <div className="flex mx-auto">
                    turn
                    <Icon name="undo" size={15} className="text-white mx-2" />
                </div>
                <input
                    className="mx-2 p-1 py-0 w-14 rounded text-center text-black"
                    type="number"
                    value={angle}
                    onChange={(e) => {
                        setAngle(parseInt(e.target.value));
                    }}
                />
                degrees
            </div>
        </div>
    );
};


export default RotateAnticlockwise;
