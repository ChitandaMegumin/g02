// pages/goodsselect/goodsselect.js
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    customer:[],
    goodsfortype:[],
    gettest:[],
    pricenum:0,
    goodsintype:[],
    currentType:0,
    goodsincart:[],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options){
      this.getGoods()
      this.getType()
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
      name: 'testgetall'
    }).then(res =>{
        console.log('获取全部商品云函数调用成功',res)
        this.setData({
          goods: res.result.data
        })
    }).catch(res=>{
      console.log('失败',res)
    })
  },
  getType(){
    wx.cloud.callFunction({
      name: 'getAllType'
    }).then(res =>{
        console.log('获取全部商品云函数调用成功',res)
        this.setData({
          goodsfortype: res.result.data
        })
    }).catch(res=>{
      console.log('失败',res)
    })
  },
  getcurrentIndex(event){
    let id = event.currentTarget.dataset.id
    console.log(id)
    let index =event.currentTarget.dataset.index
    this.setData({
      currentType:index
    })
    wx.cloud.callFunction({
      name: 'getGoodsForType',
      data: {
        type:id,
      }
    }).then(res =>{
        console.log('调用成功',res)
        this.setData({
          goods: res.result.data
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
      url: '/pages/goodsselect/goodsselect',
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
  },
  addCart(){
    app.globalData.carList.push(this.data.goods)
    this.setData({
      goodsincart:app.globalData.cartList
    })
    wx.setStorageSync('cartList', app.globalData.cartList)
  },
  cartAdd(event){
    let id = event.currentTarget.dataset.id
    let index = -1
    console.log('传递的商品',id)
    console.log('app.globalData.cartList',app.globalData.cartList)
    console.log('index',index)
    id.Commodity_currentnum++
    if(app.globalData.cartList.length == 0){
      id.Commodity_flag=true
      app.globalData.cartList.push(id)
      wx.setStorageSync('cartList', app.globalData.cartList)
    }
    else{
      for(let idx in app.globalData.cartList){
        console.log('定位',idx)
        if(app.globalData.cartList[idx]._id==id._id){
          index=idx
        }
      }
      if(index!=-1){
        app.globalData.cartList[index].Commodity_currentnum++
        wx.setStorageSync('cartList', app.globalData.cartList)
      }
      app.globalData.carList=
      wx.setStorageSync('cartList',app.globalData.cartList)
    }
 
    // this.setData({
    //   currentType:index
    // })
    // wx.cloud.callFunction({
    //   name: 'getGoodsForType',
    //   data: {
    //     type:id,
    //   }
    // }).then(res =>{
    //     console.log('调用成功',res)
    //     this.setData({
    //       goods: res.result.data
    //     })
    // }).catch(res=>{
    //   console.log('失败',res)
    // })
  },
})

