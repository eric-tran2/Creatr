import React from 'react'
import { Link } from 'react-router-dom'

class UserShow extends React.Component{
    componentDidMount(){
        this.props.allPhotos();
        this.props.allUsers();
        console.log(this.props.user)
    }

    render() {
        // console.log(this.props.users)
        if (!this.props.users[this.props.user]) {
            return null
        }
        let photos = this.props.photos.map( photo => {
            if(photo.author_id === this.props.user){
                return (
                <div key={photo.id}>
                    <Link key={photo.id}  to={`/photos/${photo.id}`}> 
                        <img className="user-show-photo" src={photo.picture_url} alt="img loading" />
                    </Link>
                </div>
                )
            } else {
                return (null);
            }
        })

        return (
            <>
            <div className="user-banner"> 
                <div className="banner-photo"> 
                    <img src="https://creatr-seed.s3.amazonaws.com/mountains-minimalist-gradient-blue_3840x2160_xtrafondos.com.jpg" alt="logo is broken" className="banner-photo" />
                </div>
                    <div className="user-show-name">
                        {this.props.users[this.props.user].first_name + " " + this.props.users[this.props.user].last_name}
                    </div>
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
