import { useContext, useEffect} from "react";
import style from "./home.module.scss"
import Card from "../../widgets/cardVehicle";
import {getVehicles} from "./api/getVehicles.ts";
import SortByPrice from "../../features/sortByPrice";
import SortByYear from "../../features/sortByYear";
import {VehContext} from "../../shared/lib/context/vehContext.ts";

function Home() {
    const {vehicles,setVehicles}=useContext(VehContext);
    useEffect(()=>{
      if (!vehicles || vehicles.length < 1) {
        getVehicles().then(res=>{
            if (typeof res.data !== 'string') {
                setVehicles(res.data)
            } else {
                setVehicles(JSON.parse(res.data))
            }
        })
      }
    }, [])

    if(!vehicles) return 'Пусто';

    return (

        <div className={style.home}>
            <div className={style.header}>
                    <SortByPrice></SortByPrice>
                    <SortByYear></SortByYear>
            </div>
            <div className={style.home__list}>
                {vehicles && (
                    vehicles.map((veh)=>{
                       return <Card key={veh.id} vehicle={veh}></Card>
                   })
               )}
           </div>
        </div>
    )
}
export default Home
