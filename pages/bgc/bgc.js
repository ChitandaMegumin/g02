const app = getApp()
var userhead = ''
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
        userimage:res.result.data.image
      })
      
      
    })
    .catch(err=>{
      console.log("获取用户信息失败",err)
    })
  },
  save_image(image){
    console.log("用户id",app.globalData._id)
    console.log("用户头像",image)
    wx.cloud.callFunction({
      name:'updateUserInfo',
      data:{
        id:app.globalData._id,
        data:{
          image:image.currentTarget.dataset.image
        }
      }
    })
    .then(res=>{
      console.log("保存照片成功",res)
    })
    .catch(err=>{
      console.log("保存照片失败",err)
    })
    setTimeout(this.onLoad,200 );
    wx.navigateTo({
      url: '/pages/my/my',
    })
  },
  
  data:{
    showModal:false,
  },
  headimage(){
    var _this=this
    wx.chooseImage({
      count: 1,
      success:function(res){
        _this.setData({
          userimage:res.tempFilePaths
        })
      }
    })
  },
  
})