# 农产品管理与菜谱推荐

## 技术

 - cordova
 - react
 - ant.design

## 使用cordova插件

 - `cordova-plugin-splashscreen` 启动页插件

## 使用命令
1.开发页面
```
$ cd src
$ yarn install
$ yarn start
```
2.生产页面
```
$ cd src
$ yarn build
$ cd ..
$ cordova platform add android
$ cordova run android
```

## ChangeLog

 - 2018/1/11 框架搭建
 - 2018/1/12 首页页面和启动页
 - 2018/2/13 首页修正
 - 2018/3/15 底部栏图片修改，添加菜市场搜索框
 - 2018/3/17 菜市场页面开发
 - 2018/3/18 添加react router v4 暂时还未测试，添加navbar组件
