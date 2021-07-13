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
            </>
        )
    }
}





export default Photos