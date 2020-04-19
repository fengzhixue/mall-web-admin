import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/sms/SmsCoupon/list',
    method:'get',
    params:params
  })
}

export function createCoupon(data) {
  return request({
    url:'/sms/SmsCoupon/create',
    method:'post',
    data:data
  })
}

export function getCoupon(id) {
  return request({
    url:'/sms/SmsCoupon/'+id,
    method:'get',
  })
}

export function updateCoupon(id,data) {
  return request({
    url:'/sms/SmsCoupon/update/'+id,
    method:'post',
    data:data
  })
}

export function deleteCoupon(id) {
  return request({
    url:'/sms/SmsCoupon/delete/'+id,
    method:'get',
  })
}
