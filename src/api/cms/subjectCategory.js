import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/cms/CmsSubjectCategory/list',
        method:'get',
        params:params
    })
}
export function createSubjectCategory(data) {
    return request({
        url:'/cms/CmsSubjectCategory/create',
        method:'post',
        data:data
    })
}

export function deleteSubjectCategory(id) {
    return request({
        url:'/cms/CmsSubjectCategory/delete/'+id,
        method:'get',
    })
}

export function getSubjectCategory(id) {
    return request({
        url:'/cms/CmsSubjectCategory/'+id,
        method:'get',
    })
}

export function updateSubjectCategory(id,data) {
    return request({
        url:'/cms/CmsSubjectCategory/update/'+id,
        method:'post',
        data:data
    })
}

