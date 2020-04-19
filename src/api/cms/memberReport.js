import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/cms/CmsMemberReport/list',
        method:'get',
        params:params
    })
}
export function createMemberReport(data) {
    return request({
        url:'/cms/CmsMemberReport/create',
        method:'post',
        data:data
    })
}

export function deleteMemberReport(id) {
    return request({
        url:'/cms/CmsMemberReport/delete/'+id,
        method:'get',
    })
}

export function getMemberReport(id) {
    return request({
        url:'/cms/CmsMemberReport/'+id,
        method:'get',
    })
}

export function updateMemberReport(id,data) {
    return request({
        url:'/cms/CmsMemberReport/update/'+id,
        method:'post',
        data:data
    })
}

