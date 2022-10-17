function Modal(props) {
    return (
    <div className="Modal">
        <p>{props.text}</p>
        <button className="btn btn--alt" onClick={props.onClose}>
            No
        </button>
        <button className="btn" onClick={props.onClose}>
            Yes
        </button>
    </div>
    );
}

export default Modal;