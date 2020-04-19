import request from '@/utils/request'
export function fetchList() {
  return request({
    url:'/oms/omsCompanyAddress/list',
    method:'get'
  })
}
