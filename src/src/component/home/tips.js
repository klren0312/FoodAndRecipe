import React from 'react'
import MyNavBar from '../myNavBar'
import {withRouter} from 'react-router-dom'
class Tips extends React.Component {

  render(){
    return (
      <div>
        <MyNavBar 
          myicon='left'
          title='通知'
          onLeftClick={()=>this.props.history.push('/')}
        />
      </div>
    )
  }
}

export default withRouter(Tips)