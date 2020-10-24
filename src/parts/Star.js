import React, {useState} from "react";

export default function Star(props) {
    const [hovered, setHovered] = useState(false)
    if (props.position === null) {
        return null
    }
    const className = hovered ? "show" : ""
    return <div className={"starContainer"} style={props.position}>
        <img src={"/star.png"} alt={"star"}
             width={40} height={40}
             onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        />
        <div className={"starName " + className}>
            {props.name}
        </div>
    </div>
}