import React from 'react'
import { Link } from 'react-router-dom'

class Photos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            photoFile: null,
            title: "",
            description: "",

        }
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.props.allPhotos();
    }

    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0]})
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
        let cont = this.props.photos;
        if(!cont) return null;
        const allPhotos = (
            <ul className='gridPhotos'>
                {cont.map(photo => (
                <img src={photo.picture_url} alt="img of something but now broke" className='explorePhotos' key={photo.id} />
                ))}
            </ul>
        )
        return (
            <>
            <div className='gridParent'>
                {allPhotos}
            </div>
            <form onSubmit={this.handleSubmit.bind(this)}>

            <input type="file" 
            onChange={this.handleFile.bind(this)}/>
            <button>Submit your creation</button>
            </form>
            </>
        )
    }
}





export default Photos