import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/cms/CmsSubjectComment/list',
        method:'get',
        params:params
    })
}
export function createSubjectComment(data) {
    return request({
        url:'/cms/CmsSubjectComment/create',
        method:'post',
        data:data
    })
}

export function deleteSubjectComment(id) {
    return request({
        url:'/cms/CmsSubjectComment/delete/'+id,
        method:'get',
    })
}

export function getSubjectComment(id) {
    return request({
        url:'/cms/CmsSubjectComment/'+id,
        method:'get',
    })
}

export function updateSubjectComment(id,data) {
    return request({
        url:'/cms/CmsSubjectComment/update/'+id,
        method:'post',
        data:data
    })
}

