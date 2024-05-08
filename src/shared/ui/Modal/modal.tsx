import {ReactNode, useEffect} from "react"
import {Portal} from "../Portal";
import {CloseCircleFilled} from "@ant-design/icons";
import "./modal.scss"

type TProps = {
    children: ReactNode;
    onClose: ()=>void;
    isOpened: boolean;
}

export default function Modal({children, isOpened, onClose}: TProps) {

    useEffect(()=>{
        if (isOpened){
            document.body.style.overflow='hidden';
        } else {
            document.body.style.overflow='auto';
        }

    },[isOpened])

    if (!isOpened) {
        return null;
    }
    return (
        <Portal>
            <div className="modal">
                <div className="content">
                    <div className="header"><CloseCircleFilled style={{ fontSize: '1.3rem' }} onClick={onClose} role="button" tabIndex={0}/></div>
                    {children}
                </div>
            </div>
        </Portal>

    )
}
