import {UserAction, UserActionsTypes, UserState} from "../../types/user";
import {Action, ActionCreator, Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionsTypes.FETCH_USERS})
            const responce = await axios.get("http://localhost:3000/products")
            dispatch({type: UserActionsTypes.FETCH_USERS_SUCCESS, payload: responce.data})
        } catch (e) {
            dispatch({type: UserActionsTypes.FETCH_USERS_ERROR, payload: "Error..."})
        }
    }
}