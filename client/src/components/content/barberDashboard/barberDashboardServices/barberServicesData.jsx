import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToService, getBarbers, removeFromService } from '../../../../redux/action/barbers';
import { getServices, postBarberService } from '../../../../redux/action/services';
import jwtDecode from "jwt-decode"

const BarberServicesData = ({ filters }) => {
    const dispatch = useDispatch();


    const validate = (input) => {
        let errors = {};
        // name
        if (!input.name) errors.name = "A name is required!";
        return errors;
    };


    const services = useSelector((state) => state.services.array);
    const barbers = useSelector((state) => state.barbers.services)
	const [barberImg, setBarberImg] = useState([]);
    const [image, setImage] = useState("");
	const [url, setUrl] = useState("");

    const uploadImage = (e) => {
		e.preventDefault();
		const data = new FormData();
		data.append("file", image);
		data.append("upload_preset", "rvmvdcdy");
		data.append("cloud_name", "dpvccwnjv");
		fetch("https://api.cloudinary.com/v1_1/dpvccwnjv/image/upload", {
			method: "post",
			body: data,
		})
			.then((resp) => resp.json())
			.then((data) => {
				setUrl(data.url);
				setBarberImg([...barberImg, data.url]);
			})
			.catch((err) => console.log(err));
	};

    useEffect(() => {
        dispatch(getServices())
    }, []);

    const barberId = localStorage.getItem("barberToken")
    const barberData = jwtDecode(barberId)
    const [data, setData] = useState({ price: 0, barberId: "", name: "", serviceId: "" });
    const handleAdd = (e) => {
        dispatch(addToService(e))
    }

    const handleRemove = (e) => {
        dispatch(removeFromService(e))
    }

    const postService = () => {
        const barberService = {
            barberId: barberData.id,
            serviceId: barbers.id,
            name: data.name,
            price: Number(data.price),
            image: [image]
        }
        // console.log("BarberService.  = " + barbers.id);
        dispatch(postBarberService(barberService))
        window.location.href = 'http://localhost:3000/barbers/dashboard';
    }

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
		// console.log(e.target.name)
		setErrors(
			validate({
                ...data,
				[e.target.name]: e.target.value,
			})
		);
	};

    const filtered = services.filter(n => n.Categories ? n.Categories.name === filters : 0)

    return (
        <div>
            <div className="grid overflow-auto h-96 sm:grid-cols-1 sm:grid-cols-6">
                {filtered &&
                    filtered.map((n) => (
                        <div key={n.id} className="text-center m-8 border rounded-xl pb-1 w-4/5 shadow-md">
                            <img
                                className="rounded-lg h-30 w-full"
                                src={n.image[0]}
                                alt=""
                                width="200px"
                                height="200px"
                            />
                            <h4 className="font-bold">{`${n.name}`}</h4>
                            {filters === "HAIRCUT" ? barbers.haircut.length !== 0 && n.name === barbers.haircut[0].name ?
                                <button className="bg-red-400 px-2 rounded" onClick={() => handleRemove(n)}>Remove</button>
                                : <button className="bg-green-400 px-2 rounded" onClick={() => handleAdd(n)}>Add</button>
                                : ""
                            }
                            {filters === "KIDHAIRCUT" ? barbers.kids.length !== 0 && n.name === barbers.kids[0].name ?
                                <button className="bg-red-400 px-2 rounded" onClick={() => handleRemove(n)}>Remove</button>
                                : <button className="bg-green-400 px-2 rounded" onClick={() => handleAdd(n)}>Add</button>
                                : ""
                            }
                            {filters === "MASK" ? barbers.mask.length !== 0 && n.name === barbers.mask[0].name ?
                                <button className="bg-red-400 px-2 rounded" onClick={() => handleRemove(n)}>Remove</button>
                                : <button className="bg-green-400 px-2 rounded" onClick={() => handleAdd(n)}>Add</button>
                                : ""
                            }
                            {filters === "OZON" ? barbers.ozon.length !== 0 && n.name === barbers.ozon[0].name ?
                                <button className="bg-red-400 px-2 rounded" onClick={() => handleRemove(n)}>Remove</button>
                                : <button className="bg-green-400 px-2 rounded" onClick={() => handleAdd(n)}>Add</button>
                                : ""
                            }
                            {filters === "HAIRCOLOR" ? barbers.color.length !== 0 && n.name === barbers.color[0].name ?
                                <button className="bg-red-400 px-2 rounded" onClick={() => handleRemove(n)}>Remove</button>
                                : <button className="bg-green-400 px-2 rounded" onClick={() => handleAdd(n)}>Add</button>
                                : ""
                            }
                            {filters === "DESIGN" ? barbers.design.length !== 0 && n.name === barbers.design[0].name ?
                                <button className="bg-red-400 px-2 rounded" onClick={() => handleRemove(n)}>Remove</button>
                                : <button className="bg-green-400 px-2 rounded" onClick={() => handleAdd(n)}>Add</button>
                                : ""
                            }
                            {filters === "BEARDCUT" ? barbers.beard.length !== 0 && n.name === barbers.beard[0].name ?
                                <button className="bg-red-400 px-2 rounded" onClick={() => handleRemove(n)}>Remove</button>
                                : <button className="bg-green-400 px-2 rounded" onClick={() => handleAdd(n)}>Add</button>
                                : ""
                            }
                        </div>
                    ))}
            </div>
            <div className="border-t-4 border-blue-400 mt-10"></div>
            <div className="flex justify-center text-2xl font-semibold text-gray-900 leading-8 mt-4 ">
                <span className="tracking-wide"> Your New Service </span>
            </div>
            <div>
                <div className="grid sm:grid-cols-3 mt-6 mb-4 grid-cols-1">
                    <div>
                        <label className="font-semibold text-gray-900 leading-8 mr-2">Service Name:</label>
                        <input onChange={(e) => setData({...data, name: e.target.value })} className="border-2 border-gray-700 rounded"></input>
                    </div>
                    <div>
                        <label className="font-semibold text-gray-900 leading-8 mr-2">Price:</label>
                        <input type="number" onChange={(e) => setData({...data, price: e.target.value }) } className="border-2 border-gray-700 rounded"></input>
                    </div>
                    <input
                        className="w-full px-1 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="image"
                        type="file"
                        name="image"
                        onChange={(e) => setImage(e.target.files[0])}
                    /><button onClick={(e) => uploadImage(e)}>Upload</button>


                </div>
            </div>

            <div className="flex justify-center mt-10">
                <button onClick={() => postService()} className="bg-blue-400 px-8 py-2 rounded">Post</button>
            </div>
        </div>
    )
}

export default BarberServicesData
