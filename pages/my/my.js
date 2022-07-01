Page({
  onLoad(){
    wx.cloud.callFunction({
      name:"getCurrentUserName"
    })
    .then(res=>{
      console.log("获取用户名成功",res)
      this.setData({
        username:res.result.data
     })
    })
    .catch(err=>{
      console.log("获取用户名失败",err)
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
  gotopointshop(){
    wx.navigateTo({
      url: '/pages/pointshop/pointshop',
    })
  }
})