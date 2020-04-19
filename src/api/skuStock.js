import request from '@/utils/request'
export function fetchList(pid,params) {
  return request({
    url:'/pms/PmsSkuStock/select/'+pid,
    method:'get',
    params:params
  })
}

export function update(pid,data) {
  return request({
    url:'/pms/PmsSkuStock/updatePid/'+pid,
    method:'post',
    data:data
  })
}
