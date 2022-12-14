import React from 'react'
import "../App.css"

const FavoriteBooksScreen = () => {
  return (
    <div>
      <h1 className="favorite-h1">My Favorite Books!</h1>
      <div className="favorite-container">
      <button className='add-another-btn'>Add Another Favorite</button>
      </div>
    </div>
  )
}

export default FavoriteBooksScreen
