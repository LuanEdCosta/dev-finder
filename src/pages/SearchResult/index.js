import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Server from '../../services/Server'
import './styles.scss'

const SearchResult = () => {
  const { user } = useParams()
  const [userData, setUserData] = useState({})
  const [isSearching, setIsSearching] = useState(false)
  const [hadFailed, setHadFailed] = useState(false)

  useEffect(() => {
    const onGetUser = async () => {
      setIsSearching(true)
      try {
        const { data } = await Server.get(`/users/${user}`)
        setUserData(data)
      } catch (e) {
        setHadFailed(true)
      }
      setIsSearching(false)
    }

    onGetUser()
  }, [user])

  return (
    <div className="search-result-page">
      {!isSearching && (
        <div className="searchResult">
          <div className="header">
            <Link to="/" className="backButton">
              <FontAwesomeIcon icon="chevron-left" fixedWidth />
            </Link>
            <h3 className="title">{!hadFailed ? userData.login : 'Error'}</h3>
          </div>
          <div className="body">
            {!hadFailed ? (
              <div className="profile">
                <img className="image" src={userData.avatar_url} alt="User" />
                {(userData.name || userData.bio || userData.location) && (
                  <div className="profileTexts">
                    <div className="title">{userData.name}</div>
                    <div className="subtitle">{userData.bio}</div>
                    <div className="subtitle">{userData.location}</div>
                  </div>
                )}
              </div>
            ) : (
              <div className="user-not-found">
                <FontAwesomeIcon className="icon" icon="times-circle" />
                <h3>User Not Found</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchResult
