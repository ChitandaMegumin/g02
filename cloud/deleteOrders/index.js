// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  cloud.database().collection('orders')
  .doc(event.id) //这里读取的是订单条目的_id
  .remove()
}