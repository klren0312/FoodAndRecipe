import React from 'react'
import {Grid,WhiteSpace,List,Checkbox} from 'antd-mobile'
import './index.css'
const CheckboxItem = Checkbox.CheckboxItem;
class My extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      shoppingList:[
        { value: 0, label: '买鸡蛋' },
        { value: 1, label: '买大白菜' },
        { value: 2, label: '买萝卜' },
      ]
    }
  }
  onChange = (val) => {
    console.log(val);
  }
  addShoppingList = () => {
    return (
      <div>
        <span>购物清单</span>

      </div>
    )
  }
  render() {
    
    const data = Array.from(new Array(4)).map((_val, i) => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `name${i}`,
    }))
    return (
      <div>
        <div className="person">
          <div className="user">klren</div>
        </div>
        <WhiteSpace />
        <div>
          <Grid data={data} square   onClick={_el => console.log(_el)} />
        </div>
        {/* Shopping List */}
        <List renderHeader={() => {}}>
          {this.state.shoppingList.map(i => (
            <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
              {i.label}
            </CheckboxItem>
          ))}
        </List>
      </div>
    )
  }
}
export default My