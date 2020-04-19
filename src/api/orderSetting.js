import request from '@/utils/request'
export function getOrderSetting(id) {
  return request({
    url:'/oms/OmsOrderSetting/'+id,
    method:'get',
  })
}

export function updateOrderSetting(id,data) {
  return request({
    url:'/oms/OmsOrderSetting/update/'+id,
    method:'post',
    data:data
  })
}
