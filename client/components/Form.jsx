import React from 'react'

class Form extends React.Component {


  render() {
    return (
      <>
      
      <h1>Glamify!</h1>

      <form onSubmit={this.props.handleSubmit}>

        <label>
          Input image link:
          <input type="text" name="imageURL" onChange={this.props.handleChange}/>
        </label>

        <input type="submit" value="Save"/>
      </form>
      </>
    )
  }
}

export default Form