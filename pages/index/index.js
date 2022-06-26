// pages/cms/cms.js
Page({
  //页面的初始数据
  data:{

  },
  //go事件
  go:function(){
    wx.navigateTo({
      url: '../cms/cms',
    })
  },
  //生命周期函数--监听页面加载
  onLoad: function(options){
    wx.cloud.database().collection('orders').get()
      .then(res =>{
        console.log('请求到的数据',res)
        this.setData({
          list: res.data
        })
      })
  },

  //用户点击右上角分享
  onShareAppMessage: function(){

  }
})