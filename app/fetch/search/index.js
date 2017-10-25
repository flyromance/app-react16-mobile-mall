import { get } from '../get'

export function getSearchData(type, keyword, page) {
    return get(`/api/search/${type + (keyword ? '/' + keyword : '') + '?page=' + page}`)
}