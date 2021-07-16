import axios from "axios";

const headers = {
    'Content-Type': 'application/json'
}
const endPoint = "http://localhost/react-backend/";

export const validateReCaptcha = async (token) => {
    
    return await axios.post(endPoint + 'verifyRecaptcha.php', { token }, {headers});
}


export const registerUser = async (data) => {
    return await axios.post(endPoint + 'register.php', data , {headers});
}

export const ValidateEmail = async (token) => {
    return await axios.post(endPoint + 'verifyEmail.php', { token } , {headers});
} 

export const loginUser = async (data) => {
    return await axios.post(endPoint + 'login.php', data , {headers});
}