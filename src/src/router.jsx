import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
const Router = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route  exact path='/' component={App}/>
        <Route  exact path='/ttt' component={()=>'test'}/>
        <Route render={() => '404'}/>
      </Switch>
    </BrowserRouter>
  </main>
)

export default Router