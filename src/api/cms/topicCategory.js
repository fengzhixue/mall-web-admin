import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/cms/CmsTopicCategory/list',
        method:'get',
        params:params
    })
}
export function createTopicCategory(data) {
    return request({
        url:'/cms/CmsTopicCategory/create',
        method:'post',
        data:data
    })
}

export function deleteTopicCategory(id) {
    return request({
        url:'/cms/CmsTopicCategory/delete/'+id,
        method:'get',
    })
}

export function getTopicCategory(id) {
    return request({
        url:'/cms/CmsTopicCategory/'+id,
        method:'get',
    })
}

export function updateTopicCategory(id,data) {
    return request({
        url:'/cms/CmsTopicCategory/update/'+id,
        method:'post',
        data:data
    })
}

