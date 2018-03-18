import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Tips from './component/home/tips'
const Router = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route  exact path='/' component={App}/>
        <Route  exact path='/ttt' component={Tips}/>
        <Route render={() => '404'}/>
      </Switch>
    </BrowserRouter>
  </main>
)

export default Router