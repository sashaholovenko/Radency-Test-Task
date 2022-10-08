import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchUsers} from "../../store/action-creators/products";
import {Simulate} from "react-dom/test-utils";
import ProductItem from "./ProductItem";
import DeleteModal from "../modals/DeleteModal";
import './ProductList.css'
import AddModal from "../modals/AddModal";
import SortingPanel from "../app-sort/SortingPanel";
import {Products} from "../../types/product";
import {useHistory} from "react-router-dom";
import {DbContext} from "../../context";


const ProductList: React.FC = () => {

    const [deleteModalActive, setDeleteModalActive] = useState<boolean>(false)
    const [addModalActive, setAddModalActive] = useState<boolean>(false)
    const [itemToDelete, setItemToDelete] = useState<number | null>(null)
    const [sortOption, setSortOption] = useState<"alphabet" | "count">('alphabet')
    const history = useHistory()
    const {dbChanged, setDbChanged} = useContext(DbContext)

    const {products, loading, error} = useTypedSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchUsers())
    }, [dbChanged])

    if ( loading) {
        return <h1>Loading....</h1>
    }

    if (error) {
        return <h1>Error</h1>
    }

    if ( sortOption === "alphabet") {
         products.sort((x: Products, y:Products) => x.name.localeCompare(y.name));
    } else {
         products.sort((a: Products, b:Products) => ((a.count)) - (b.count));
    }


    return (

    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
            <SortingPanel sortOption={sortOption} setSortOption={setSortOption}/>
            {products.map( (product, index) =>
                <ProductItem key={product.id}
                             product={product}
                             setDeleteModalActive={setDeleteModalActive}
                             setItemToDelete={setItemToDelete}
                             index={index}
                             onRoute={() => history.push('/product/' + product.id)}
                />
            )}
            <button
                className="add__btn"
                onClick={() => setAddModalActive(true)} >Add product</button>
            <DeleteModal active={deleteModalActive}
                         setActive={setDeleteModalActive}
                         itemToDelete={itemToDelete}
                         dbChanged={dbChanged}
                         setDbChanged={setDbChanged}
            />
            <AddModal active={addModalActive}
                      setActive={setAddModalActive}
                      dbChanged={dbChanged}
                      setDbChanged={setDbChanged}
            />
        </div>
    );
};

export default ProductList;