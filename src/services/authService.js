import axios from 'axios'

//const API = 'https://private-985be2-testapi4279.apiary-mock.com/api';
const API = 'https://json-server-jwt.herokuapp.com'
const headers = {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json'
}

class AuthService {

    login(credentials) {
        return axios.post(API + '/login', credentials, { headers })    
    }

    getUserInfo() {
        return JSON.parse(localStorage.getItem('userInfo'))
    }

    getAuthHeader() {
        return {headers: {Authorization: 'Bearer ' + this.getUserInfo().token }}
    }

    logout() {
        localStorage.removeItem('userInfo');        
    }
}

export default new AuthService();