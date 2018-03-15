import React,{Component} from 'react'
import {SearchBar} from 'antd-mobile'


class Market extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <SearchBar placeholder="搜索菜市场" ref={ref => this.autoFocusInst = ref} />
    )
  }
}

export default Market;