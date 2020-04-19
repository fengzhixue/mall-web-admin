import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/oms/OmsOrderReturnReason/list',
    method:'get',
    params:params
  })
}

export function deleteReason(id) {
  return request({
    url:'/oms/OmsOrderReturnReason/delete/'+id,
    method:'get'
  })
}

export function updateStatus(params) {
  return request({
    url:'/oms/OmsOrderReturnReason/update/status',
    method:'post',
    params:params
  })
}

export function addReason(data) {
  return request({
    url:'/oms/OmsOrderReturnReason/create',
    method:'post',
    data:data
  })
}

export function getReasonDetail(id) {
  return request({
    url:'/oms/OmsOrderReturnReason/'+id,
    method:'get'
  })
}

export function updateReason(id,data) {
  return request({
    url:'/oms/OmsOrderReturnReason/update/'+id,
    method:'post',
    data:data
  })
}
