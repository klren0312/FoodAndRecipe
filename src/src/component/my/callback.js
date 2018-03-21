import React from 'react'
import MyNavBar from '../myNavBar'
import {InputItem} from 'antd-mobile'
import {createForm} from 'rc-form'
class CallBack extends React.Component {
  render(){
    const {getFieldProps} = this.props.form
    return (
      <div>
        <MyNavBar 
          myicon='left'
          title='信息反馈'
          onLeftClick={()=>this.props.history.push('/')}
        />
        <InputItem
          {...getFieldProps('callback')}
          placeholder="请输入您的反馈"
        >
        </InputItem>
      </div>
    )
  }
}

export default createForm()(CallBack)