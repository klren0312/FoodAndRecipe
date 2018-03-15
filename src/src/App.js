import React, { Component } from 'react';
import {TabBar} from 'antd-mobile';
import Home from './component/home'
import Market from './component/market'
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
    }; 
  }
  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>this is the  “{pageText}” tab</div>
      </div>
    );
  }
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zzes-1251916954.cos.ap-shanghai.myqcloud.com/home.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zzes-1251916954.cos.ap-shanghai.myqcloud.com/homeac.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {/* 首页 */}
            <Home />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zzes-1251916954.cos.ap-shanghai.myqcloud.com/market.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zzes-1251916954.cos.ap-shanghai.myqcloud.com/marketac.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="菜市场"
            key="Market"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {/* 菜市场 */}
            <Market />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zzes-1251916954.cos.ap-shanghai.myqcloud.com/recipe.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zzes-1251916954.cos.ap-shanghai.myqcloud.com/recipeac.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="菜谱"
            key="Recipe"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('Recipe')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zzes-1251916954.cos.ap-shanghai.myqcloud.com/my.svg' }}
            selectedIcon={{ uri: 'https://zzes-1251916954.cos.ap-shanghai.myqcloud.com/myac.svg' }}
            title="我的"
            key="My"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default App;
