import jwt from 'jsonwebtoken'

export const signInUser = (token) => {    
    localStorage.setItem("token",token)
}

export const signOutUser = () => {
    localStorage.removeItem("token")
    return 'expired'
}

export const checkAuthStatus = () => {
    const token = localStorage.getItem("token")
    if(token) {
        let decodedToken = jwt.decode(token, { complete: true });
        let dateNow = new Date();
        if (decodedToken.payload.exp * 1000 < dateNow.getTime()) {
            return('expired')
        }
        return('valid')
    }
    else{
        return 'expired'
    }
}