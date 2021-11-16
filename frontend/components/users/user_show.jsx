import React from 'react'
import { Link } from 'react-router-dom'

class UserShow extends React.Component{
    componentDidMount(){
        this.props.allPhotos();
    }

    render() {
        let photos = this.props.photos.map( photo => {
            if(photo.author_id === this.props.user){
                return (
                <div key={photo.id}>
                    <Link key={photo.id}  to={`/photos/${photo.id}`}> 
                        <img src={photo.picture_url} alt="img of something but now broke" />
                    </Link>
                </div>
                )
            } else {
                return (null);
            }
        })

        return (
            <div>
                {photos}
            </div>
        )
    }
}

export default UserShow;