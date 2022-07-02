const app = getApp()
Page({
  onLoad(){
    wx.cloud.callFunction({
      name:"getCurrentUserName",
      data:{
        _id:app.globalData._id
      }
    })
    .then(res=>{
      console.log("获取用户信息成功",res)
      this.setData({
        user:res.result.data
      })
    })
    .catch(err=>{
      console.log("获取用户信息失败",err)
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
  },
  gotoaddredit(){
    wx.navigateTo({
      url: '/pages/addr_edit/addr_edit',
    })
  }
})