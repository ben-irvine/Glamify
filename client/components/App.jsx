import React from 'react'

class App extends React.Component {
  state = {
    imageURL: '',
  }

  handleSubmit = event => {
    // Don't automatically submit the form
    event.preventDefault()

    console.log('submit', this.state)

    this.props.setName(this.state.name)
  }

  handleChange = event => {
    console.log('change!', event.target.name)

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
      <form onSubmit={this.handleSubmit}>

        <label>
          Input image link:
          <input type="text" name="image-link" onChange={this.handleChange}/>
        </label>

        <input type="submit" value="Save" />
      </form>
    )
  }
}



export default App
