import React,{Component} from 'react'
import {SearchBar} from 'antd-mobile'
import ZCDCAccordion from '../ZCDCAccordion'

class Market extends Component {
  constructor(props){
    super(props)
    this.state=({
      recommend:{},
      markets: [{
        title:'南天菜市场',
        info: [{
          name:'猪肉',
          price:10,
          place:'88号摊位'
        },{
          name:'白菜',
          price:3,
          place:'88号摊位'
        }]
      },{
        title:'人民菜市场',
        info: [{
          name:'猪肉',
          price:10,
          place:'88号摊位'
        },{
          name:'白菜',
          price:3,
          place:'88号摊位'
        }]
      }]
    })
  }
  
  render(){
    const getRecommend = (word)=> {
      console.log(word)
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