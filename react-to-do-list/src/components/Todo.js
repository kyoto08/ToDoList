import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [ModalIsOpen, setModalIsOpen] = useState(false);

    function handlerDelete() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className="toDoCard">
            <h2>{props.text}</h2>
            <div className="options">
                <button className="btn" onClick={handlerDelete}>
                    Delete
                </button>
            </div>
            {ModalIsOpen && < Modal />}
            {ModalIsOpen && < Backdrop clickedNo = {closeModalHandler}/>}
      </div>
    );
}

export default Todo;