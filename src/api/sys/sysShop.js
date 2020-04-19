import request from '@/utils/request'
export function fetchList(params) {
return request({
url: '/sys/sysShop/list',
method: 'get',
params: params
})
}
export function createSysShop(data) {
return request({
url: '/sys/sysShop/create',
method: 'post',
data: data
})
}

export function deleteSysShop(id) {
return request({
url: '/sys/sysShop/delete/' + id,
method: 'get',
})
}

export function getSysShop(id) {
return request({
url: '/sys/sysShop/' + id,
method: 'get',
})
}

export function updateSysShop(id, data) {
return request({
url: '/sys/sysShop/update/' + id,
method: 'post',
data: data
})
}

