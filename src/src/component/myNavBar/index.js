import React from 'react'
import {NavBar,Icon} from 'antd-mobile'

class MyNavBar extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const {title,myIcon,leftClick} = this.props
    return (
      <div>
        <NavBar
          mode='light'
          icon={<Icon type={myIcon} />}
          {...this.props}
        >
          {title}
        </NavBar>
      </div>
    )
  }
}

export default MyNavBar