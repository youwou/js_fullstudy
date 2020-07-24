// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts:[],
    totalPrice:0,
    selectAllStatus:false


  },
 selectAll(){
   //来回改变数据源中的selectAllStatus
   let selectAllStatus = this.data.selectAllStatus
   selectAllStatus = !selectAllStatus
   //把cart数据
   let cart = this.data.carts
   for (let i = 0; i < carts.length; i++){
     carts[i].select = selectAllStatus
   }
    this.setData({
        selectAllStatus:selectAllStatus,
        carts:carts
      })
    },
  selectList(e){
    // 让当前这条数据里面的selected值取反
      let index = e.currentTarget.dataset.index;
      
    },
  getTotalPrice( ){
    //拿到carts数组中的每一条selected为true的数组，用数组乘以价格
    let carts = this.data,carts
    for(let i = 0;i < carts.length;i++){
      if(carts[i].selected){
        total

      }

    }
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