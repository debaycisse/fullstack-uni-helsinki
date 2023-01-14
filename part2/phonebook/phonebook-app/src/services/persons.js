import axios from "axios";

const dbBaseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(dbBaseUrl)
    return request.then(response => response.data)
}

const create = (newPersonObject) => {
    const request = axios.post(dbBaseUrl, newPersonObject)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${dbBaseUrl}/${id}`)
    return request.then(response => response.status)    // should return 200 if successful. I used this to know whenver something breaks here
}

const update = (id, newPersonObject) => {
    const request = axios.put(`${dbBaseUrl}/${id}`, newPersonObject)
    return request.then(response => response.data)
}

export default {
    getAll: getAll,
    create: create,
    deletePerson: deletePerson,
    update: update
}
