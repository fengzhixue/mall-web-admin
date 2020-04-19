import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/sms/SmsFlashPromotionProductRelation/list',
    method:'get',
    params:params
  })
}
export function createFlashProductRelation(data) {
  return request({
    url:'/sms/SmsFlashPromotionProductRelation/create',
    method:'post',
    data:data
  })
}
export function createFlashProductRelations(data) {
  return request({
    url:'/sms/SmsFlashPromotionProductRelation/batchCreate',
    method:'post',
    data:data
  })
}

export function deleteFlashProductRelation(id) {
  return request({
    url:'/sms/SmsFlashPromotionProductRelation/delete/'+id,
    method:'get'
  })
}
export function updateFlashProductRelation(id,data) {
  return request({
    url:'/sms/SmsFlashPromotionProductRelation/update/'+id,
    method:'post',
    data:data
  })
}
