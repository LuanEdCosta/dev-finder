import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../Home'
import SearchResult from '../SearchResult'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search" exact>
          <SearchResult />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
