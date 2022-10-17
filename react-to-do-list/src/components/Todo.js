import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [ModalIsOpen, setModalIsOpen] = useState();

    function showModalHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className="toDoCard">
            <h2>{props.text}</h2>
            <div className="options">
                <button className="btn" onClick={showModalHandler}>
                    Delete
                </button>
            </div>
            {ModalIsOpen && < Backdrop onClick={closeModalHandler}/>}
            {ModalIsOpen && < Modal text="Are you sure about that?" clickedNo = {closeModalHandler}/>}
      </div>
    );
}

export default Todo;