import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { deleteClient, getClients, putClient,} from '../../../redux/action/clients';

const ClientTable = () => {
    const [input, setinput] = useState("");
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getClients())
    }, [])

    const deleteC = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteClient(id))
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                window.location.reload()
            }
        })
        
    }

    function onChange(e) {
		setinput(e.target.value);
	}
    
    function onSubmit(e) {
        e.preventDefault();
		dispatch(getClients(input));
		setinput("");
	} 

    const promoteToAdmin = (client) => {
        if(client.status === "active") {
            const clientSend = {
                clientModified: {
                    rol: "admin",
                },
            };
            dispatch(putClient(client.id, clientSend))
            Swal.fire({
                title: 'Promoted!!!',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload()
                }
              })
        }
        else {
            Swal.fire({
                title: 'this account is suspended, please renovate it and try again',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
            }
    }

    const changeStatus = (client) => {
        if(client.status === "active") {
            const clientSend = {
                clientModified: {
                    status: "banned",
                },
            };
            dispatch(putClient(client.id, clientSend))
            Swal.fire({
                title: 'Banned!!!',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload()
                }
              })
        } else {
            const clientSend = {
                clientModified: {
                    status: "active",
                },
            };
            dispatch(putClient(client.id, clientSend))
            Swal.fire({
                title: 'Renovated!!!',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload()
                }
              })
        }
    }

    const clientsLoaded = useSelector(state => state.clients.clientsLoaded)

    console.log(clientsLoaded, "aa")

    return (
        <div className="tracking-wide font-bold bg-gray-200">
            <div className=" mb-4  flex justify-center">
                {/* <button
                    className="inline-block px-12 flex justify-center w-10 h-11 h-10 -py-3 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none">
                    <a href="/postCategory">
                        Create category
                    </a>
                </button> */}
                <form className="relative mr-6 my-4 mb-1" onSubmit={onSubmit}>
                    <input type="search" value={input} onChange={onChange} className="bg-purple-white w-26 shadow rounded border-0 p-3" placeholder="Search by name...   " />
                    <button className="bg-gray" title="Buscar Categoria">🔍</button>
                    <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter">
                        <svg version="1.1" class="h-4 text-dark" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 52.966 52.966" style={{ enableBackground: "new 0 0 52.966 52.966" }} xmlSpace="preserve">
                        </svg>
                    </div>
                </form>
            </div >

            <table className="border-collapse w-full">
                <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Client</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Mail</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clientsLoaded && clientsLoaded.length > 0 ? clientsLoaded.map((c, id) => {
                        return <tr key={id} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                {c.name} {c.lastname}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                {c.email}
                            </td>
                            {c.status === "active" ?
                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    Active
                                </td> : <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    Suspended
                                </td>
                            }
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">

                                <div className="flex gap-5 justify-center" >
                                    <button type="submit"  onClick={() => changeStatus(c)} title={c.status === "active"? "Suspend Client":"Renovate Client"} className="flex text-white bg-indigo-500 border-0  mt-4 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z" /></svg></button>
                                    <button type="submit"  onClick={() => promoteToAdmin(c)} title="Promote to Administrator" className="flex text-white bg-green-500 border-0  mt-4 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z" /></svg></button>
                                    <button onClick={() => deleteC(c.id)} title="Delete Client" className="flex text-white bg-red-500 border-0  mt-4 py-2 px-6 focus:outline-none hover:bg-red-700 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" /></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    }) : ""}
                </tbody>
            </table>
            <br></br>
        </div >
    )
}

export default ClientTable