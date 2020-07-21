// pages/main/main.js
Page({

  /**
   * 页面的初始数据  数据源
   */
  data: {
    isLeft:true,
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    duration: 500,
    circular: true,
    imgUrls:[
      'http://n.sinaimg.cn/sinacn/w1338h922/20180124/10d3-fyqwiqk2774812.jpg',
      'http://img1.gtimg.com/chinanba/pics/hv1/216/94/2322/151012236.jpg',
      'http://imgsports.eastday.com/sports/img/201705181131347951.jpeg'
   
    ],
    movieList: [
      {
         isShow: 0,
         name: "第一次的离别",
        imgUrl: "https://p1.meituan.net/moviemachine/4ea68a0de8949d99fd7ff426b84d3c381761878.jpg@1l_1e_1c_128w_180h",
         actor: "艾萨·亚森,凯丽比努尔·热合米图力,艾力乃孜·热合米图力",
       time: "2020-07-20",
        wantSee: '9745'
       },
       {
         isShow: 1,
         name: "璀璨薪火3D",
        imgUrl: "https://p1.meituan.net/moviemachine/4ea68a0de8949d99fd7ff426b84d3c381761878.jpg@1l_1e_1c_128w_180h",
         actor: "",
         time: "2020-07-20",
         wantSee: '1248'
       }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  tapChangeHot(){
    this.setData({
      isLeft: true
    })
  },
  tapChangeWaiting(){
    //console.log('点击了即将上映')
    this.setData({
      isLeft: false
    })
  }, //functiong tapChangewaiting(){}

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})