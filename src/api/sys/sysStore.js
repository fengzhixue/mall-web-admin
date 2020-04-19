import request from '@/utils/request'
export function fetchList(params) {
return request({
url: '/sys/sysStore/list',
method: 'get',
params: params
})
}
export function createSysStore(data) {
return request({
url: '/sys/sysStore/create',
method: 'post',
data: data
})
}

export function deleteSysStore(id) {
return request({
url: '/sys/sysStore/delete/' + id,
method: 'get',
})
}

export function getSysStore(id) {
return request({
url: '/sys/sysStore/' + id,
method: 'get',
})
}

export function updateSysStore(id, data) {
return request({
url: '/sys/sysStore/update/' + id,
method: 'post',
data: data
})
}
export function updateShowStatus(data) {
  return request({
    url:'/sys/sysStore/update/showStatus',
    method:'post',
    data:data
  })
}
export function audit(data) {
  return request({
    url:'/sys/sysStore/update/audit',
    method:'post',
    data:data
  })
}
export function getCurrentStore() {
return request({
url: '/sys/sysStore/getCurrentStore',
method: 'get',
})
}