import React from 'react';
import './App.css';
import Welcome from './parts/Welcome';
import Text from "./parts/text";
import Audio from "./parts/audio";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            name: '',
        }
    }

    plusOne = () => {
        this.setState({ page: this.state.page+1 });
    };

    setName = (event) => {
        this.setState({ name:event.target.value});
    };

    end = () => {
        window.location.href = 'https://velkamorava.skauting.cz/';
    }


    render() {

        if(this.state.page===1){
            return(
                    <div className="App">
                        <p>{this.state.page}/10</p>
                        <Welcome page={this.state.page}/>
                        <Text page={this.state.page} />
                        <input className="formik" type="text" onChange={this.setName} placeholder="Zadej svoje jméno nebo přezdívku" />
                        <br/>
                        <button type="button" onClick={this.plusOne}>Pokračovat</button>
                    </div>
                )
        }
        else{
            if(this.state.page===10){
                return(
                    <div className="App">
                    <p>{this.state.page}/10</p>
                    <Welcome page={this.state.page}/>
                    <br/>
                    <button type="button" onClick={this.end}>Ukonči svoje putování!</button>
                    <br/>
                    <iframe width="10" height="10" src="https://www.youtube.com/embed/_2lffRQorW0?&start=3&autoplay=1" allowFullScreen/>
                    </div>
                )
            }
            else{
                return (
                    <div className="App">
                        <p>{this.state.page}/10</p>
                        <Welcome page={this.state.page}/>
                        <Text page={this.state.page} name={this.state.name}/>
                        <br/>
                        <button type="button" onClick={this.plusOne}>Pokračovat</button>
                        <br/>
                        <iframe width="10" height="10" src="https://www.youtube.com/embed/_2lffRQorW0?&start=5&autoplay=1" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </div>
                );
            }
        }

    }
}

export default App;