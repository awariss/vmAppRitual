import React from "react";
import '../App.css';


class Welcome extends React.Component {
    render() {
        switch(this.props.page) {
            case 1:
                return<h1>Buď zdráv poutníku!</h1>;
            case 2:
                return<h1>Cesta končí</h1>;
            case 3:
                return<h1>Přátelé, které jsem poznal</h1>;
            case 4:
                return<h1>Vědění, co jsem se naučil</h1>;
            case 5:
                return<h1>Skutky, co jsem učinil</h1>;
            case 6:
                return<h1>Sliby, co jsem dal</h1>;
            default:
                return<h1>Nová cesta začíná</h1>;
        }
    }
}

export default Welcome;