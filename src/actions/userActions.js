export const USER_LOGIN = 'USER_LOGIN'

export const login = (user) => {
    const userLogin = {}
    if(user.username === 'teste' && user.password === '1234') {
        setTimeout(() => {
                    
        }, 2000)
    }
    return {
        type: USER_LOGIN,
        payload: userLogin
    }    
}