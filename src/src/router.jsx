import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Tips from './component/home/tips'
import Recipes from './component/recipe/recipes'
import TodoList from './component/my/todolist'
import CallBack from './component/my/callback'
const Router = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route  exact path='/' component={App}/>
        <Route  exact path='/news/:id' component={Tips}/>
        <Route  exact path='/recipes/:name' component={Recipes}/>
        <Route  exact path='/callback' component={CallBack} />
        <Route  exact path='/todolist' component={TodoList} />
        <Route render={() => '404'}/>
      </Switch>
    </BrowserRouter>
  </main>
)

export default Router