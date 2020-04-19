import request from '@/utils/request'
export function fetchList(params) {
return request({
url: '/cms/cmsZhaoPin/list',
method: 'get',
params: params
})
}
export function createCmsZhaoPin(data) {
return request({
url: '/cms/cmsZhaoPin/create',
method: 'post',
data: data
})
}

export function deleteCmsZhaoPin(id) {
return request({
url: '/cms/cmsZhaoPin/delete/' + id,
method: 'get',
})
}

export function getCmsZhaoPin(id) {
return request({
url: '/cms/cmsZhaoPin/' + id,
method: 'get',
})
}

export function updateCmsZhaoPin(id, data) {
return request({
url: '/cms/cmsZhaoPin/update/' + id,
method: 'post',
data: data
})
}

