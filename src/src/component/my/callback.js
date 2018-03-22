import React from 'react'
import MyNavBar from '../myNavBar'
import {TextareaItem,Button} from 'antd-mobile'
import {createForm} from 'rc-form'
class CallBack extends React.Component {
  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(value)
    })
  }
  render(){
    const {getFieldProps} = this.props.form
    return (
      <div>
        <MyNavBar 
          myicon='left'
          title='信息反馈'
          onLeftClick={()=>this.props.history.push('/')}
        />
        <TextareaItem
          {...getFieldProps('callback', {
            initialValue: '我的意见是...',
          })}
          rows={5}
          count={100}
        />
        <Button 
          size="small" 
          type="primary" 
          onClick={this.submit}
        >提交反馈</Button>
      </div>
    )
  }
}

export default createForm()(CallBack)