import {axiosInstance} from "../../../shared/api/axiosInstance.ts";
import {AxiosResponse} from "axios";
import {VehicleType} from "../../../shared/lib/types/vehicle.types.ts";

export async function getVehicles(){
    return await axiosInstance.get<string, AxiosResponse<VehicleType[]|string>>('vehicles')
}

export async function getVehicle(id:number|string){
    return await axiosInstance.get<string, AxiosResponse<VehicleType|string>>(`vehicles/${id}`)
}