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

module.exports = {
    subjects,
    weekdays,
    getSubject
}