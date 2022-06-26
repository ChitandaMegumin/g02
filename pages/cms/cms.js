// pages/cms/cms.js
Page({
  //页面的初始数据
  data:{

  },

  //生命周期函数--监听页面加载
  onLoad: function(options){
    wx.cloud.database().collection('commodity').get()
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