let uname = ''
let sex = ''
let phone = ''
let addr = ''
const app = getApp()
Page({
  onLoad(){}

  ,
  getname(e){
    uname = e.detail.value
  },
  getsex(e){
    sex = e.detail.value
  },
  getphone(e){
    phone = e.detail.value
  },
  getaddr(e){
    addr = e.detail.value
  },
  updateuser(){
    if(!uname){
      wx.showToast({
        icon:'none',
        title: '姓名不能为空',
      })
      return
    }
    if(!phone){
      wx.showToast({
        icon:'none',
        title: '电话不能为空',
      })
      return
    }
    else if(phone.length!=11){
      wx.showToast({
        icon:'none',
        title: '电话号码应是11位',
      })
      return
    }
    else if(isNaN(parseFloat(phone))||!isFinite(phone)){
      wx.showToast({
        icon:'none',
        title: '电话号码应是数字',
      })
      return
    }
    if(!addr){
      wx.showToast({
        icon:'none',
        title: '住址不能为空',
      })
      return
    }
    console.log("id",app.globalData._id)
    console.log("信息",uname+" "+sex+" "+phone+" "+addr)
    wx.cloud.callFunction({
      name: "updateUserInfo",
      data:{
        id:app.globalData._id,
        data:{
          Customer_name:uname,
          Customer_sex:sex,
          Customer_phone:phone,
          Customer_addr:addr
        }
      }
    })
    .then(res=>{
      console.log("更新数据成功",res)
    })
    .catch(err=>{
      console.log("更新数据失败",err)
    })
    setTimeout(this.gotoaddr,300)  
    
    //this.onLoad()
    },
    gotoaddr()
    {
      wx.redirectTo({
        url: '/pages/addr/addr',
      })
    }
})