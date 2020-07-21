//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  //   markers:[{
  //     iconPath: "/resources/lo.png",
  //     id: 0,
  //     latitude:28.720513,
  //     longitude: 115.834895,
  //     width: 50,
  //     height: 50
  //   },{
  //     iconPath: "/resources/bcl.png",
  //     id: 1,
  //     latitude: 28.720413,
  //     longitude: 115.834695,
  //     width: 50,
  //     height: 50
  //   },{
  //     iconPath: "/resources/bcl.png",
  //     id: 2,
  //     latitude: 28.720613,
  //     longitude: 115.834795,
  //     width: 50,
  //     height: 50
  //   }
  // ],
  articleList: [],
  isHidden: false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {  
      setTimeout(() => {
    this.setData({
      articleList: [{
        date: '6月27日',
        articles:[{
          id: 0,
          title: 'aaa',
          pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2834999481,1380824893&fm=26&gp=0.jpg',

        }, {
          id: 1,
          title: 'bbb',
          pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2834999481,1380824893&fm=26&gp=0.jpg',
        }]
      }, {
        date: '6月26日',
        articles:[{
          id: 3,
          title: 'ccc',
          pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2834999481,1380824893&fm=26&gp=0.jpg',

        }, {
          id: 4,
          title: 'ddd',
          pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2834999481,1380824893&fm=26&gp=0.jpg',
        }]
      }],
      isHidden: true
    })
  }, 2000)
},
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
