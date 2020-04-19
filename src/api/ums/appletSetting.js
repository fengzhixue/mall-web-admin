import request from '@/utils/request'
export function getOrderSetting(id) {
  return request({
    url:'/ums/SysAppletSet/'+id,
    method:'get',
  })
}

export function updateOrderSetting(id,data) {
  return request({
    url:'/ums/SysAppletSet/update/'+id,
    method:'post',
    data:data
  })
}
