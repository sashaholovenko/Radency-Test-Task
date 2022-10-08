import React, {Dispatch, SetStateAction} from 'react';
import {Products} from "../../types/product";
import './ProductItem.css'

interface ProductProps {
    product: Products,
    setDeleteModalActive: Dispatch<SetStateAction<boolean>>,
    setItemToDelete: Dispatch<SetStateAction<number | null>>,
    index: number,
    onRoute: () => void
}

const ProductItem: React.FC<ProductProps> = (props) => {


    return (
        <div className="item"

            onClick={() => {
                props.setItemToDelete(props.product.id)
                props.onRoute()
            }}>
            <h4>{props.index + 1}: {props.product.name}</h4>
            <p>Count: {props.product.count}</p>
            <button className="btns" onClick={(e) => {
                props.setDeleteModalActive(true)
                props.setItemToDelete(props.product.id)
                e.stopPropagation()
            }
            }>Delete</button>

        </div>
    );
};

export default ProductItem;