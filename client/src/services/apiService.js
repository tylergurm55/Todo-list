import axios from 'axios'
const BASE_URL = process.env.API_URL || 'http://localhost:8001'

const JWT_TOKEN = localStorage.getItem('token')

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${JWT_TOKEN}`
    
    }
})

export const login = async (data) => {
    try {
        const response = await apiClient.post('/auth/login', data)
        const { token, user } = response.data

        localStorage.setItem('token', token)
        return user

    } catch(e) {
        throw e
    }
}

export const signUp = async (data) => {
    try {
        const response = await apiClient.post('/auth/signup', data)
        const { token, user } = response.data

        localStorage.setItem('token', token)
        return user

    } catch(e) {
        throw e
    }
}

export const createRoutine = async (data) => {
    try {
        const response = await apiClient.post('/app/routine', data)
        const { user } = response.data
        return user
      
    } catch(e) {
        throw e
    }
}


export const getProfile = async ()=> {
    try {
        const response = await apiClient.get('/app/profile')
        const {user} = response.data
        console.log(getProfile)

        return user

    } catch(e) {
        throw e
    }
}

export const getFamousPerson = async ()=> {
    try {
    
        const response = await apiClient.get('/app/routine/users/famous')
        // const {user} = response.data
        console.log(getFamousPerson)

        // return user
        console.log(response)
        return response.data
    } catch(e){
        throw e
    }
}

export const getNormalPerson = async (id)=> {
    try {
    
        const response = await apiClient.get(`/app/routine/users/${id}`)
        const {user} = response.data
        console.log(this.state)
        console.log(this.props)
        console.log(user)
        // return user
        
        console.log(response)

        return response.data
    } catch(e){
        throw e
    }
}

