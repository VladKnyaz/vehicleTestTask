import Button from "../../shared/ui/Button";
import {useContext} from "react";
import {VehContext} from "../../shared/lib/context/vehContext.ts";


function SortByYear() {
    const {setVehicles}= useContext(VehContext);

    const handleClick = () => {
        if (!setVehicles) return;
        setVehicles(prev=>{
            return [...prev.sort((veh1, veh2)=>veh2.year - veh1.year)]
        })
    }

    return (
        <Button onClick={handleClick}>Сортировать по годам</Button>
    )

}

export default SortByYear
