import request from '@/utils/request'
export function fetchList(cid,params) {
  return request({
    url:'/pms/PmsProductAttribute/list/'+cid,
    method:'get',
    params:params
  })
}

export function fetchAllList(params) {
  return request({
    url:'/pms/PmsProductAttribute/listAll',
    method:'get',
    params:params
  })
}
export function deleteProductAttr(id) {
  return request({
    url:'/pms/PmsProductAttribute/delete/'+id,
    method:'get'

  })
}

export function createProductAttr(data) {
  return request({
    url:'/pms/PmsProductAttribute/create',
    method:'post',
    data:data
  })
}

export function updateProductAttr(id,data) {
  return request({
    url:'/pms/PmsProductAttribute/update/'+id,
    method:'post',
    data:data
  })
}
export function getProductAttr(id) {
  return request({
    url:'/pms/PmsProductAttribute/'+id,
    method:'get'
  })
}

export function getProductAttrInfo(productCategoryId) {
  return request({
    url:'/pms/PmsProductAttribute/attrInfo/'+productCategoryId,
    method:'get'
  })
}
