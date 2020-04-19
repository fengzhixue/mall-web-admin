import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/oms/OmsOrderReturnApply/list',
    method:'get',
    params:params
  })
}

export function deleteApply(id) {
  return request({
    url:'/oms/OmsOrderReturnApply/delete'+id,
    method:'get'
  })
}
export function updateApplyStatus(params) {
  return request({
    url:'/oms/OmsOrderReturnApply/update/status',
    method:'post',
    params:params
  })
}

export function getApplyDetail(id) {
  return request({
    url:'/oms/OmsOrderReturnApply/'+id,
    method:'get'
  })
}

