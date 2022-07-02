// app.js
//xqk
App({
  //小程序一启动就会执行
  onLaunch() {
    console.log('小程序开始启动拉')
    wx.cloud.init({
      env: 'cloud1-1gwwzozxde8dfbf2' //云开发环境id 
    })
    if(wx.getStorageSync('cartlist')){
      this.globalData.cartList = wx.getStorageSync('cartList')
    }
  },
  globalData:{
    userInfo:null,
    cartList:[],
    _id:''
  },
  gotohome(){
    wx.redirectTo({
      url: '/pages/home/home',
      
    })
  },
  gotogoodsselect(){
    wx.redirectTo({
      url: '/pages/goodselect/goodselect',
      
    })
  },
  gotoorder(){
    wx.redirectTo({
      url: '/pages/order/order',
    })
  },
  gotomy(){
    wx.redirectTo({
      url: '/pages/my/my',
    })
  }
})
