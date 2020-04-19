import request from '@/utils/request'
export function fetchList(params) {
return request({
url: '/sys/sysStoreDepositLog/list',
method: 'get',
params: params
})
}
export function createSysStoreDepositLog(data) {
return request({
url: '/sys/sysStoreDepositLog/create',
method: 'post',
data: data
})
}

export function deleteSysStoreDepositLog(id) {
return request({
url: '/sys/sysStoreDepositLog/delete/' + id,
method: 'get',
})
}

export function getSysStoreDepositLog(id) {
return request({
url: '/sys/sysStoreDepositLog/' + id,
method: 'get',
})
}

export function updateSysStoreDepositLog(id, data) {
return request({
url: '/sys/sysStoreDepositLog/update/' + id,
method: 'post',
data: data
})
}

export function addStoreMoney(data) {
return request({
url: '/sys/sysStoreDepositLog/addStoreMoney',
method: 'post',
data: data
})
}

export function drawStoreMoney(data) {
return request({
url: '/sys/sysStoreDepositLog/drawStoreMoney',
method: 'post',
data: data
})
}

export function auditStoreMoney(data) {
return request({
url: '/sys/sysStoreDepositLog/auditStoreMoney',
method: 'post',
data: data
})
}

