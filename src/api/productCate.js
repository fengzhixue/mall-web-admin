import request from '@/utils/request'

export function fetchListAll(params) {
  return request({
    url:'/pms/PmsProductCategory/list',
    method:'get',
    params:params
  })
}
export function fetchList(parentId,params) {
  return request({
    url:'/pms/PmsProductCategory/list/'+parentId,
    method:'get',
    params:params
  })
}
export function deleteProductCate(id) {
  return request({
    url:'/pms/PmsProductCategory/delete/'+id,
    method:'get'
  })
}

export function createProductCate(data) {
  return request({
    url:'/pms/PmsProductCategory/create',
    method:'post',
    data:data
  })
}

export function updateProductCate(id,data) {
  return request({
    url:'/pms/PmsProductCategory/update/'+id,
    method:'post',
    data:data
  })
}

export function getProductCate(id) {
  return request({
    url:'/pms/PmsProductCategory/'+id,
    method:'get',
  })
}

export function updateShowStatus(data) {
  return request({
    url:'/pms/PmsProductCategory/update/showStatus',
    method:'post',
    data:data
  })
}

export function updateIndexStatus(data) {
  return request({
    url:'/pms/PmsProductCategory/update/indexStatus',
    method:'post',
    data:data
  })
}

export function updateNavStatus(data) {
  return request({
    url:'/pms/PmsProductCategory/update/navStatus',
    method:'post',
    data:data
  })
}

export function fetchListWithChildren() {
  return request({
    url:'/pms/PmsProductCategory/list/withChildren',
    method:'get'
  })
}
