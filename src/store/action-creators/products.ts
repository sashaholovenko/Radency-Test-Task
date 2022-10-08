import {ProductAction, ProductActionsTypes, ProductState} from "../../types/product";
import {Action, ActionCreator, Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionsTypes.FETCH_PRODUCTS})
            const responce = await axios.get("http://localhost:3000/products")
            dispatch({type: ProductActionsTypes.FETCH_PRODUCTS_SUCCESS, payload: responce.data})
        } catch (e) {
            dispatch({type: ProductActionsTypes.FETCH_PRODUCTS_ERROR, payload: "Error..."})
        }
    }
}