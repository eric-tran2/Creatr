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
    document.getElementById("commentForm").value = ''
  }
   
  render() {
    return(
        <form onSubmit={this.handleSubmit}>
          <textarea type='text'
          cols="50"
          rows="5"
          id="commentForm"
          placeholder='Add a comment'
          onChange={this.handleInput}
          />
          <input className="commentbutton"
          disabled={this.state.body.length ? null : "disabled"}
          type='submit'
          value='Comment'/>
        </form>
    )
  }
}

export default CommentForm
