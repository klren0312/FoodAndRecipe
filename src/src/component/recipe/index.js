import React from 'react'
import {SearchBar} from 'antd-mobile'
import Results from './results'
import './index.css'

class Recipe extends React.Component {
  constructor(props){
    super(props)
    this.state={
      results:[{
        title:'西红柿炒鸡蛋',
        img:'http://5b0988e595225.cdn.sohucs.com/images/20170715/989d5e69028a40acb43515b9a2fc2808.jpeg',
        content:'1. 把大番茄放入容器里；倒入开水浸泡2分钟，让番茄在热水里翻滚一会；这样可以轻松去掉番茄的外皮',
        link:'/ttt/t',
        footer:'2018.3.19'
      },{
        title:'西红柿炒鸡蛋',
        img:'http://5b0988e595225.cdn.sohucs.com/images/20170715/989d5e69028a40acb43515b9a2fc2808.jpeg',
        content:'1. 把大番茄放入容器里；倒入开水浸泡2分钟，让番茄在热水里翻滚一会；这样可以轻松去掉番茄的外皮',
        link:'/ttt/t',
        footer:'2018.3.19'
      }]
    }
  }

  render() {
    const getRecommend = ()=>{
      
    }
    return (
      <div>
        <SearchBar placeholder='搜索菜谱' ref={ref=>this.autoFocusInst=ref} onChange={getRecommend} />
        
        <Results results={this.state.results} />
      </div>
    )
  }
}

export default Recipe
