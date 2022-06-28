// 云函数入口文件
const cloud = require('wx-server-sdk')
const _ = db.command
const $ = db.command.aggregate
cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection('commodity').aggregate.group({
    _id:"$Commodity_type"
  }).end()
  

}