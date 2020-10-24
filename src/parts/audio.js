import React from "react";
import '../App.css';

class Audio extends React.Component {
    componentDidMount() {
        if (this.props.autoPlay) {
            document.getElementById("audioPlayer").play()
        }
    }

    render() {
        const {loop, src, autoPlay, controls} = this.props
        return(
            <div className={"playerContainer"}>
                <audio controls={controls} loop={loop} autoPlay={autoPlay} id={"audioPlayer"} onPlay={pl => {
                    if (!pl?.target || !this?.props?.volume) {
                        return
                    }
                    pl.target.volume = this.props.volume
                }}>
                    <source src={src} type={"audio/mp3"} />
                </audio>
            </div>
        )
    }
}

export default Audio;