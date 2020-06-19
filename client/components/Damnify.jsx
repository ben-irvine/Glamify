import React from 'react'



class Damnify extends React.Component {
    render() {
        return (
            <div className="damn animate__animated animate__fadeIn" id="overlay">
                <div className="damn-heading">
                    <span id="D">D</span>
                    <span id="A">A</span>
                    <span id="M">M</span>
                    <span id="N">N</span>
                    <span id="I">I</span>
                    <span id="F">F</span>
                    <span id="Y">Y</span>
                </div>
                <div className="center">
                    <img id='img' src={this.props.imageURL} />
                </div>
            </div>
        )
    }
}

export default Damnify