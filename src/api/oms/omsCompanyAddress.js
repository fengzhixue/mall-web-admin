import request from '@/utils/request'
export function fetchList(params) {
return request({
url: '/oms/omsCompanyAddress/list',
method: 'get',
params: params
})
}
export function createOmsCompanyAddress(data) {
return request({
url: '/oms/omsCompanyAddress/create',
method: 'post',
data: data
})
}

export function deleteOmsCompanyAddress(id) {
return request({
url: '/oms/omsCompanyAddress/delete/' + id,
method: 'get',
})
}

export function getOmsCompanyAddress(id) {
return request({
url: '/oms/omsCompanyAddress/' + id,
method: 'get',
})
}

export function updateOmsCompanyAddress(id, data) {
return request({
url: '/oms/omsCompanyAddress/update/' + id,
method: 'post',
data: data
})
}

