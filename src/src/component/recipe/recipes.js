import React from 'react'
import MyNavBar from '../myNavBar'
import {withRouter} from 'react-router-dom'
class Recipes extends React.Component {

  render(){
    const title = this.props.match.params.name
    return (
      <div>
        <MyNavBar 
          myicon='left'
          title={title}
          onLeftClick={()=>this.props.history.push('/')}
        />
      </div>
    )
  }
}

export default withRouter(Recipes)