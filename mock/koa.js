var koa = require('koa')
var koaBody = require('koa-body')()
var router = require('koa-router')()
var app = new koa()

var data = require('./data.js')

router.get('/api', function (next) {
    this.body = 'hello koa'
})

router.get('/api/list', function (next) {
    console.log(this.params, this.query)
    var query = this.query,
        params = this.params,
        ret = data.list
    if (query.page > 4) {
        ret.hasMore = false
    } else {
        ret.hasMore = true
    }
    this.body = ret
})

router.get('/api/ad', function* (next) {
    this.body = data.ad
})

router.get('/api/search/:type/:keyword', function (next) {
    var params = this.params,
        query = this.query,
        ret = data.list
    console.log(params, query)
    if (query.page > 3) {
        ret.hasMore = false
    } else {
        ret.hasMore = true
    }
    this.body = ret
})

router.post('/api/post', koaBody, function (next) {
    this.body = {
        type: 'post',
        data: {
            name: 'fandisaier'
        }
    }
})

app.use(router.routes())

app.listen(8002, function () {
    console.log('server start on port 8002...')
})