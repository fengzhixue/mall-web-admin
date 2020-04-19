import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/sms/SmsHomeBrand/list',
    method:'get',
    params:params
  })
}

export function updateRecommendStatus(data) {
  return request({
    url:'/sms/SmsHomeBrand/update/recommendStatus',
    method:'post',
    data:data
  })
}

export function deleteHomeBrand(id) {
  return request({
    url:'/sms/SmsHomeBrand/delete/'+id,
    method:'get'
  })
}

export function createHomeBrand(data) {
  return request({
    url:'/sms/SmsHomeBrand/create',
    method:'post',
    data:data
  })
}

export function updateHomeBrandSort(params) {
  return request({
    url:'/sms/SmsHomeBrand/update/sort/'+params.id,
    method:'post',
    params:params
  })
}
