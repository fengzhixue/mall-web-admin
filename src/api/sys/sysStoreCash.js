import request from '@/utils/request'
export function fetchList(params) {
return request({
url: '/sys/sysStoreCash/list',
method: 'get',
params: params
})
}
export function createSysStoreCash(data) {
return request({
url: '/sys/sysStoreCash/create',
method: 'post',
data: data
})
}

export function deleteSysStoreCash(id) {
return request({
url: '/sys/sysStoreCash/delete/' + id,
method: 'get',
})
}

export function getSysStoreCash(id) {
return request({
url: '/sys/sysStoreCash/' + id,
method: 'get',
})
}

export function updateSysStoreCash(id, data) {
return request({
url: '/sys/sysStoreCash/update/' + id,
method: 'post',
data: data
})
}
export function audit(data) {
  return request({
    url:'/sys/sysStore/update/audit',
    method:'post',
    data:data
  })
}
