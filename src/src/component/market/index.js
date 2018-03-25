import React,{Component} from 'react'
import {SearchBar} from 'antd-mobile'
import ZCDCAccordion from '../ZCDCAccordion'
import axios from '../../util'
class Market extends Component {
  constructor(props){
    super(props)
    this.state=({
      recommend:{},
      markets: []
    })
  }
  componentDidMount(){
    axios.request({
      url:'/allmarket',
      method:'get'
    }).then(res=>{
      this.setState({
        markets:res.data.market
      })
    })
  }
  
  render(){
    const getRecommend = (word)=> {
      // console.log(word)
    }
    return(
      <div>
        <SearchBar placeholder="搜索菜市场" ref={ref => this.autoFocusInst = ref} onChange={getRecommend}/>
        <ZCDCAccordion details={this.state.markets} />
      </div>
      
    )
  }
}

export default Market;