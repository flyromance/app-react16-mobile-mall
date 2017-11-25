import 'es6-promise'
import 'whatwg-fetch'

function encodeJson(json) {
    var arr = ''
    for (var key in json) {
        arr = arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(json[key]))
    }
    return arr.join('&')
}

export default function (url, data) {
    return fetch(url, {
        method: 'post',
        credentials: 'include',
        headers: {
            'Accept': "application/json, text/plain, */*",
            "Content-Type": "application/x-www-form-urlendcoded"
        },
        body: encodeJson(data)
    })
}