import api from '../api';

export function loginApi() {
    return api({
        url: '/login',
        method: 'post'
    })
}