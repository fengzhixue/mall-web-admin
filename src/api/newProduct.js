import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/sms/SmsHomeNewProduct/list',
    method:'get',
    params:params
  })
}

export function updateRecommendStatus(data) {
  return request({
    url:'/sms/SmsHomeNewProduct/update/recommendStatus',
    method:'post',
    data:data
  })
}

export function deleteNewProduct(id) {
  return request({
    url:'/sms/SmsHomeNewProduct/delete/'+id,
    method:'get'
  })
}

export function createNewProduct(data) {
  return request({
    url:'/sms/SmsHomeNewProduct/create',
    method:'post',
    data:data
  })
}

export function updateNewProductSort(params) {
  return request({
    url:'/sms/SmsHomeNewProduct/update/sort/'+params.id,
    method:'post',
    params:params
  })
}
