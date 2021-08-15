import ACTIONS from './index'
import axios from 'axios'

const REACT_APP_API_HOSTNAME = process.env.REACT_APP_API_HOSTNAME || 'localhost:3001'

export const fetchAllUsers = async (token) => {
    const res = await axios.get(`${REACT_APP_API_HOSTNAME}/user/all_infor`, {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetAllUsers = (res) => {
    return {
        type: ACTIONS.GET_ALL_USERS,
        payload: res.data
    }
}