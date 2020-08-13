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

function convertHoursToMinutes(time) {
    const [hours, minutes] = time.split(":")
    return Number((hours * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}