import axios from 'axios'

const API = 'https://private-985be2-testapi4279.apiary-mock.com/api';

class AuthService {

    login(credentials) {
        return axios.post(API + '/login', credentials)    
    }

    getUserInfo() {
        return JSON.parse(localStorage.getItem('userInfo'))
    }

    getAuthHeader() {
        return {headers: {Authorization: 'Bearer ' + this.getUserInfo().token }}
    }

    logout() {
        localStorage.removeItem('userInfo');
        return axios.post(API + '/logout', {})
    }
}

export default new AuthService();