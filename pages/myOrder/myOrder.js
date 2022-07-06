// pages/myOrder/myOrder.js
const app =getApp()
Page({

  data: {
      Order_status:0,
  },

  onLoad(options) {
    //  this.setData({
    //    orderList:wx.getStorageSync('cartList')
    //  })
    // console.log(wx.getStorageSync('cartList'))
      
      wx.cloud.database().collection('orders')
      .where({
        status:0
      })
      .get()
      .then(res=>{
        this.setData({
          orderList:res.data
        })
      })
  },
  getGoodsInCart(){
    this.setData({
      goodsincart:wx.getStorageSync('cartList')
    })
  },
  gotogoodsselect(){
    wx.redirectTo({
      url: '/pages/goodsselect/goodsselect',
    })
  },
  gotomy(){
    wx.redirectTo({
      url: '/pages/my/my',
    })
  },
  gotohome(){
    wx.redirectTo({
      url: '/pages/home/home',
    })
  },
  gotoorder(){
    wx.redirectTo({
      url: '/pages/myOrder/myOrder',
    })
  },
  gotopointshop(){
    wx.redirectTo({
      url: '/pages/pointshop/pointshop',
    })
  },
  gotocom(){
    wx.redirectTo({
      url: '/pages/order/order',
    })
  },
  gotopay(){
    wx.redirectTo({
      url: '/pages/pay/pay',
    })
  },
  changestatus(event){
    let index = event.currentTarget.dataset.index

    wx.showModal({
      title:'提示',
      content:'确认已收货吗',
      confirmText:'确定'
    })
    .then(res=>{
      if(res.confirm ==true){
         wx.cloud.database().collection('orders')
        .doc(this.data.orderList[index]._id)
          .update({
            data:{
            status: 1
          }
      })
      wx.redirectTo({
        url: '/pages/order/order',
      })
      
      }     
    })
   
  },
  choooType(event){
    console.log(event.currentTarget.data.type)
    let Order_status=event.currentTarget.data.type
    this.setData({
      Order_status
    }
    )
  },
  
 
})