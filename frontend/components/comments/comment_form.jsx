import React from 'react';

class CommentForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: "",
    };
    this.takeComment = this.takeComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state)
    this.setState({body: ""})
  }
   
  takeComment(e){
    this.setState({body: e.currentTarget.value})
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea type='text'
          cols="30"
          rows="5"
          placeholder='Add a comment'
          onChange={this.takeComment}
          />
        </form>
      </div>
    )
  }
}

export default CommentForm