// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection('commodity')
  .where({
    Commodity_type:event.type
  }) //这里读取的是商品条目的type
  .get()
}