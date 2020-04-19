import request from '@/utils/request'
export function fetchListAll() {
  return request({
    url:'/cms/CmsSubject/list',
    method:'get',
  })
}

export function fetchList(params) {
  return request({
    url:'/cms/CmsSubject/list',
    method:'get',
    params:params
  })
}
