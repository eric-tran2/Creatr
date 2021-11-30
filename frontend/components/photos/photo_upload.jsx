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
      <div className="uploadForm">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <button>Submit your creation</button>
            <br />
            <input type="text"
              onChange={this.handleTitle.bind(this)}
              placeholder="Title" 
              className="uploadTitle"/>
            <br/>
            <br/>
            <br/>
            <input type="text"
              onChange={this.handleDescription.bind(this)}
              placeholder="Description" 
              className="uploadDescription"/>
            <input type="file"
              accept="image/*"
              id="file"
              onChange={this.handleFile.bind(this)}
              />
            <label htmlFor="file">Choose photos to upload</label>
            <div className="submitUploadButton">
            </div>
            <div>
            {preview}
            </div>
          </form>
        </div>
      </>
    )
  }
}





export default PhotoUpload