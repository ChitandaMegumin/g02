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
  gotoaddredit(){
    wx.redirectTo({
      url: '/pages/addr_edit/addr_edit',
    })
  }
})