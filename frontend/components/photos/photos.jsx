import React from 'react'
import { Link } from 'react-router-dom'

class Photos extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.allPhotos();
        this.props.allFavorites();
    }

    render(){
        const { photos } = this.props
        if (!photos) return null
        return (
            <>
                <div className='gridParent'>
                    {photos.reverse().map(photo => (
                        <Link key={photo.id}  to={`/photos/${photo.id}`}> 
                            <img src={photo.picture_url} alt="img loading" className='img' />
                        </Link>
                    ))}
                </div>
            </>
        )
    }
}





export default Photos