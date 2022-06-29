// pages/goodsselect/goodsselect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    customer:[],
    goodsfortype:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options){
      this.getGoods()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  getGoods(){
    wx.cloud.callFunction({
      name: 'getCommodityAll'
    }).then(res =>{
        console.log('获取全部商品云函数调用成功',res)
        this.setData({
          goods: res.result.data
        })
    }).catch(res=>{
      console.log('失败',res)
    })

    wx.cloud.callFunction({
      name: 'getUserAll'
    }).then(res =>{
        console.log('获取全部客户调用成功',res)
        this.setData({
          customer: res.result.data
        })
    }).catch(res=>{
      console.log('失败',res)
    })

    wx.cloud.callFunction({
      name: 'getTypeAll'
    }).then(res =>{
        console.log('获取商品类型成功',res)
        this.setData({
          goodsfortype: res.result.data
        })
    }).catch(res=>{
      console.log('失败',res)
    })
  },
  gotohome(){
    wx.redirectTo({
      url: '/pages/home/home',
      
    })
  },
  gotogoodsselect(){
    wx.redirectTo({
      url: '/pages/goodselect/goodselect',
      
    })
  },
  gotoorder(){
    wx.redirectTo({
      url: '/pages/order/order',
    })
  },
  gotomy(){
    wx.redirectTo({
      url: '/pages/my/my',
    })
  }
})

