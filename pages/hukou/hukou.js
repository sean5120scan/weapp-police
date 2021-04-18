// pages/hukou/hukou.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    freeData:[
      {
        id:0,
        matName:"【武汉】流动人口居住登记",
        prodaysremark: "工作日",
        promisdays: "3",
        emsneed:"Y",
        matProp:"1"
      },
      {
        id:1,
        matName:"【全省】 婚生子女登记户口",
        prodaysremark: "工作日",
        promisdays: "5",
        emsneed:"Y",
        matProp:"1"
      },
      {
        id:2,
        matName:"【武汉】 大学毕业生落户",
        prodaysremark: "工作日",
        promisdays: "2",
        emsneed:"Y",
        matProp:"1"
      },
      {
        id:3,
        matName:"【武汉】流动人口居住登记",
        prodaysremark: "工作日",
        promisdays: "3",
        emsneed:"Y",
        matProp:"1"
      },
      {
        id:4,
        matName:"【武汉】首次申领居住证",
        prodaysremark: "工作日",
        promisdays: "15",
        emsneed:"N",
        matProp:"1"
      },
      {
        id:5,
        matName:"【武汉市以外其他市州】城市家庭户分户",
        prodaysremark: "工作日",
        promisdays: "3",
        emsneed:"Y",
        matProp:"2"
      },
      {
        id:6,
        matName:"【全省】 人才中心集体户立户",
        prodaysremark: "工作日",
        promisdays: "20",
        emsneed:"Y",
        matProp:"2"
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

  },
  ask:function(){
    wx.navigateTo({
      url: '../socket/socket',
    })
  }
})