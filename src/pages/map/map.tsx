import {useNavigate, useParams} from "react-router-dom";

import {YMaps, Map as MapYa, Placemark} from "@pbe/react-yandex-maps";
import {useContext, useEffect, useState} from "react";
import {VehicleType} from "../../shared/lib/types/vehicle.types.ts";
import {getVehicle} from "../home/api/getVehicles.ts";
import {VehContext} from "../../shared/lib/context/vehContext.ts";

function Map() {
    const {setIsGoBack}=useContext(VehContext)
    const [vehicle, setVehicle]=useState<VehicleType>()
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (params.id) {
            getVehicle(params.id).then((res)=>{
                if (typeof res.data === 'string') {
                    setVehicle(JSON.parse(res.data))
                } else {
                    setVehicle(res.data)
                }
                setIsGoBack(true)
            })
        } else {
            setIsGoBack(false)
            navigate(-1);
        }

    }, []);
    return (
        <div className={'daad'}>
            {vehicle && (
                <YMaps>
                    <div>
                        <MapYa width="100%" height={"90vh"} state={{ center: [vehicle.latitude, vehicle.longitude], zoom: 16 }} >
                            <Placemark geometry={[vehicle.latitude, vehicle.longitude]} ></Placemark>
                        </MapYa>
                    </div>
                </YMaps>
            )}
        </div>
    )
}
export default Map
