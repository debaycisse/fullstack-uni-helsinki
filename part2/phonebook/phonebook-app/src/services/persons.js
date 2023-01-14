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


export default {
    getAll: getAll,
    create: create
}
