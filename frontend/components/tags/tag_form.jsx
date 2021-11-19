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
    // console.log(this.state)
    this.props.createTag(this.state)
    this.setState({ name: "" })
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea type='text'
          cols="10"
          rows="1"
          placeholder='Add a tag'
          onChange={this.handleInput}
        />
        <input className="tagbutton"
          type='submit'
          value='Tag' />
      </form>
    )
  }
}

export default TagForm