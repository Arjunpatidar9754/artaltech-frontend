import ACTIONS from './index'
import axios from 'axios'

const REACT_APP_API_HOSTNAME = process.env.REACT_APP_API_HOSTNAME || 'localhost:3001'
export const dispatchLogin = () => {
    return {
        type: ACTIONS.LOGIN
    }
}

export const fetchUser = async (token) => {
    const res = await axios.get(`${REACT_APP_API_HOSTNAME}/user/infor`, {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetUser = (res) => {
    return {
        type: ACTIONS.GET_USER,
        payload: {
            user: res.data,
            isAdmin: res.data.role === 1 ? true : false
        }
    }
}