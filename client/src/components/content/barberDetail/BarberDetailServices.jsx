import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToAppointment, getBarberServices, removeFromAppointment } from '../../../redux/action/services';
import { addToCart, removeFromCart, getGuestCart, addToGuestCart, removeFromGuestCart, getActiveCartFromUserId, resetUserCart } from '../../../redux/action/cart';
import { addToWishlist, getClientWishList, removeFromWishlist } from "../../../redux/action/wishlist"
import jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2'


const BarberDetailServices = ({ filters }) => {
    const dispatch = useDispatch();
    const { resp } = useSelector((state) => state);
    const services = useSelector((state) => state.services.array);
    const selectedServices = useSelector((state) => state.services.services);
    const token = localStorage.getItem("clientToken") ? jwtDecode(localStorage.getItem("clientToken")) : null;
    const cart = useSelector(state => state.cart.activeCart)
    const barberDetail = useSelector(state => state.barberDetail.resp)
    const wishlist = useSelector(state => state.wishlist.wishlist[0])
    const [cambio, setCambio] = useState(false)

    console.log(wishlist)

    const { id } = useParams()
    useEffect(() => {
        dispatch(getBarberServices(id))
        if (token !== null) {
            dispatch(getActiveCartFromUserId(token.id))
            dispatch(getClientWishList(token.id))
            setCambio(false)
        }
    }, [cambio]);

    // const [wish, setWish] = useState(false)

    // useEffect(() => {
    //     if (token !== null) {
    //         dispatch(getClientWishList(token.id))
    //     }
    // }, [wish])
    const filtered = services?.services?.filter(n => n.categories.length && n.categories[0].name === filters)


    const [appointment, setAppointment] = useState({ service: "", extraOne: "", extraTwo: "", extraThree: "", seleccion: false })
    const [kids, setKids] = useState({ service: "", extraOne: "", extraTwo: "", extraThree: "", seleccion: false })
    console.log(token, "aaa")


    const handleAdd = (e) => {
        const service = {
            serviceBarberId: e.serviceBarber.id,
            price: e.serviceBarber.price,
            name: e.name
        }

        if (token === null) {
            Swal.fire({
                title: "Added to your cart, please log in to buy this product",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
            }).then(() => {
                localStorage.setItem("barberId", id)
                addToGuestCart(service)
                dispatch(addToAppointment(e))
            })



        } else if (cart && cart.serviceBarbers.length > 0 && cart.serviceBarbers[0].barberId === barberDetail.id) {
            Swal.fire({
                title: "Added to your cart!!!",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
            }).then(() => {
                dispatch(addToCart(token.id, service))
                dispatch(addToAppointment(e))
                localStorage.setItem("barberId", id)
            })
        } else if (cart && cart.serviceBarbers.length > 0 && cart.serviceBarbers[0].barberId !== barberDetail.id) {
            Swal.fire({
                title: "Added to your cart!!!",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
            }).then(() => {
                dispatch(resetUserCart(token.id)).then(() =>
                    dispatch(addToCart(token.id, service)))
                dispatch(addToAppointment(e))
                localStorage.setItem("barberId", id)
            })

        } else {
            Swal.fire({
                title: "Added to your cart!!!",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
            }).then(() => {
                dispatch(addToCart(token.id, service))
                dispatch(addToAppointment(e))
                localStorage.setItem("barberId", id)
            })

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

    const addWishlist = (e) => {
        const service = {
            serviceBarberId: e.serviceBarber.id,
            price: e.serviceBarber.price,
            name: e.name,
            image: e.image[0]

        }
        dispatch(addToWishlist(token.id, service))
        dispatch(getClientWishList(token.id))

        Swal.fire(
            'Wishlist',
            'Added to Wishlist',
            'success'

        ).then(() => getClientWishList(token.id))

        setCambio(true)
    }

    const removeWishlist = (e) => {
        const service = {
            serviceBarberId: e.serviceBarber.id,
            price: e.serviceBarber.price,
            name: e.name
        }
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'success',
                cancelButton: 'danger'
            },
            buttonsStyling: true
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeFromWishlist(token.id, service.serviceBarberId))
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your favorite has been removed.',
                    'success'
                ).then(() => dispatch(getClientWishList(token.id)))
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your favorite is safe :)',
                    'error'
                )
            }
        })
        setCambio(true)
    }
    console.log(filtered)



    let favorites = []
    let favoritesCopy = []
    let favoritesDos = []

    if (wishlist && wishlist?.serviceBarbers?.length > 0) {
        wishlist?.serviceBarbers?.map(e => favorites.push(e))
        wishlist?.serviceBarbers?.map(e => favoritesCopy.push(e))
        console.log(favoritesCopy)
    }



    return (
        <div class="text-primary">
            <div className="h-full">
                {filtered && filtered.length > 0 ?
                    <div className="grid overflow-auto sm:w-auto w-56 h-1/2 gap-4 sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {filtered.map((n) => (
                            <div
                                key={n.id}
                                className="flex flex-col items-center text-center mt-8 w-48 h-64 shadow-md px-4"
                            >
                                <div class="relative">
                                    <div>
                                        <img
                                            className="rounded-lg h-48 w-full"
                                            src={n.image[0]}
                                            alt=""
                                            width="200px"
                                            height="200px"
                                        />
                                    </div>
                                    {token ? (
                                        <div>
                                            {
                                                favorites && !favorites.length ? <button onClick={() => addWishlist(n)} style={{ top: "5px", right: "-26px" }} class="text-xl cursor-pointer absolute bg-gray px-1 py-1 opacity-80 hover:bg-gray-300 rounded mr-8">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" /></svg>
                                                </button> : favorites.map(e => {
                                                    if (Number(e.favorite.serviceBarberId) === Number(n.serviceBarber.id)) {
                                                        console.log("Entra ", e.favorite.serviceBarberId, n.serviceBarber.id)
                                                        return (
                                                            <button onClick={() => removeWishlist(n)} style={{ top: "3px", right: "-28px" }} className="text-xl cursor-pointer absolute bg-gray z-50 px-1 py-1 hover:bg-gray-300 rounded mr-8">
                                                                ❤️ </button>
                                                        )
                                                    } else if (Number(e.favorite.serviceBarberId) !== Number(n.serviceBarber.id)) {
                                                        console.log("Entra Al Segundo", e.favorite.serviceBarberId, n.serviceBarber.id)

                                                        return (
                                                            <button onClick={() => addWishlist(n)} style={{ top: "5px", right: "-26px" }} className="text-xl cursor-pointer absolute bg-gray px-1 py-1 opacity-80 hover:bg-gray-300 rounded mr-8">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" /></svg>
                                                            </button>
                                                        )
                                                    }
                                                })
                                            }

                                        </div>
                                    ) : ""}
                                </div>
                                <h1 className="font-bold">${n.price}</h1>
                                {/* ServiceBarbers [] boton vacio (funciona)
                                ServiceBarbers [...] filtrado: encuentra y renderiza ❤️
                                no encuentra y renderiza vacio */}
                                {/*  */}
                                <button className="bg-secondary text-white font-bold mt-1 p-1 hover:bg-primary"
                                    onClick={() => handleAdd(n)}>
                                    ADD TO CART
                                </button>
                            </div>

                        ))} </div> : <div className="flex my-20 justify-center">Ooops... Looks like there's no services here</div>}

            </div>
        </div>

    )

}


export default BarberDetailServices
