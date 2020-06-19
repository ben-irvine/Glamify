import React from 'react'
import Form from './Form'
import Damnify from './Damnify'

class App extends React.Component {
  state = {
    imageURL: '',
    showImage: false,
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
        showImage: true
    })
    }

    handleChange = event => {
    console.log('change!', this.state)

    this.setState({
        [event.target.name]: event.target.value
    })
    }


  render() {
    return (this.state.showImage ? 
      <Damnify imageURL={this.state.imageURL} showImage={this.state.showImage}/>: 
      <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>)
  }
}



export default App

