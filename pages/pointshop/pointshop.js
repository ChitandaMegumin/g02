Page({
  onLoad(){
    wx.cloud.callFunction({
      name:"getCurrentUserName"
    })
    .then(res=>{
      console.log("获取用户数据成功",res)
      this.setData({
        user:res.result.data
      })
    })
    .catch(err=>{
      console.log("获取用户数据失败",err)
    })
  }
  ,
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
  }
})