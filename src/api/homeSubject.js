import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/sms/SmsHomeRecommendSubject/list',
    method:'get',
    params:params
  })
}

export function updateRecommendStatus(data) {
  return request({
    url:'/sms/SmsHomeRecommendSubject/update/recommendStatus',
    method:'post',
    data:data
  })
}

export function deleteHomeSubject(id) {
  return request({
    url:'/sms/SmsHomeRecommendSubject/delete/'+id,
    method:'get'
  })
}

export function createHomeSubject(data) {
  return request({
    url:'/sms/SmsHomeRecommendSubject/create',
    method:'post',
    data:data
  })
}

export function updateHomeSubjectSort(params) {
  return request({
    url:'/sms/SmsHomeRecommendSubject/update/sort/'+params.id,
    method:'post',
    params:params
  })
}
