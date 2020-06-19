import React from 'react'

class Form extends React.Component {


  render() {
    return (
      <div className='glam'>
      
        <h1 className='glam-title'>Glamify 2</h1>

        <p className='glam-description'>Post a link to an image you would like to be Glamified!</p>
        
        
        <div className='glam-form'>
            <form onSubmit={this.props.handleSubmit}>

                <label className='glam-label'>
                Input image link:
                </label>
                    
                        <input className='glam-input' type="text" name="imageURL" onChange={this.props.handleChange}/>

                        <input className='glam-save' type="submit" value="Glamify!"/>
                    
            </form>
        </div>
      </div>
    )
  }
}

export default Form