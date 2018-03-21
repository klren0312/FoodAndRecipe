import React from 'react'
import {Flex,WhiteSpace} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import './index.css'

class My extends React.Component {
  render() {
    return (
      <div>
        <div className="person">
          <div className="user">klren</div>
        </div>
        <WhiteSpace />
        <div>
          <Flex>
            <Flex.Item>
              <div onClick={()=>this.props.history.push('/callback')} className="feature">
                <img className="feature-icon" alt="callback" src="https://zzes-1251916954.cos.ap-shanghai.myqcloud.com/callback.svg" />
              </div>
            </Flex.Item>
            <Flex.Item>
            <div onClick={()=>this.props.history.push('/todolist')} className="feature">
              <img className="feature-icon" alt="todolist" src="https://zzes-1251916954.cos.ap-shanghai.myqcloud.com/todolist.svg" />
            </div>
            </Flex.Item>
          </Flex>
        </div>
        
      </div>
    )
  }
}
export default withRouter(My)