import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/cms/CmsPrefrenceArea/list',
        method:'get',
        params:params
    })
}
export function createPrefrenceArea(data) {
    return request({
        url:'/cms/CmsPrefrenceArea/create',
        method:'post',
        data:data
    })
}

export function deletePrefrenceArea(id) {
    return request({
        url:'/cms/CmsPrefrenceArea/delete/'+id,
        method:'get',
    })
}

export function getPrefrenceArea(id) {
    return request({
        url:'/cms/CmsPrefrenceArea/'+id,
        method:'get',
    })
}

export function updatePrefrenceArea(id,data) {
    return request({
        url:'/cms/CmsPrefrenceArea/update/'+id,
        method:'post',
        data:data
    })
}

