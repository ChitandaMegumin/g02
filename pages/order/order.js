// pages/myOrder/myOrder.js
Page({

  data: {
      Order_status:1
  },

  onLoad(options) {
    wx.cloud.database().collection('orders')
    .where({
      Order_status:1
    })
    .get()
    .then(res=>{
      console.log(res)
      this.setData({
        List:res.data
      })
    })
    this.setData({
      orderList:wx.getStorageSync('cartList')
    })
    console.log(wx.getStorageSync('cartList'))
  },
  getGoodsInCart(){
    this.setData({
      good:wx.getStorageSync('cartList')
    })
  },
  gotogoodsselect(){
    wx.navigateTo({
      url: '/pages/goodsselect/goodsselect',
    })
  },
  gotomy(){
    wx.navigateTo({
      url: '/pages/my/my',
    })
  },
  gotopay(){
    wx.navigateTo({
      url: '/pages/pay/pay',
    })
  },
  gotohome(){
    wx.navigateTo({
      url: '/pages/home/home',
    })
  },
  gotoorder(){
    wx.navigateTo({
      url: '/pages/myOrder/myOrder',
    })
  },
  
  gotopointshop(){
    wx.navigateTo({
      url: '/pages/pointshop/pointshop',
    })
  },
  choooType(event){
    console.log(event.currentTarget.data.type)
    let Order_status=event.currentTarget.data.type
    this.setData({
      Order_status
    }
    )
  }

 


 
})