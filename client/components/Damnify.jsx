import React from 'react'



class Damnify extends React.Component {
    render() {
        return (
            <>
                <img id='img' src={this.props.imageURL}></img>
            </>
    )
    }
}

export default Damnify