import React from "react";
import Star from "./Star";
import Audio from "./audio";

export default function EndScreen(props) {
    const {names} = props
    return <div className={"endScreen"}>
        <div className={"content"}>
            {names.map((name, i) => {
                return <Star name={name} position={getPosition(i)}/>
            })}
        </div>
        <div >
            <Audio src={"/choral.mp3"} autoPlay={true} loop={true} controls={true}/>
        </div>
        <button className={"meetButton"} onClick={() => {window.open("https://meet.google.com/bbw-yrie-bgr", "_blank");}}>Meet</button>
        <div className={"overLay"} />
    </div>
}

const canvasWidth = 1800
const canvasHeight = 930

function getPosition(i) {
    if (i >= coordinates.length) {
        return null
    }
    const coor = coordinates[i % coordinates.length]
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    const f = windowWidth * 1.1 / canvasWidth
    return {
        left: (coor.left * f + windowWidth / 2),
        top: (coor.top * f + windowHeight / 2)
    }
}

const coordinatesRaw = [
    // V
    { left: 316, top: 246},
    { left: 334, top: 283},
    { left: 355, top: 322},
    { left: 370, top: 367},
    { left: 384, top: 406},
    { left: 403, top: 450},
    { left: 418, top: 504},
    { left: 438, top: 537},
    { left: 453, top: 483},
    { left: 472, top: 447},
    { left: 486, top: 406},
    { left: 507, top: 366},
    { left: 520, top: 313},
    { left: 540, top: 286},
    { left: 555, top: 249},
    // M
    { left: 606, top: 525},
    { left: 610, top: 468},
    { left: 621, top: 409},
    { left: 628, top: 367},
    { left: 631, top: 313},
    { left: 646, top: 262},
    { left: 676, top: 315},
    { left: 697, top: 360},
    { left: 712, top: 418},
    { left: 730, top: 468},
    { left: 745, top: 513},
    { left: 780, top: 450},
    { left: 798, top: 396},
    { left: 813, top: 342},
    { left: 834, top: 301},
    { left: 865, top: 271},
    { left: 871, top: 330},
    { left: 883, top: 373},
    { left: 889, top: 436},
    { left: 901, top: 472},
    { left: 912, top: 525},
    // 2
    {left: 1057, top: 332},
    {left: 1071, top: 283},
    {left: 1107, top: 273},
    {left: 1134, top: 261},
    {left: 1167, top: 270},
    {left: 1195, top: 303},
    {left: 1210, top: 345},
    {left: 1194, top: 399},
    {left: 1159, top: 433},
    {left: 1122, top: 468},
    {left: 1092, top: 496},
    {left: 1056, top: 517},
    {left: 1126, top: 532},
    {left: 1174, top: 516},
    {left: 1228, top: 517},
    // 0
    {left: 1359, top: 268},
    {left: 1321, top: 307},
    {left: 1297, top: 352},
    {left: 1284, top: 402},
    {left: 1294, top: 447},
    {left: 1311, top: 478},
    {left: 1330, top: 513},
    {left: 1354, top: 529},
    {left: 1390, top: 543},
    {left: 1426, top: 520},
    {left: 1438, top: 492},
    {left: 1461, top: 450},
    {left: 1470, top: 402},
    {left: 1458, top: 357},
    {left: 1438, top: 315},
    {left: 1404, top: 280},
]

const shuffledCoordinates = shuffle(coordinatesRaw)

const coordinates = shuffledCoordinates.map(c => ({
    left: c.left - (canvasWidth / 2),
    top: c.top - (canvasHeight / 2)
}))

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
