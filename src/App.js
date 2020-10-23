import React from 'react';
import './App.css';
import Welcome from './parts/Welcome';
import Text from "./parts/text";
import Audio from "./parts/audio";
import EndScreen from "./parts/EndScreen";

const reFetchTime = 1000

class App extends React.Component {

    constructor(props) {
        super(props)
        let finished = JSON.parse(localStorage.getItem("vmFinished"))
        if (finished == null) {
            finished = false
            localStorage.setItem("vmFinished", false)
        }
        if (finished) {
            this.fetchNames()
        }

        console.log(finished)
        this.state = {
            page: 1,
            name: '',
            names: [],
            finished: finished
        }
    }

    plusOne = () => {
        this.setState({ page: this.state.page+1 });
    };

    setName = (event) => {
        this.setState({ name:event.target.value});
    };

    end = () => {
        if (this.state.finished) {
            return
        }
        //localStorage.setItem("vmFinished", true)
        this.setState({finished: true})
        fetch("/finished?name=" + this.state.name)
            .then((response) => {
                response.json().then((names) => {

                    this.setState({names: names})
                    setTimeout(() => this.fetchNames(), reFetchTime)
                })
            })
    }

    fetchNames = () => {
        fetch("/getNames")
            .then(response => {
                response.json().then((names) => {
                    this.setState({names: names})
                    setTimeout(() => this.fetchNames(), reFetchTime)
                })
            }).catch(() => this.fetchNames())
    }


    render() {
        if (this.state.finished) {
            return <EndScreen names={this.state.names} />
        }
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
        } else if (this.state.page===10) {
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
        } else {
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

export default App;