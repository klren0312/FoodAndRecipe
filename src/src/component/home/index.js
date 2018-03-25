import React,{Component} from 'react'
import { Carousel,NoticeBar,List,Checkbox   } from 'antd-mobile'
import './index.css'
import {withRouter} from 'react-router-dom'
import axios from '../../util'
const Item = List.Item;
const CheckboxItem = Checkbox.CheckboxItem;
class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      shoppingList: [
        {id:0, label: '买鸡蛋' ,checked:true},
        {id:1, label: '买大白菜',checked:true },
        {id:2, label: '买萝卜',checked:true },
      ],
      news:[],
      topnews:'',
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 0
    }
  }
  componentDidMount() {
    // 请求头条
    axios.request({
      url:'/topnews',
      method:'get'
    }).then(res=>{
      this.setState({
        topnews:res.data.topnews
      })
    })
    //请求通知
    axios.request({
      url:'/news',
      method:'get'
    }).then(res=>{
      this.setState({
        news:res.data.news
      })
    })
    //请求购物清单
    axios.request({
      url:'/shoppinglist',
      method:'get'
    }).then(res=>{
      this.setState({
        shoppingList:res.data.shoppingList
      })
    })
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['16160674/thumb_raw_1515291682.jpeg', '16161362/thumb_raw_1515296260.png' ],
      });
    }, 100);
  }
  onChange = (val) => {
    console.log(val);
  }
  render(){
    return(
      <div>
        {/* 滚动通知 */}
        <NoticeBar mode="closable" action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}>
          {this.state.topnews}
        </NoticeBar>
        {/* 滑动图 */}
        <Carousel
          autoplay={false}
          infinite
          selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="javascript(void);"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://modao.cc/uploads3/images/1616/${val}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        {/* 通知栏 */}
        <List renderHeader={() => '通知栏'} className="my-list">
          {this.state.news.map((v,i)=>{
            return <Item onClick={()=>this.props.history.push('/news/'+v.id)} key={i} extra={v.date}>{v.title}</Item>
          })}  
        </List>
        {/* Shopping List */}
        <List  renderHeader={() => '购物清单'} className="my-list">
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

export default withRouter(Home)