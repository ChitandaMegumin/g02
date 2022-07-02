Page({

  onLoad(Wxhao){
    console.log('Wxhao',Wxhao)
    wx.cloud.callFunction({
      name:"getCurrentUserName",
      data:{
        _id:"16db756f62b9449d08afcc12701b1419"
      }
    })
    .then(res=>{
      console.log("当前用户的积分获取成功",res)
      this.setData({
        code:res.result.data
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