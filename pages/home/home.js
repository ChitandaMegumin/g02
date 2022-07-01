Page({

  onLoad(Wxhao){
    console.log('Wxhao',Wxhao)
    wx.cloud.database().collection("customer")
    .doc("16db756f62b9449d08afcc12701b1417")
    .get()
    .then(res=>{
      console.log("当前用户的积分获取成功",res)
      this.setData({
        code:res.data
      }) 
    })
    .catch(err=>{
      console.log("当前用户的积分获取失败",err)
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
  gotohome(){
    wx.navigateTo({
      url: '/pages/home/home',
    })
  },
  gotoorder(){
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },
  gotopointshop(){
    wx.navigateTo({
      url: '/pages/pointshop/pointshop',
    })
  },
  gotoaddr(){
    wx.navigateTo({
      url: '/pages/addr/addr',
    })
  }
})