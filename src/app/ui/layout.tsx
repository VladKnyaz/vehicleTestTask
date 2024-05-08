import style from "./layout.module.scss"
import {ReactNode, SetStateAction, useState} from "react";
import {VehContext} from "../../shared/lib/context/vehContext.ts";
import {VehicleType} from "../../shared/lib/types/vehicle.types.ts";
import Button from "../../shared/ui/Button";
import {BackwardOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

function Layout({children}: {children: ReactNode}) {
    const [vehicles, setVehicles] = useState<VehicleType[]>([])
    const [isGoBack, setIsGoBack] = useState<boolean>(false);
    const setVehiclesHandle = (data: SetStateAction<VehicleType[]>) => {
        setVehicles(data)
    }
    const navigate = useNavigate()
    const handleBack = ()=>{
        navigate(-1);
        setIsGoBack(false)
    }

    return (
        <VehContext.Provider value={{
            vehicles,
            setVehicles:setVehiclesHandle,
            isGoBack,
            setIsGoBack
        }}>
        <div className={style.layout}>
            <div className={style.header}>
                {isGoBack && <Button onClick={handleBack} icon={<BackwardOutlined/>}>Назад</Button>}
            </div>
            {children}
        </div>
        </VehContext.Provider>

    )

}

export default Layout
