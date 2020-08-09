//server
const express = require("express")
const server = express()

//nunjucks configuration (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

const proffys = [
    {
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        name: "Diego Fernandes", 
        subject: "Química",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de expreriências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        cost: "20,00"
    },
    {
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        name: "Mayk Brito", 
        subject: "Desenvolvedor Web", 
        bio: "Entusiasta das melhores tecnologias de desenvolvimento web.<br><br>Apaixonado por ensinar novos programadores e por mudar a vida das pessoas através da tecnologia. Mais de 200.000 pessoas já passaram por minhas aulas.", 
        cost: "25,00"
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciência",
    "Educação Física", 
    "Física",
    "Geografia",
    "Hitória",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1

    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query

    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {
        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", { subjects, weekdays })
}

//server start and configuration
server
//configure statics files (css, scripts, images)
.use(express.static("public"))
//application routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start server
.listen(5500)
