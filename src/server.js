//server
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses } = require('./pages')

//nunjucks configuration (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

//server start and configuration
server
//configure statics files (css, scripts, images)
.use(express.static('public'))
//application routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start server
.listen(5500)
