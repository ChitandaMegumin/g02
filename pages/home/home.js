const app = getApp()
Page({
  
  onLoad(userinfo){
    console.log('userinfo',userinfo)
    var user=userinfo
    console.log('user',user.user)
    app.globalData._id=user.user
    console.log('user',app.globalData._id)
    wx.cloud.callFunction({
      name:"getCurrentUserName",
      data:{
        _id:app.globalData._id
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
  gotomy(user){
    console.log("gotomy",user.currentTarget.dataset.user)
    wx.navigateTo({
      url: '/pages/my/my?user='+user.currentTarget.dataset.user,
    })
  },
  gotohome(user){
    wx.navigateTo({
      url: '/pages/home/home?user'+user.currentTarget.dataset.user,
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