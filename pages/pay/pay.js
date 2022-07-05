// pages/pay/pay.js
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: '12:00',
    goodsincart:[],
    totalnum:0,
    totalprice:0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.countTotalPrice()
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

  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  countTotalPrice(){
    let temp = 0 
    let currentnum=0
    this.setData({
      goodsincart:wx.getStorageSync('cartList')
    })
    for(let idx in this.data.goodsincart){      
      temp = temp + this.data.goodsincart[idx].Commodity_currentnum* this.data.goodsincart[idx].Commodity_price
      currentnum = currentnum+this.data.goodsincart[idx].Commodity_currentnum
    }
    console.log('目前总数',temp)
    this.setData({
      totalnum:currentnum,
      totalprice:temp.toFixed(2)
    })
  },
  gotopay(event){
    wx.showToast({
      title: '支付成功！',
      icon: 'success',
      duration: 1500
    })
    wx.cloud.database().collection('orders').add({
      data:{
        name:"Apple_4027534",
        goods:wx.getStorageSync('cartList'),
        status:0
      }
    }).then(res=>{
      console.log(res)
    })
    for(let idx in this.data.goodsincart){      
      wx.cloud.callFunction({
        name: 'updateGoodsNum',
        data: {
          goods:this.data.goodsincart[idx],
        }
      }).then(res =>{
          console.log('调用成功',res)
      }).catch(res=>{
        console.log('失败',res)
      })
    }
    wx.removeStorageSync('cartList')
    while(app.globalData.cartList.length){
      app.globalData.cartList.splice(0, 1)
    }
    setTimeout(() => {   
      wx.redirectTo({
        url: '/pages/myOrder/myOrder',
      })
      },1500)
    },
    
})
