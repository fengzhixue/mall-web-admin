import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/sms/SmsFlashPromotionSession/list',
    method: 'get',
    params: params
  })
}

export function fetchSelectList(params) {
  return request({
    url: '/sms/SmsFlashPromotionSession/selectList',
    method: 'get',
    params: params
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/sms/SmsFlashPromotionSession/update/status/' + id,
    method: 'post',
    params: params
  })
}

export function deleteSession(id) {
  return request({
    url: '/sms/SmsFlashPromotionSession/delete/' + id,
    method: 'get'
  })
}

export function createSession(data) {
  return request({
    url: '/sms/SmsFlashPromotionSession/create',
    method: 'post',
    data: data
  })
}

export function updateSession(id, data) {
  return request({
    url: '/sms/SmsFlashPromotionSession/update/' + id,
    method: 'post',
    data: data
  })
}
