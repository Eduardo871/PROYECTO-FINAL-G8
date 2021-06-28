import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToAppointment, getBarberServices, removeFromAppointment } from '../../../redux/action/services';
import { addToCart, removeFromCart, getGuestCart, addToGuestCart, removeFromGuestCart, getActiveCartFromUserId, resetUserCart } from '../../../redux/action/cart';
import jwtDecode from 'jwt-decode';


const BarberDetailServices = ({ filters }) => {
    const dispatch = useDispatch();
    const { resp } = useSelector((state) => state);
    const services = useSelector((state) => state.services.array);
    const selectedServices = useSelector((state) => state.services.services);
    const token = localStorage.getItem("clientToken") ? jwtDecode(localStorage.getItem("clientToken")) : null;
    const cart = useSelector(state => state.cart.activeCart)
    const barberDetail = useSelector(state => state.barberDetail.resp)


    const { id } = useParams()
    useEffect(() => {
        dispatch(getBarberServices(id))
        if (token !== null) {
            dispatch(getActiveCartFromUserId(token.id))
        }
    }, []);

    const filtered = services?.services?.filter(n => n.categories.length && n.categories[0].name === filters)


    const [appointment, setAppointment] = useState({ service: "", extraOne: "", extraTwo: "", extraThree: "", seleccion: false })
    const [kids, setKids] = useState({ service: "", extraOne: "", extraTwo: "", extraThree: "", seleccion: false })
    console.log(filters, "aaa")


    const handleAdd = (e) => {
        const service = {
            serviceBarberId: e.serviceBarber.id,
            price: e.serviceBarber.price,
            name: e.name
        }

        if (token === null) {
            addToGuestCart(service)
            dispatch(addToAppointment(e))
        } else if (cart && cart.serviceBarbers.length > 0 && cart.serviceBarbers[0].barberId === barberDetail.id) {
            dispatch(addToCart(token.id, service))
            dispatch(addToAppointment(e))
            localStorage.setItem("barberId", id)
        } else if (cart && cart.serviceBarbers.length > 0 && cart.serviceBarbers[0].barberId !== barberDetail.id) {
            dispatch(resetUserCart(token.id)).then(() =>
                dispatch(addToCart(token.id, service)))
            dispatch(addToAppointment(e))
            localStorage.setItem("barberId", id)
        } else {
            dispatch(addToCart(token.id, service))
            dispatch(addToAppointment(e))
            localStorage.setItem("barberId", id)
        }
    }


    const handleRemove = (e) => {
        console.log("sadfgasdfd" + e.serviceBarber.id)
        const service = {
            serviceBarberId: e.serviceBarber.id,
            price: e.serviceBarber.price,
            name: e.name
        }

        if (token === null) {
            const service = {
                serviceBarberId: e.serviceBarber.id,
                price: e.serviceBarber.price,
                name: e.name
            }
            removeFromGuestCart(service)
        } else {
            dispatch(removeFromCart(token.id, service.serviceBarberId));
            dispatch(removeFromAppointment(e))
        }

    }

    return (
        <div>
            <div>
                {filtered && filtered.length > 0 ?
                    <div className="grid overflow-auto h-96 sm:grid-cols-1 sm:grid-cols-6">
                        {filtered.map((n) => (
                            <div
                                key={n.id}
                                className="text-center m-8 border rounded-xl pb-1 w-4/5 shadow-md"
                            >
                                <img
                                    className="rounded-lg h-30 w-full"
                                    src={n.image[0]}
                                    alt=""
                                    width="200px"
                                    height="200px"
                                />
                                <h4 className="font-bold">{`${n.name}`}</h4>
                                {/* <h4 className="font-bold">{`${n.description}`}</h4> */}
                                <div className="flex justify-center pt-1 pb-2">
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 m-0 text-yellow-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg> */}
                                    <h6 className="">${n.serviceBarber.price}</h6>
                                </div>
                                <button className="bg-blue-400 px-2 rounded" onClick={() => handleAdd(n)}>Add to Cart</button>
                            </div>
                        ))} </div> : <div className="flex my-20 justify-center">Ooops... Looks like there's no services here</div>}

            </div>
        </div>

    )

}


export default BarberDetailServices
