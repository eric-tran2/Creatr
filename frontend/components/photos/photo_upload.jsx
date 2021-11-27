import React from 'react'
import { Link } from 'react-router-dom'

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.history)
    this.state = {
      photoFile: null,
      title: "No title",
      description: "No description",
      photoUrl: null, // image url before it gets uploaded
      
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleTitle(e) {
    this.setState({ title: e.currentTarget.value })
  }

  handleDescription(e) {
    this.setState({ description: e.currentTarget.value })
  }





  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title)
    formData.append('photo[description]', this.state.description)
    formData.append('photo[photo]', this.state.photoFile);
    $.ajax({
      url: '/api/user/photos',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    })
    // .then(
    //   (response) => console.log(response.message),
    //   (response) => console.log(response.responseJSON))
      .then(() => this.props.history.push(`/explore`)) ;
  }

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;

    return (
      <>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text"
            onChange={this.handleTitle.bind(this)}
            placeholder="Title" />
          <input type="text"
            onChange={this.handleDescription.bind(this)}
            placeholder="Description" />
          <input type="file"
            accept="image/*"
            onChange={this.handleFile.bind(this)} />
          <h3>Image Preview</h3>
          {preview}
          <button>Submit your creation</button>
        </form>
      </>
    )
  }
}





export default PhotoUpload