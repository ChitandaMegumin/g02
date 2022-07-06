const app = getApp()
Page({
  onLoad(user_id){
    console.log("userid",user_id.user)
    wx.cloud.callFunction({
      name:"getCurrentUserName",
      data:{
        _id:app.globalData._id
      }
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
    wx.redirectTo({
      url: '/pages/goodsselect/goodsselect',
    })
  },
  gotomy(){
    wx.redirectTo({
      url: '/pages/my/my',
    })
  },
  gotoorder(){
    wx.redirectTo({
      url: '/pages/myOrder/myOrder',
    })
  },
  gotohome(){
    wx.redirectTo({
      url: '/pages/home/home',
    })
  },
  gotopointshop(){
    wx.redirectTo({
      url: '/pages/pointshop/pointshop',
    })
  },
  gotomembercode(){
    wx.redirectTo({
      url: '/pages/member_code/member_code',
    })
  },
  gotochangeimage(){
    wx.redirectTo({
      url: '/pages/bgc/bgc',
    })
  },
  gotochangebg(){
    wx.redirectTo({
      url: '/pages/bg/bg',
    })
  }
})