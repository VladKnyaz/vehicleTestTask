import Modal from "../../shared/ui/Modal";
import {VehicleType} from "../../shared/lib/types/vehicle.types.ts";
import Button from "../../shared/ui/Button";
import {useContext, useState} from "react";
import style from "./modal.edit.module.scss"
import {VehContext} from "../../shared/lib/context/vehContext.ts";

type TProps = {
    onClose: ()=>void;
    isOpened: boolean;
    vehicle: VehicleType;
}

interface FormElements extends HTMLFormControlsCollection {
    nameVeh: HTMLInputElement
    price: HTMLInputElement
    model: HTMLInputElement
}

interface FormEvent extends HTMLFormElement {
    readonly elements: FormElements
}

function ModalEdit({isOpened,onClose,vehicle}: TProps ) {

    const [model, setModel] = useState<VehicleType['model']>(vehicle.model);
    const [price, setPrice] = useState<VehicleType['price']>(vehicle.price);
    const [name, setName] = useState<VehicleType['name']>(vehicle.name);
    const {setVehicles}= useContext(VehContext);

    const onSubmit =(e: React.FormEvent<FormEvent>)=>{
        e.preventDefault();
        setVehicles(prev=>{
            return prev.map((veh)=>{
                if (veh.id !== vehicle.id) return veh
                return {...veh,price,model,name}
            })
        })
        onClose()

    }

    return (
        <Modal isOpened={isOpened} onClose={onClose}>
            <form onSubmit={onSubmit} className={style.form}>
                <input
                    type="text"
                    name="nameVeh"
                    value={name}
                    placeholder="Название авто"
                    onChange={(e) => {
                        setName(e.target.value)}}
                />

                <input
                    type="number"
                    value={price}
                    name="price"
                    placeholder="Цена"
                    onChange={(e) => setPrice(Number(e.target.value))}
                />

                <input type="text"
                       name="model"
                       value={model}
                       placeholder="Название модели"
                       onChange={(e) => setModel(e.target.value)}
                />
                <Button className={style.button} type="submit">Cохранить</Button>
            </form>
        </Modal>
    )
}

export default ModalEdit
