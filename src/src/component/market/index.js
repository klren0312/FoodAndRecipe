import React,{Component} from 'react'
import {Picker,List} from 'antd-mobile'
import {district} from 'antd-mobile-demo-data'


class Market extends Component {
  render(){
    return(
      <div>
        <Picker extra="请选择（可选）"
          data={district}
          title="Areas"
          {...getFieldProps('district',{
            initialValue:['340000','3415000','341502'],
          })}
          onOk={e => console.log('ok',e)}
          onDismiss={e => console.log('dismiss', e)}
        >
          <List.Item arrow="horizontal"> Multiple & cascader </List.Item>
        </Picker>
      </div>
    )
  }
}