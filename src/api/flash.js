import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/sms/flashPromotion/list',
    method:'get',
    params:params
  })
}
export function updateStatus(data) {
  return request({
    url:'/sms/flashPromotion/update/status',
    method:'post',
    data:data
  })
}
export function updateIsIndex(data) {
  return request({
    url:'/sms/flashPromotion/update/isIndex',
    method:'post',
    data:data
  })
}

export function deleteFlash(id) {
  return request({
    url:'/sms/flashPromotion/delete/'+id,
    method:'get'
  })
}
export function createFlash(data) {
  return request({
    url:'/sms/flashPromotion/create',
    method:'post',
    data:data
  })
}
export function updateFlash(id,data) {
  return request({
    url:'/sms/flashPromotion/update/'+id,
    method:'post',
    data:data
  })
}
