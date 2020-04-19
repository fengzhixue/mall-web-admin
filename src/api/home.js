import request from '@/utils/request'
export function orderStatic() {
  return request({
    url:'/home/orderStatic',
    method:'get'
  })
}

export function goodsStatic() {
  return request({
    url:'/home/goodsStatic',
    method:'get'
  })
}

export function userStatic() {
  return request({
    url:'/home/userStatic',
    method:'get'
  })
}


// export function acceptRedPacket(id) {
//   return request({
//     url:'/sms/SmsRedPacket/accept/'+id,
//     method:'get',
//   })
// }
// export function list() {
//   return request({
//     url:'/sms/SmsRedPacket/list/',
//     method:'get',
//   })
// }
