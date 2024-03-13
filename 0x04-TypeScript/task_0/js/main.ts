export interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const Mustapha: Student = {
    firstName: "Richard",
    lastName: "Rapando",
    age: 26,
    location: "Kenya"
}

const Muideen: Student = {
    firstName: "Billian",
    lastName: "Wekesa",
    age: 25,
    location: "Kenya"
}
const studentsList: Array<Student> = [Richard, Billian]

export const Table = (studentsList: Array<Student>) => {
    const table = document.createElement('table')
    const header = document.createElement('tr')
    table.insertAdjacentElement("beforeend", header)
    header.insertAdjacentHTML("beforeend", "<th>Firstname</th>")
    header.insertAdjacentHTML("beforeend", "<th>Location</th>")

    for (const std of studentsList) {
        const tr = document.createElement('tr')
        tr.insertAdjacentHTML("beforeend", `<td>${std.firstName}</td>`)
        tr.insertAdjacentHTML("beforeend", `<td>${std.location}</td>`)
        table.insertAdjacentElement("beforeend", tr)
    }
    document.body.insertAdjacentElement("beforeend", table)
}

Table(studentsList)
