import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Tips from './component/home/tips'
import Recipes from './component/recipe/recipes'
const Router = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route  exact path='/' component={App}/>
        <Route  exact path='/news/:id' component={Tips}/>
        <Route  exact path='/recipes/:name' component={Recipes}/>
        <Route render={() => '404'}/>
      </Switch>
    </BrowserRouter>
  </main>
)

export default Router