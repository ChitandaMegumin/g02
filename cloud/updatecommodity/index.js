// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  cloud.database().collection('commodity')
  .doc(event.id) //这里读取的是商品条目的_id
  .update({
    data:{
      Commodity_num: event.num //可以改成其他的，这里就是做一个num的修改
    }
  })
}