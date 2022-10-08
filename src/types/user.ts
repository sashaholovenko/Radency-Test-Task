export enum UserActionsTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"

}
export interface Users {
    id: number,
    imageUrl: string,
    name: string,
    count: number,
    size: {
        width: number,
        height: number
    },
    weight: number,
    comments: string[]
}

export interface UserState {
    users: Users[],
    loading: boolean,
    error: null | string
}

interface FetchUserAction {
    type: UserActionsTypes.FETCH_USERS
}

interface FetchUserSuccessAction {
    type: UserActionsTypes.FETCH_USERS_SUCCESS;
    payload: Users[]
}

interface FetchUserErrorAction {
    type: UserActionsTypes.FETCH_USERS_ERROR;
    payload: string
}





export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction