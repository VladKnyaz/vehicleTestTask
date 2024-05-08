import React, {MouseEventHandler} from "react"
import style from "./button.module.scss"
import cn from "classnames";

type TProps = {
    icon?: React.ReactNode;
    className?: string;
    onClick?: MouseEventHandler | undefined;
    children: React.ReactNode;
    type?: "submit" | "reset" | "button" | undefined;
}

export function Button({icon, className, onClick, children, type}:TProps) {
    return (
        <button className={cn(style.button, className)} onClick={onClick} type={type}>
            {icon && <span>{icon}</span>}
            {children}
        </button>
    )
}
