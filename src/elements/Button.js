import {useContext} from "react";
import {CustomContext} from "../App";

export const Button = ({refProp}) => {

    const context = useContext(CustomContext)
    const click = () => {
        context.setCount((prev) => prev + 1)
        console.log('count', context.count)
    }

 return (
     <button type='button' onClick={click} ref={refProp}>
         CLICK CALLBACK
     </button>
 )
}