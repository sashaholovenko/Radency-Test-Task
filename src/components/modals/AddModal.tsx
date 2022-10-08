import React, {Dispatch, SetStateAction, useRef, useState} from 'react';
import './AddModal.css'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import axios from "axios";

interface AddModalProps {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    dbChanged: boolean,
    setDbChanged: Dispatch<SetStateAction<boolean>>
}

const AddModal: React.FC<AddModalProps> = ({active, setActive,dbChanged, setDbChanged}) => {

    const [productName, setName] = useState<string>('')
    const [productCount, setCount] = useState<number>(0)
    const [productWidth, setWidth] = useState<number>(0)
    const [productHeight, setHeight] = useState<number >(0)
    const [productWeight, setWeight] = useState<number>(0)
    const [productComments, setComments] = useState<string[]>([])

    const {products} = useTypedSelector(state => state.product)
    const dispatch = useDispatch()

    const createProduct = async () => {

        const product = {
            name: productName,
            count: productCount,
            size: {
                width: productWidth,
                height: productHeight,
            },
            weight: productWeight,
            comments: []

        }
        console.log(product)

        await axios.post('http://localhost:3000/products', product).then(respone => {
            setName('')
            setCount(0)
            setWidth(0)
            setHeight(0)
            setWeight(0)
            setActive(false)
            setDbChanged(!dbChanged)
            console.log(dbChanged)
        })

    }



    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div>
                <form action="" style={{display: "flex", flexDirection: "column"}}>
                    <div >
                        <h3>Name</h3>
                        <input type="text"
                               placeholder="Name"
                               onChange={(e) => setName(e.target.value)}
                        />

                    </div>
                    <div >
                        <h3>Count</h3>
                        <input type="number"
                               placeholder="Count"
                               onChange={(e) => setCount(Number(e.target.value))}
                        />

                    </div>
                    <div>
                        <h3 >Size</h3>
                        <input type="number"
                               placeholder="width"
                               onChange={(e) => setWidth(Number(e.target.value))}
                        />
                        <input type="number"
                               placeholder="height"
                               onChange={(e) => setHeight(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <h3>Weight</h3>
                        <input type="number"
                               placeholder="weight"
                               onChange={(e) => setWeight(Number(e.target.value))}
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
                    <button className="btn green" onClick={createProduct}>Create</button>
                    <button className="btn red" onClick={() => setActive(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddModal;