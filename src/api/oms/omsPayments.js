import request from '@/utils/request'
export function fetchList(params) {
return request({
url: '/oms/omsPayments/list',
method: 'get',
params: params
})
}
export function createOmsPayments(data) {
return request({
url: '/oms/omsPayments/create',
method: 'post',
data: data
})
}

export function deleteOmsPayments(id) {
return request({
url: '/oms/omsPayments/delete/' + id,
method: 'get',
})
}

export function getOmsPayments(id) {
return request({
url: '/oms/omsPayments/' + id,
method: 'get',
})
}

export function updateOmsPayments(id, data) {
return request({
url: '/oms/omsPayments/update/' + id,
method: 'post',
data: data
})
}

