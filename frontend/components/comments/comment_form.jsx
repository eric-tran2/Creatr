import React from 'react'


class CommentForm extends React.Component {
  constructor(props){
    super(props);
    // debugger
    this.state = {
      body: "",
      photo_id: Object.values(props.photo),
      commenter_id: this.props.currentUser.id,
    }
    // debugger
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this) // handle input/submit? 
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ body: e.target.value})
  }

  render() {
    return (
      <div className="commentform">
        <form onSubmit={this.handleInput}>
          <input type="text"
          placeholder="Add a comment"
          value={this.state.body}
          onChange={this.handleInput('body')}
          />
        </form>
          {/* <h1> testing render </h1> */}
      </div>
    )
  }
}

export default CommentForm;