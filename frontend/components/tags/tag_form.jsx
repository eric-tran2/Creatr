import React from 'react';

class TagForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.tag
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ name: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTag(this.state)
    this.setState({ name: "" })
    document.getElementById("tagForm").value = ''

  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea type='text'
          cols="10"
          rows="1"
          id="tagForm"
          placeholder='Add a tag'
          onChange={this.handleInput}
        />
        <input className="tagButton"
          disabled={this.state.name.length ? null : "disabled"}
          type='submit'
          value='Add tags' />
      </form>
    )
  }
}

export default TagForm
