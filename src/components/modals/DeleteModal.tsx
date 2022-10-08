import React, {Dispatch, FC, SetStateAction} from 'react';
import './DeleteModal.css'
import axios from "axios";

interface AddModalProps {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    itemToDelete: null | number,
    dbChanged: boolean,
    setDbChanged: Dispatch<SetStateAction<boolean>>
}

const DeleteModal: React.FC<AddModalProps> = ({active,setActive,itemToDelete, dbChanged, setDbChanged}) => {

    const onDeleteItem = async (id: number | null) => {
        await axios.delete('http://localhost:3000/products/' + itemToDelete).then(responce => {
            setDbChanged(!dbChanged)
        })
        setActive(false)
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h2>Your want to delete this item, are you sure?</h2>
                <div className="buttons__block">
                    <button onClick={() => onDeleteItem(itemToDelete)}>Yes</button>
                    <button onClick={() => setActive(false)}>No</button>
                </div>
            </div>
        </div>
    );
};



export default DeleteModal;