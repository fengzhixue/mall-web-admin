import request from '@/utils/request'
export function fetchList(params) {
    return request({
        url:'/sms/SmsBasicMarking/list',
        method:'get',
        params:params
    })
}

export function createSmsBasicMarking(data) {
    return request({
        url:'/sms/SmsBasicMarking/create',
        method:'post',
        data:data
    })
}

export function deleteSmsBasicMarking(id) {
    return request({
        url:'/sms/SmsBasicMarking/delete/'+id,
        method:'get',
    })
}

export function getSmsBasicMarking(id) {
    return request({
        url:'/sms/SmsBasicMarking/'+id,
        method:'get',
    })
}

export function updateSmsBasicMarking(id,data) {
    return request({
        url:'/sms/SmsBasicMarking/update/'+id,
        method:'post',
        data:data
    })
}
export function updateStatus(params) {
  return request({
    url:'/sms/SmsBasicMarking/publishStatus',
    method:'post',
    params:params
  })
}