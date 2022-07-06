Page({

  
  onLoad(){
    wx.cloud.database().collection("orders")
    .doc("ca780ad562bf2db40979515a116b41e7")
    .get()
    .then(res=>{
      console.log("获取成功",res)
      this.setData({
        order:res.data
      })
    })
    .catch(err=>{
      console.log("获取失败",err)
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
      url: '/pages/order/order',
    })
  },
  gotohis(){
    wx.redirectTo({
      url: '/pages/order/order',
    })
  },
  gotopointshop(){
    wx.redirectTo({
      url: '/pages/pointshop/pointshop',
    })
  }
})