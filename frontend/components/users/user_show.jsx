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
                        <img className="user-show-photo" src={photo.picture_url} alt="img of something but now broke" />
                    </Link>
                </div>
                )
            } else {
                return (null);
            }
        })

        return (
            <>
            <div> USER NAME

            </div>
                <hr/>
                <div className="photostream-text">Photostream</div>
                <hr/>
            <div className='user-show-grid'>
                {photos}
            </div>
            </>
        )
    }
}

export default UserShow;
