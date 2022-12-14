import React from 'react'
import "../../App.css"

const BrowseBooks = () => {
  return (
    <div className='main-title-Browse'>
      <h1 className='browse-h1'>My Book Adventures</h1><br />
      <h2 className='browse=h2'>What Book Would You Like To Find Today?</h2> <br />
      <input type="text" /><br /><br />
      <button className='browse-search-btn'>Search</button>
    </div>
  )
}

export default BrowseBooks
