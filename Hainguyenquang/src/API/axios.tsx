import axios from "axios";


export const api = axios.create({
    baseURL:"http://localhost:3000/"
    
})

export const getValues = async() => {
    const response = await api.get('/')
    return response.data
}