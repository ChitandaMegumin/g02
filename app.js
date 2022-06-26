// app.js
App({
  //小程序一启动就会执行
  onLaunch() {
    console.log('小程序开始启动拉')
    wx.cloud.init({
      env: 'cloud1-1gwwzozxde8dfbf2' //云开发环境id
    })
  },
})
