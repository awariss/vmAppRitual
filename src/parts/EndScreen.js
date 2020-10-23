import React from "react";
import Star from "./Star";

export default function EndScreen(props) {
    const {names} = props
    return <div className={"endScreen"}>
        <div className={"content"}>
            {names.map((name, i) => {
                return <Star name={name} position={getPosition(i)}/>
            })}
        </div>
        <div className={"overLay"} />
    </div>
}

function getPosition(i) {
    return coordinates[i % 3]
}

const coordinates = [
    { top: 300, left: 400},
    { top: 200, left: 600},
    { top: 500, left: 300}
]
