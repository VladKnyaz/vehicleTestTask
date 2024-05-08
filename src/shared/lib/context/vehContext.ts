import {createContext} from "react";
import {VehicleType} from "../types/vehicle.types.ts";

type TContext = {
    vehicles: VehicleType[],
    setVehicles: React.Dispatch<React.SetStateAction<VehicleType[]>>;
    isGoBack: boolean;
    setIsGoBack: React.Dispatch<React.SetStateAction<boolean>>;

}

export const VehContext = createContext<TContext>({vehicles: [], setVehicles:()=>{}, isGoBack: false,setIsGoBack:()=>{}});