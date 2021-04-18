// pages/socket/socket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  sendMessage: function () {
    let socketOpen = false;
    let data = {
      id: "666"
    }
    let socketMessageQueue = JSON.stringify(data);
    wx.connectSocket({
      url: 'ws://localhost:8888',
    })
    wx.onSocketOpen((res) => {
      console.log("websocked连接已经打开")
      socketOpen = true;
      console.log("数据发送中..." + socketMessageQueue)
      snedSocketMsg(socketMessageQueue)
    })

    function snedSocketMsg(msg) {
      if (socketOpen) {
        wx.sendSocketMessage({
          data: msg,
        })
      } else {
        socketMessageQueue.push(msg)
      }
    }
    wx.onSocketError((result) => {
      console.log("sockedt连接打开失败，请检查")
    })
    wx.onSocketMessage((result) => {
      console.log("收到服务器内容是:"+JSON.stringify(res))
    })

  }
})