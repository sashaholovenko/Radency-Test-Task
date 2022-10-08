import React, {Dispatch, SetStateAction, useContext, useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom'
import {Products} from "../types/product";
import axios from "axios";
import './ProductsItemPage.css'
import EditModal from "../components/modals/EditModal";
import {DbContext} from "../context";

interface UserItemPageParams {
    id: string
}
interface ProductItemPageProps {
    dbChanged: boolean,
    setDbChanged: Dispatch<SetStateAction<boolean>>
}

const ProductItemPage: React.FC = () => {

    const [product, setProduct] = useState<Products | null>(null)
    const [editModalStatus, setEditModalStatus] = useState<boolean>(false)
    const params = useParams<UserItemPageParams>()
    const history = useHistory()
    const {dbChanged, setDbChanged} = useContext(DbContext)

    useEffect(() => {
        getOneProduct()
    }, [])

    const getOneProduct = async () => {
        try {
            const responce = await axios.get('http://localhost:3000/products/' + params.id)
            setProduct(responce.data)
        } catch (e) {
            console.log('Error')
        }
    }



    return (
        <div className="container">
        <div className="item__page">
            <h1>Product page with id: {product?.id}</h1>
            <div>
                <h3>{product?.name}</h3>
            </div>
            <div>
                <h4>{product?.count}</h4>
            </div>
            <div>
                <h3>Size:</h3>
                width: {product?.size.width}
                height: {product?.size.height}
            </div>
            <div>
                <h3>Weight:</h3>
                {product?.weight}
            </div>
        </div>
            <div className='buttons'>
            <button onClick={() => history.push('/')}>Back</button>
            <button onClick={() => setEditModalStatus(true)}>Edit</button>
            </div>
            <EditModal
                active={editModalStatus}
                setActive={setEditModalStatus}
                dbChanged={dbChanged}
                setDbChanged={setDbChanged}
                product={product}
            />
        </div>
    );
};

export default ProductItemPage;