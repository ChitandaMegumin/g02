let exid = ''
Page({
  onLoad(){

    
  },
  getexid(e){
    exid = e.detail.value
  },
  tosearch(){
    this.onLoad()
    console.log("id",exid)
    wx.cloud.callFunction({
      name:'getexpressbyid',
      data:{
        id:exid
      }
    })
    .then(res=>{
      console.log("获取快递信息成功",res)
      this.setData({
        express:res
      })
    })
    .catch(err=>{
      console.log("获取快递信息失败",err)
    })
  }
})