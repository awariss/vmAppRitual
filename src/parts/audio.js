import React from "react";
import '../App.css';

class Audio extends React.Component {
    render() {

        return(
            <audio controls src="../../media/choral1.mp3"></audio>
        )
    }
}

export default Audio;