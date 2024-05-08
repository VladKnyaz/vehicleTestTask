import {ReactNode, useEffect, useState} from "react"
import ReactDOM from "react-dom";

type TProps = {
   children: ReactNode
}

export default function Portal({children}: TProps) {
    const [container]= useState(()=>document.createElement('div'))
    useEffect(()=>{
        document.body.appendChild(container);
        return ()=>{
            document.body.removeChild(container);
        }
    },[])

    return ReactDOM.createPortal(children, container)
}
