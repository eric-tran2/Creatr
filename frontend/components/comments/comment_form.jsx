import React from 'react';

class CommentForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.comment
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  handleInput(e){
    this.setState({body: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state)
    this.setState({body: ""})
  }
   


  render() {
    return(
        <form onSubmit={this.handleSubmit}>
          <textarea type='text'
          cols="50"
          rows="5"
          placeholder='Add a comment'
          onChange={this.handleInput}
          />
          <input className="commentbutton"
          type='submit'
          value='Comment'/>
        </form>
    )
  }
}

export default CommentForm
