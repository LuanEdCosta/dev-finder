import React from 'react'
import './styles.scss'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  const history = useHistory()

  const onFind = () => {
    history.push('/search')
  }

  return (
    <div className="container">
      <div className="searchContainer">
        <div className="titleContainer">
          <h1 className="title">
            <FontAwesomeIcon icon="search" className="icon" />
            <span>Dev Finder</span>
          </h1>
          <h5 className="subtitle">
            Find you favorite devs using the GitHub API
          </h5>
        </div>
        <div className="inputContainer">
          <input
            type="text"
            className="input"
            placeholder="Type the GitHub username"
          />
          <button type="button" className="searchButton" onClick={onFind}>
            Find
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
