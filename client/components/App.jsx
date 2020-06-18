import React from 'react'

class App extends React.Component {
  state = {
    imageURL: '',
    showImage: false,
  }

  handleSubmit = event => {
    // Don't automatically submit the form
    event.preventDefault()
    this.setState({
      showImage: true
    })
  }

  handleChange = event => {
    console.log('change!', this.state)

    // const newState = {}
    // newState[event.target.name] = event.target.value
    // this.setState(newState)

    // This ---/\ is the same as this ----\/
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <>
      

      <form onSubmit={this.handleSubmit}>

        <label>
          Input image link:
          <input type="text" name="imageURL" onChange={this.handleChange}/>
        </label>

        <input type="submit" value="Save"/>
      </form>
      </>
    )
  }
}



export default App
