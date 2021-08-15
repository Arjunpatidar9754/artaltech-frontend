import ACTIONS from './index'
import axios from 'axios'

const HOST_URL = process.env.HOST_URL || 'localhost:3001'

export const fetchAllUsers = async (token) => {
    const res = await axios.get(`${HOST_URL}/user/all_infor`, {
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