import React from 'react'
import { Link } from 'react-router-dom'

class Photos extends React.Component{
    componentDidMount(){
        this.props.allPhotos();
    }

    render(){
        let cont = this.props.photos;
        if(!cont) return null;
        const allPhotos = (
            <ul>
                {cont.map(photo => (
                    <li key={photo.id}><img src={photo.picture_url} alt="img of something but now broke" className='explorePhotos' /></li>
                ))}
            </ul>
        )
        return (
            <>
                {allPhotos}
            </>
        )
    }
}





export default Photos