import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/sms/SmsHomeAdvertise/list',
    method:'get',
    params:params
  })
}
export function updateStatus(id,params) {
  return request({
    url:'/sms/SmsHomeAdvertise/update/status/'+id,
    method:'post',
    params:params
  })
}
export function deleteHomeAdvertise(id) {
  return request({
    url:'/sms/SmsHomeAdvertise/delete/'+id,
    method:'get'
  })
}
export function createHomeAdvertise(data) {
  return request({
    url:'/sms/SmsHomeAdvertise/create',
    method:'post',
    data:data
  })
}
export function getHomeAdvertise(id) {
  return request({
    url:'/sms/SmsHomeAdvertise/'+id,
    method:'get',
  })
}

export function updateHomeAdvertise(id,data) {
  return request({
    url:'/sms/SmsHomeAdvertise/update/'+id,
    method:'post',
    data:data
  })
}
