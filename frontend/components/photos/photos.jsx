import React from 'react'
import { Link } from 'react-router-dom'

class Photos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            photoFile: null,
            title: "",
            description: "",
            photoUrl: null, // image url before it gets uploaded

        }
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.props.allPhotos();
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result});
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
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
        }).then(
            (response) => console.log(response.message),
            (response) => console.log(response.responseJSON)
        );
    }
    
    render(){
        console.log(this.state);
        const preview = this.state.photoUrl  ? <img src={this.state.photoUrl} />  : null;
        let cont = this.props.photos;
        if(!cont) return null;
        const allPhotos = (
            <ul className='gridPhotos'>
                {cont.map(photo => (
                    <Link key={photo.id}  to={`/photos/${photo.id}`}> 
                        <img src={photo.picture_url} alt="img of something but now broke" className='explorePhotos'  />
                    </Link>
                ))}
            </ul>
        )
        return (
            <>
            <form onSubmit={this.handleSubmit.bind(this)}>

            <input type="file" 
            onChange={this.handleFile.bind(this)}/>
            <h3>Image Preview</h3>
            {preview}
            <button>Submit your creation</button>
            </form>
            <div className='gridParent'>
                {allPhotos}
            </div>
            </>
        )
    }
}





export default Photos