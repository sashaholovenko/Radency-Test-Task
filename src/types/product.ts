export enum ProductActionsTypes {
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR"

}
export interface Products {
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

export interface ProductState {
    products: Products[],
    loading: boolean,
    error: null | string
}

interface FetchProductAction {
    type: ProductActionsTypes.FETCH_PRODUCTS
}

interface FetchProductSuccessAction {
    type: ProductActionsTypes.FETCH_PRODUCTS_SUCCESS;
    payload: Products[]
}

interface FetchProductErrorAction {
    type: ProductActionsTypes.FETCH_PRODUCTS_ERROR;
    payload: string
}





export type ProductAction = FetchProductAction | FetchProductSuccessAction | FetchProductErrorAction