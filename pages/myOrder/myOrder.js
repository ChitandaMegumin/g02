// pages/myOrder/myOrder.js
Page({

  data: {
      Order_status:0
  },

  onLoad(options) {
    wx.cloud.database().collection('orders')
    .where({
      Order_status:0
    })
    .get()
    .then(res=>{
      console.log(res)
      this.setData({
        orderList:res.data
      })
    })
  },
  choooType(event){
    console.log(event.currentTarget.data.type)
    let Order_status=event.currentTarget.data.type
    this.setData({
      Order_status
    }
    )
  }

 


 
})