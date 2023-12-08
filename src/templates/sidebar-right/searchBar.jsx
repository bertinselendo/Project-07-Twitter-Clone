import React from 'react'
import SearchIcon from '../icons/search'

export default function SearchBar() {
  return (
    <>
      <div className="search-bar">
        <form action="">
          <span className="icon-search"><SearchIcon /></span>
          <input type="text" placeholder="Rechercher" />
        </form>
      </div>
    </>
  )
}
