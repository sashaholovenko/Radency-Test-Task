import React, {Dispatch, SetStateAction, useEffect, useLayoutEffect, useRef, useState} from 'react';
import './EditModal.css'
import {Products} from "../../types/product";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import axios from "axios";

interface AddModalProps {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    dbChanged: boolean,
    setDbChanged: Dispatch<SetStateAction<boolean>>,
    product: Products | null
}

const AddModal: React.FC<AddModalProps> = ({active, setActive,dbChanged, setDbChanged, product}) => {

    const [productName, setName] = useState<string>()
    const [productCount, setCount] = useState<number | string>()
    const [productWidth, setWidth] = useState<number | string>()
    const [productHeight, setHeight] = useState<number | string>()
    const [productWeight, setWeight] = useState<number | string>()
    const [productComments, setComments] = useState([])

    const {products} = useTypedSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
            console.log(product)
            setName(product?.name)
            setCount(product?.count)
            setWidth(product?.size.width)
            setHeight(product?.size.height)
            setWeight(product?.weight)
    }, [product])


    const editProduct = async () => {

        const editedProduct = {
            name: productName,
            count: productCount,
            size: {
                width: productWidth,
                height: productHeight,
            },
            weight: productWeight,
            comments: []

        }
        console.log(editedProduct)
        await axios.put('http://localhost:3000/products/' + product?.id, editedProduct).then(respone => {
            // setName('')
            // setCount(0)
            // setWidth(0)
            // setHeight(0)
            setActive(false)
            setDbChanged(!dbChanged)
        })

    }



    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h2>Edit this product</h2>
                <div>
                    <form action="" style={{display: "flex", flexDirection: "column"}}>
                        <div >
                            <h3>Name</h3>
                            <input type="text"
                                   // placeholder="Name"
                                   value={productName}

                                   onChange={(e) => setName(e.target.value)}
                            />

                        </div>
                        <div >
                            <h3>Count</h3>
                            <input type="number"
                                   // placeholder="Count"
                                   onChange={(e) => setCount((e.target.value))}
                                   value={productCount}
                            />

                        </div>
                        <div>
                            <h3 >Size</h3>
                            <input type="number"
                                   // placeholder="width"
                                   onChange={(e) => setWidth((e.target.value))}
                                   value={productWidth}
                            />
                            <input type="number"
                                   // placeholder="height"
                                   onChange={(e) => setHeight((e.target.value))}
                                   value={productHeight}
                            />
                        </div>
                        <div>
                            <h3>Weight</h3>
                            <input type="number"
                                   // placeholder="weight"
                                   onChange={(e) => setName(e.target.value)}
                                   value={productWeight}
                            />
                        </div>
                        <div>
                            <h3>Comments</h3>
                            <input type="text"
                                   placeholder="Comments"
                                // value={productName}
                                // onChange={(e) => setComments(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
                <div className="add__btns">
                    <button className="btn green" onClick={editProduct}>Edit</button>
                    <button className="btn red" onClick={() => setActive(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddModal;