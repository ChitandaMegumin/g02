// pages/yunhanshu/yunhanshu.js
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
    //云函数的调用
    // wx.cloud.callFunction({ //读取所有商品
    //   name: 'testgetall'
    // })
    // .then(res =>{
    //   console.log('成功',res)
    //   this.setData({
    //     list: res.result.data
    //   })
    // })
    // .catch(res=>{
    //   console.log('失败',res)
    // }),
    
    wx.cloud.callFunction({ //修改某个商品的库存，这里仅作示例，id和库存定死
      name: 'updatecommodity',
      data: {
        id: "8f75309d62b806bb0a5bdd0d363d2fc1",
        num: 648 //这里填参数
      }
    })
    .then(res =>{
      console.log('更新库存成功',res)
      this.setData({
        list: res.result.data
      })
    })
    .catch(res=>{ //会报错，但其实更新成功了
      console.log('更新库存失败',res)
    })
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