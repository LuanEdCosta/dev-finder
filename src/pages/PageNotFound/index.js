import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>Page Not Found</h1>
      <Link to="/" className="goBack">
        Go Back to Home
      </Link>
    </div>
  )
}

export default PageNotFound
