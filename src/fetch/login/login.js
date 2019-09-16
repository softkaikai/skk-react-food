import api from '../api';

export function loginApi(data) {
    return api({
        url: '/login',
        method: 'post',
        contentType: 'ajax',
        data
    })
}

export function registerApi(data) {
    return api({
        url: '/register',
        method: 'post',
        contentType: 'ajax',
        data
    })
}