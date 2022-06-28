Page({
  onLoad(){
    wx.cloud.database().collection("customer")
    .doc("16db756f62b9449d08afcc12701b1417")
    .get()
    .then(res=>{
      console.log("获取用户名成功",res)
      this.setData({
        username:res.data
      })
    })
    .catch(err=>{
      console.log("获取用户名失败",err)
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