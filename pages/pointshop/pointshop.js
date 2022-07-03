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
      console.log("获取用户数据成功",res)
      this.setData({
        user:res.result.data
      })
    })
    .catch(err=>{
      console.log("获取用户数据失败",err)
    })
  },
  update_point(event){
    var point=event.currentTarget.dataset.user.Customer_point
    var _point=event.currentTarget.dataset.point
    wx.cloud.callFunction({
      name:"updatePoint",
      data:{
        _id:app.globalData._id,
        data:{
          Customer_point:point-_point
        }
      }
    })
    .then(res=>{
      console.log("更新数据成功",res)
    })
    .catch(err=>{
      console.log("更新数据失败",err)
    })
    setTimeout(this.gotomyhome,300)  
    },
  gotomyhome(){
    wx.reLaunch({
      url: '/pages/home/home',
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
  }
})