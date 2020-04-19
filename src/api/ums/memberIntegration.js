import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/ums/UmsIntegrationChangeHistory/list',
        method:'get',
        params:params
    })
}
export function createMemberBlanceLog(data) {
    return request({
        url:'/ums/UmsIntegrationChangeHistory/create',
        method:'post',
        data:data
    })
}

export function deleteMemberBlanceLog(id) {
    return request({
        url:'/ums/UmsIntegrationChangeHistory/delete/'+id,
        method:'get',
    })
}

export function getMemberBlanceLog(id) {
    return request({
        url:'/ums/UmsIntegrationChangeHistory/'+id,
        method:'get',
    })
}

export function updateMemberBlanceLog(id,data) {
    return request({
        url:'/ums/UmsIntegrationChangeHistory/update/'+id,
        method:'post',
        data:data
    })
}

