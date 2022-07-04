// pages/login/login.js
const app = getApp()
Page({
  data: {
    wxhao: 'Apple_4027534',
    password: ''
  },
  //获取输入的账号
  getWxhao(event){
    console.log('账号',event.detail.value)
    this.setData({
      wxhao: event.detail.value
    })
  },
  //获取输入的密码
  getPassword(event){
    console.log('密码',event.detail.value)
    this.setData({
      password: event.detail.value
    })
  },
  //点击登录
  login(){
    let wxhao = this.data.wxhao
    let password = this.data.password
    console.log('账号', wxhao,'密码',password)
    //登录校验（前端）
    if(wxhao.length<6 || wxhao.length>20){
      wx.showToast({
        icon:'none',
        title: '账号小于6位或大于20位！',
      })
      return
    }
    if(password.length<6 || password.length>20){
      wx.showToast({
        icon:'none',
        title: '密码小于6位或大于20位！',
      })
      return
    }
    //登录校验（数据库）
    wx.cloud.database().collection('customer').where({
      Customer_wechat: wxhao
    }).get({
      success(res){
        console.log('获取数据成功',res)
        let user = res.data[0]
        console.log('user', user)
        if(user==undefined){
          wx.showToast({
            icon: 'error',
            title: '账号错误！'
          })
          return
        }
        if(password==user.Customer_password){
          console.log('登录成功')
          wx.showToast({
            title: '登录成功！',
          })
          app.globalData._id=user._id,
          wx.navigateTo({
            url: '../home/home?', //登录的时候传一个微信号
          })
        }
        else{
          console.log('登录失败')
          wx.showToast({
            icon: 'error',
            title: '账号或密码错误！'
          })
        }
      },
      fail(res){
        console.log('获取数据失败',res)
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})