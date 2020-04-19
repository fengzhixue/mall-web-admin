import request from '@/utils/request'
export function fetchList(params) {
return request({
url: '/sys/sysStoreRank/list',
method: 'get',
params: params
})
}
export function createSysStoreRank(data) {
return request({
url: '/sys/sysStoreRank/create',
method: 'post',
data: data
})
}

export function deleteSysStoreRank(id) {
return request({
url: '/sys/sysStoreRank/delete/' + id,
method: 'get',
})
}

export function getSysStoreRank(id) {
return request({
url: '/sys/sysStoreRank/' + id,
method: 'get',
})
}

export function updateSysStoreRank(id, data) {
return request({
url: '/sys/sysStoreRank/update/' + id,
method: 'post',
data: data
})
}

