import React, {useState} from "react";

export default function Star(props) {
    const [hovered, setHovered] = useState(false)
    if (props.position === null) {
        return null
    }
    const className = hovered ? "show" : ""
    const width = window.innerWidth > 460 ? 40 : 20
    return <div className={"starContainer"} style={props.position}>
        <img src={"/star.png"} alt={"star"}
             width={width} height={width}
             onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        />
        <div className={"starName " + className}>
            {props.name}
        </div>
    </div>
}