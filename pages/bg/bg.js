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
        user:res.result.data,
        userbg:res.result.data.bg
      })
      
      
    })
    .catch(err=>{
      console.log("获取用户信息失败",err)
    })
  },
  save_bg(bg){
    console.log("用户id",app.globalData._id)
    console.log("用户背景",bg)
    wx.cloud.callFunction({
      name:'updateUserInfo',
      data:{
        id:app.globalData._id,
        data:{
          bg:bg.currentTarget.dataset.bg
        }
      }
    })
    .then(res=>{
      console.log("保存照片成功",res)
    })
    .catch(err=>{
      console.log("保存照片失败",err)
    })
  },
  
  data:{
    showModal:false,
  },
  bg(){
    var _this=this
    wx.chooseImage({
      count: 1,
      success:function(res){
        _this.setData({
          userbg:res.tempFilePaths
        })
      }
    })
  },
  
})