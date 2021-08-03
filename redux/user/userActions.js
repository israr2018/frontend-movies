import axios from "../../Actions/api_config/userAxios";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = (size, page) => {
    return async dispatch => {
        try {
            dispatch(fetchUsersRequest());
            const response = await axios.get(`/users/get-users?getAll=${false}&perPage=${size}&page=${page}`);
            const users = response.data;
            dispatch(fetchUsersSuccess(users));
        } catch (error) {
            const errMsg = error.message;
            dispatch(fetchUsersFailure(errMsg));
        }
    }
}