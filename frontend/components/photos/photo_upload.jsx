import React from 'react'
import { Link } from 'react-router-dom'

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.history)
    this.state = {
      photoFile: null,
      title: "No title",
      description: "No description",
      photoUrl: null, // image url before it gets uploaded
      loading: !!props.photoId && !props.photos[props.photoId]
      
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentDidMount(){
    if (this.state.loading) {
      this.props.requestPhoto(this.props.photoId).then(
        () => this.setState({loading: false})
      );
    } 
  }

  componentDidUpdate() {
    if (!this.props.photoId) return;

    const photo = this.props.photos[this.props.photoId];
    if (photo && photo.author_id !== this.props.currentUserId) this.props.history.push("/explore");
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
    if (this.props.photoId) {
      formData.append('photo[photo]', this.state.photoFile);
      $.ajax({
        url: `/api/photos/${this.props.photoId}`,
        method: 'PATCH',
        data: formData,
        contentType: false,
        processData: false})
        .then(() => this.props.history.push(`/photos/${this.props.photoId}`))
    }
    else 
    {formData.append('photo[photo]', this.state.photoFile);
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
      .then(() => this.props.history.push(`/explore`))} ;
  }

  render() {
    const preview = this.state.photoUrl ? <img id="upload-preview" src={this.state.photoUrl} /> : null;
    if (this.state.loading) {
      return null
    }
    return (
      <>
      <div className="upload-form">
          <form onSubmit={this.handleSubmit.bind(this)}>
        { this.state.photoUrl || this.props.photoId ? 
        <>
        <button className="update-button">{this.props.photoId ? "Update photo" : "Submit your creation"}</button>
          <br />
            <input type="text"
              onChange={this.handleTitle.bind(this)}
              placeholder="Title" 
              className="upload-title"/>
            <br/>
            <br/>
            <br/>
            <input type="text"
              onChange={this.handleDescription.bind(this)}
              placeholder="Description" 
              className="upload-description"/>
              </> 
              : 
              null}

            <div className="upload-photo-background">
            {preview}
            </div>
            {  
              this.props.photoId ? <img src={this.props.photos[this.props.photoId].picture_url} /> :
              <>
              <input type="file"
                accept="image/*"
                id="file"
                onChange={this.handleFile.bind(this)}
                />
              <div className="submitUploadButton">
              <label className="submit-upload-button" htmlFor="file">Choose photos to upload</label>
              </div>
            </> 
            }
          </form>
        </div>
      </>
    )
  }
}

        // <button>{this.props.photoId ? "Update photo" : "Submit your creation"}</button>





export default PhotoUpload