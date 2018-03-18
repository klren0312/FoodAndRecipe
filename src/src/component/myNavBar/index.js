import React from 'react'
import {NavBar,Icon} from 'antd-mobile'

class MyNavBar extends React.Component {

  render(){
    const {title,myicon} = this.props
    return (
      <div>
        <NavBar
          mode='light'
          icon={<Icon type={myicon} />}
          {...this.props}
        >
          {title}
        </NavBar>
      </div>
    )
  }
}

export default MyNavBar