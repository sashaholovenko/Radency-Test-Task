import React, {Dispatch, SetStateAction} from 'react';
import {Users} from "../types/user";

interface ProductProps {
    product: Users,
    setDeleteModalActive: Dispatch<SetStateAction<boolean>>,
    setItemToDelete: Dispatch<SetStateAction<number | null>>,
    index: number,
    onRoute: () => void
}

const ProductItem: React.FC<ProductProps> = (props) => {


    return (
        <div style={{backgroundColor: "whitesmoke", marginRight: 10, marginTop: 20, height: 100, width: "20%"}}

            onClick={() => {
                props.setItemToDelete(props.product.id)
                props.onRoute()
            }}>
            {props.index + 1}: {props.product.name}
            <button onClick={() => props.setDeleteModalActive(true) }>Delete</button>
        </div>
    );
};

export default ProductItem;