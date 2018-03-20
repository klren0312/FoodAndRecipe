import React,{Component} from 'react'
import { Carousel,NoticeBar,List,Checkbox   } from 'antd-mobile'
import './index.css'
import {withRouter} from 'react-router-dom'
const Item = List.Item;
const CheckboxItem = Checkbox.CheckboxItem;
class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      shoppingList: [
        { value: 0, label: '买鸡蛋' },
        { value: 1, label: '买大白菜' },
        { value: 2, label: '买萝卜' },
      ],
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 0
    }
  }
  componentDidMount() {
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
          今天南天菜市场关停一天
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
          <Item onClick={()=>this.props.history.push('/news/ttt')} key='1' extra={'2018/1/12'}>今天所以菜市场菜品半价！</Item>
          <Item key='2' extra={'2018/1/12'}>今天所以菜市场菜品半价！</Item>
          <Item key='3' extra={'2018/1/12'}>今天所以菜市场菜品半价！</Item>
        </List>
        {/* Shopping List */}
        <List renderHeader={() => '购物清单'}>
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

export default withRouter(Home)