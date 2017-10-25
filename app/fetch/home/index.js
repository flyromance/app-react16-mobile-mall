import { get } from '../get'

export function getAdData() {
    return get('/api/ad')
}

export function getListData(page, city) {
    return get('/api/list' + '?page=' + page + '&city=' + city)
}