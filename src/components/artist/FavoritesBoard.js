import React from 'react'
import ReactPlayer from "react-player"

const FavoritesBoard = (props) => {

    const favorites = props.favorites ? props.favorites.map((favorite, id) =>
    <ReactPlayer 
    className='react-player'
    key={id}
    url={favorite.link}
    width='100%'
    height='50%'
    />):<div>LOADINGGGGG</div>
    
        return (
            <div className='favorites-insert'>
            {favorites}
            </div>
        )
}

export default FavoritesBoard