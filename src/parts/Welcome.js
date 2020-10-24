import React from "react";
import '../App.css';


class Welcome extends React.Component {
    render() {
        switch(this.props.page) {
            case 1:
                return<h1>Buď zdráv poutníku!</h1>;
            case 2:
                return<h1>Teď a tady</h1>;
            case 3:
                return<h1>Přátelé, které jsem poznal</h1>;
            case 4:
                return<h1>Vědění, které jsem nabyl</h1>;
            case 5:
                return<h1>Skutky, které jsem učinil</h1>;
            case 6:
                return<h1>Sliby, co jsem dal</h1>;
            case 7:
                return<h1>Jedno končí, jiné začíná</h1>;
            case 8:
                return<h1>Tvá cesta se chýlí ke konci</h1>;
            default:
                return<h1>Error BRO</h1>;
        }
    }
}

export default Welcome;