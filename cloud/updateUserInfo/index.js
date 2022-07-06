// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  var id = event.id
  return cloud.database().collection('customer').doc(id)
  .update({
    data:event.data
  })
}