import request from '@/utils/request'

export function getSalesTableList(params) {
  return request({
    url:'/ums/UmsMember/list',
    method: 'get',
    params: params
  })
}
