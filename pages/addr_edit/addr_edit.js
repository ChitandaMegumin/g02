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
    //this.onLoad()
    }
  
})