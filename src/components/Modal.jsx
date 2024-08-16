import React from 'react'
import { useNavigate } from 'react-router-dom'

const Modal = ({
    heading = 'heading',
    text = 'something',
    buttonDo = () => { }
}) => {

    const navigate = useNavigate()

    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-white">
                <h3 className="font-bold text-lg">{heading}</h3>
                <p className="py-4">{text}</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={() => navigate('/auth')} className="btn mr-3">Signup / login</button>
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default Modal