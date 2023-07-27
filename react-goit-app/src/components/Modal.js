import {useCallback, useEffect} from "react";
import {createPortal} from "react-dom";

const modalDom = document.querySelector('#modal-root');
export const Modal = ({closeClick, children}) => {

    const closeModalHandler = useCallback((e) => {
        if (e.key === 'Escape') return closeClick()
    }, [closeClick])

    useEffect(() => {
        window.addEventListener('keydown', closeModalHandler)

        return () => {
            window.removeEventListener('keydown', closeModalHandler)
        }
    }, [closeModalHandler]);

    return (
       createPortal(
           <div className='modal-default-background'>
               <div className="modal-default-content">
                   {children}
               </div>
           </div>,
           modalDom
       )
    )
}