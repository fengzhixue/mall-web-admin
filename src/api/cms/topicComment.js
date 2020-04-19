import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/cms/CmsTopicComment/list',
        method:'get',
        params:params
    })
}
export function createTopicComment(data) {
    return request({
        url:'/cms/CmsTopicComment/create',
        method:'post',
        data:data
    })
}

export function deleteTopicComment(id) {
    return request({
        url:'/cms/CmsTopicComment/delete/'+id,
        method:'get',
    })
}

export function getTopicComment(id) {
    return request({
        url:'/cms/CmsTopicComment/'+id,
        method:'get',
    })
}

export function updateTopicComment(id,data) {
    return request({
        url:'/cms/CmsTopicComment/update/'+id,
        method:'post',
        data:data
    })
}

