import React from 'react'
import { Link } from 'react-router-dom'

class Photos extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.allPhotos();
        this.props.allFavorites();
        // this.props.allUsers();
    }

    render(){
        let cont = this.props.photos;
        if(!cont) return null;
        const allPhotos = (
            <ul className='gridPhotos'>
                {cont.reverse().map(photo => (
                    <Link key={photo.id}  to={`/photos/${photo.id}`}> 
                        <img src={photo.picture_url} alt="img of something but now broke" className='explorePhotos'  />
                    </Link>
                ))}
            </ul>
        )
        return (
            <>
            <div className='gridParent'>
                {allPhotos}
            </div>
            </>
        )
    }
}





export default Photos