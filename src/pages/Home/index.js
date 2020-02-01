import React, { useState } from 'react'
import './styles.scss'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  const [searchText, setSearchText] = useState('')
  const history = useHistory()

  const onFind = (e) => {
    e.preventDefault()
    if (searchText && searchText.trim()) {
      history.push(`/search/${searchText.trim()}`)
    }
  }

  return (
    <div className="home-page">
      <div className="searchContainer">
        <div className="titleContainer">
          <h1 className="title">
            <FontAwesomeIcon icon="search" className="icon" />
            <span>Dev Finder</span>
          </h1>
          <p className="subtitle">
            Find your favorite devs using the GitHub API
          </p>
        </div>
        <form className="inputContainer" onSubmit={onFind}>
          <input
            type="text"
            className="input"
            placeholder="GitHub Username"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit" className="searchButton">
            Find
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
