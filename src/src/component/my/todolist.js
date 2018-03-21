import React from 'react'
import MyNavBar from '../myNavBar'
import {Button,List,Checkbox,InputItem} from 'antd-mobile'
import {createForm} from 'rc-form'
import './index.css'
const CheckboxItem = Checkbox.CheckboxItem;
class TodoList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      shoppingList:[
        {id:0, label: '买鸡蛋' ,checked:true},
        {id:1, label: '买大白菜',checked:true },
        {id:2, label: '买萝卜',checked:true },
      ]
    }
  }
  onChange = (val) => {
    console.log(val)
  }
  submit = () => {
    this.props.form.validateFields((error, value) => {
      let arr = this.state.shoppingList
      arr.push({id:arr[arr.length-1].id+1,label:value.todolist,checked:false})
      this.setState({
        shoppingList:arr
      })
    })
  }

  render(){
    const {getFieldProps} = this.props.form
    return (
      <div>
        <MyNavBar 
          myicon='left'
          title='购物清单'
          onLeftClick={()=>this.props.history.push('/')}
        />
        {/* add */}
        <InputItem
          {...getFieldProps('todolist')}
          placeholder="请输入物品名称"
        >
          
        </InputItem>
        <Button size="small" type="primary" onClick={this.submit}>添加</Button>
         {/* Shopping List */}
        <List  renderHeader={() => {}}>
          {this.state.shoppingList.map((v,i)=> (
            <CheckboxItem key={i} onChange={() => this.onChange(v.label)} checked={v.checked}>
              {v.label}
            </CheckboxItem>
          ))}
        </List>
      </div>
     
    )
  }
}

export default createForm()(TodoList)