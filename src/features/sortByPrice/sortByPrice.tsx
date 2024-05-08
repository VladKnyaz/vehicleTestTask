import Button from "../../shared/ui/Button";
import {useContext} from "react";
import {VehContext} from "../../shared/lib/context/vehContext.ts";


function SortByPrice() {
    const { setVehicles} = useContext(VehContext);

    const handleClick = () => {
        if (!setVehicles) return;
        setVehicles(prev=>{
            return [...prev.sort((veh1, veh2)=>veh2.price - veh1.price)]
        })
    }

    return(
        <Button onClick={handleClick}>Сортировать по цене</Button>
    )

}

export default SortByPrice
