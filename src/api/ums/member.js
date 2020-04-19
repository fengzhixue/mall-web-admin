import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/ums/UmsMember/list',
    method:'get',
    params:params
  })
}
export function createMember(data) {
  return request({
    url:'/ums/UmsMember/create',
    method:'post',
    data:data
  })
}
export function updateShowStatus(data) {
  return request({
    url:'/ums/UmsMember/update/showStatus',
    method:'post',
    data:data
  })
}

export function updateFactoryStatus(data) {
  return request({
    url:'/ums/UmsMember/update/factoryStatus',
    method:'post',
    data:data
  })
}

export function deleteMember(id) {
  return request({
    url:'/ums/UmsMember/delete/'+id,
    method:'get',
  })
}

export function getMember(id) {
  return request({
    url:'/ums/UmsMember/'+id,
    method:'get',
  })
}

export function updateMember(data) {
  return request({
    url:'/ums/UmsMember/update',
    method:'post',
    data:data
  })
}
export function updateMemberOrderInfo() {
  return request({
    url:'/ums/UmsMember/updateMemberOrderInfo',
    method:'post'
  })
}

export function fetchBlanceList(id) {
  return request({
    url:'/ums/UmsMember/fetchBlanceList/'+id,
    method:'get',
  })
}

export function handleEditBlance(data) {
  return request({
    url:'/ums/UmsMember/handleEditBlance',
    method:'post',
    data:data
  })
}

export function handleEditIntegration(data) {
  return request({
    url:'/ums/UmsMember/handleEditIntegration',
    method:'post',
    data:data
  })
}
