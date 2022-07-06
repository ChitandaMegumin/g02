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
  gotoaddr(){
    wx.redirectTo({
      url: '/pages/addr/addr',
    })
  },
  gotomembercode(){
    wx.redirectTo({
      url: '/pages/member_code/member_code',
    })
  },
  gotoexpress(){
    wx.redirectTo({
      url: '/pages/express/express',
    })
  }
})