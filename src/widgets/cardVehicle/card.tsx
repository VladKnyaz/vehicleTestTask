import style from "./card.module.scss"
import {VehicleType} from "../../shared/lib/types/vehicle.types.ts";
import Button from "../../shared/ui/Button";
import {DeleteOutlined, EditOutlined, SearchOutlined} from "@ant-design/icons";
import {ModalEdit} from "../../features/modal";
import {useContext, useState} from "react";
import {VehContext} from "../../shared/lib/context/vehContext.ts";
import {useNavigate} from "react-router-dom";

function Card({vehicle}: { vehicle: VehicleType }) {
    const {setVehicles, setIsGoBack}= useContext(VehContext)
    const [openModal, setOpenModal] = useState<boolean>(false);
    const navigate = useNavigate()

    const handleEdit=()=>{
        setOpenModal(true)

    }
    const handleCloseModal=()=>{
        setOpenModal(false)

    }
    const handleOpenOnMap=()=>{
        navigate(`/on-map/${vehicle.id}`)
        setIsGoBack(true);
    }

    const handleDelete=()=>{
        setVehicles((prev)=>{
            return [...prev.filter((veh)=>veh.id !== vehicle.id)]
        })
    }

    return (
        <div className={style.card}>
            <h3>{`${vehicle.name} ${vehicle.model}`}</h3>
            <p>Год: {vehicle.year}</p>
            <p>Цвет: {vehicle.color}</p>
            <p>Цена: {vehicle.price}</p>
            <p className={style.coords}>Координаты:
                <span>Долгота {vehicle.latitude}</span>
                <span>Широта {vehicle.longitude}</span>
            </p>
            <div className={style.buttons}>
                <Button icon={<EditOutlined />} onClick={handleEdit}>Редактировать</Button>
                <Button icon={<SearchOutlined />} onClick={handleOpenOnMap}>Посмотреть на карте</Button>
                <Button icon={<DeleteOutlined />} onClick={handleDelete}>Удалить</Button>
            </div>

            <ModalEdit onClose={handleCloseModal} isOpened={openModal} vehicle={vehicle}></ModalEdit>
        </div>
    )
}

export default Card
