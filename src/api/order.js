import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/oms/OmsOrder/list',
    method:'get',
    params:params
  })
}

export function closeOrder(params) {
  return request({
    url:'/oms/OmsOrder/update/close',
    method:'post',
    params:params
  })
}

export function deleteOrder(id) {
  return request({
    url:'/oms/OmsOrder/delete'+id,
    method:'get'
  })
}

export function deliveryOrder(data) {
  return request({
    url:'/oms/OmsOrder/update/delivery',
    method:'post',
    data:data
  });
}

export function getOrderDetail(id) {
  return request({
    url:'/oms/OmsOrder/'+id,
    method:'get'
  });
}

export function updateReceiverInfo(data) {
  return request({
    url:'/oms/OmsOrder/update/receiverInfo',
    method:'post',
    data:data
  });
}

export function updateMoneyInfo(data) {
  return request({
    url:'/oms/OmsOrder/update/moneyInfo',
    method:'post',
    data:data
  });
}

export function updateOrderNote(params) {
  return request({
    url:'/oms/OmsOrder/update/note',
    method:'post',
    params:params
  })
}
