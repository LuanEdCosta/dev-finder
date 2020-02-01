import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
import Home from '../Home'
import SearchResult from '../SearchResult'
import PageNotFound from '../PageNotFound'

// The process.env.PUBLIC_URL will be empty in development
// and dev-finder in production

const App = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search/:user">
          <SearchResult />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App
