import React from 'react';
import './App.css';
import Welcome from './parts/Welcome';
import Text from "./parts/text";
import Audio from "./parts/audio";
import EndScreen from "./parts/EndScreen";

const reFetchTime = 1500

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
            finished: finished,
            endButton: false,
        }
    }

    plusOne = () => {
        if (this.state.name.length > 0) {
            window.scrollTo({top: 0})
            this.setState({ page: this.state.page+1 });
        }
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
                        <Welcome page={this.state.page}/>
                        <Text page={this.state.page} />
                        <input className="formik" type="text" onChange={this.setName} placeholder="Zadej svoje jméno nebo přezdívku" />
                        <br/>
                        <button type="button" onClick={this.plusOne}>Pokračovat</button>
                    </div>
                )
        } else if (this.state.page===8) {
            return(
                <div className="App">
                    <div className={"last"}>
                    <Welcome page={this.state.page}/>
                    {this.state.endButton? <button type="button" onClick={this.end}>Ukonči svoje putování!</button>: null}
                    <br/>
                    <Audio src={"/basen_full.mp3"} autoPlay={true} controls={true} loop={false} volume={1} onEnd={() => this.setState({endButton: true})}/>
                </div>
                </div>
            )
        } else {
            return (
                <div className="App">
                    <Welcome page={this.state.page}/>
                    <Text page={this.state.page} name={this.state.name}/>
                    <br/>
                    <button type="button" onClick={this.plusOne}>Pokračovat</button>
                    <br/>
                    <Audio src={"/pozadi.mp3"} autoPlay={true} controls={true} loop={true} volume={0.3} />
                </div>
            );
        }
    }
}

export default App;