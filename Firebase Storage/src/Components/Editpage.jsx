import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const initalstate = {
    title: "",
    price: 0,
    description: "",
    category: "",
    image: ""
}

const Editpage = () => {
    const { id } = useParams()
    const [formdata, setformdata] = useState(initalstate)
    const getsingledata = () => {
        axios.get(`http://localhost:3000/Products/${id}`)
            .then((res) => {
                console.log(res.data)
                setformdata(res.data)
            })
            .catch((err) => console.log(err))
    }
    const handlechange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(formdata)
        // axios
        axios.put(`http://localhost:3000/Products/${id}`, formdata)
            .then((res) => {
                console.log(res)
                alert("upadteedd")

            })
            .catch((err) => {
                console.log(err)
            })
    }
    const { title, image, description, category, price } = formdata
    useEffect(() => {
        getsingledata()
    }, [])
    return (
        <div style={{textAlign:"center"}}>
            <h1>Edit Products Page</h1>
            <div style={{ padding: "20px", height: "400px", width: "400px", border: "2px solid black", alignItems: "center" }}>
                <form onSubmit={(e) => handlesubmit(e)}>
                    IMAGE:- <input name='image' style={{margin:"15px"}} value={image} onChange={(e) => handlechange(e)} type="text" placeholder='image' /><br></br>
                    TITLE:- <input name='title' style={{margin:"15px"}} value={title} onChange={(e) => handlechange(e)} type="text" placeholder='title' /><br></br>
                    SELECT COMPANY:- <select name='category' style={{margin:"15px"}} value={category} onChange={(e) => handlechange(e)}>
                    <option value="">Select Company</option>
                        <option value="mahindra">Mahindra</option>
                        <option value="suzuki">Suzuki</option>
                        <option value="toyota">Toyota</option>
                    </select><br></br>
                    PRICE:- <input name='price' style={{margin:"15px"}} value={price} onChange={(e) => handlechange(e)} type="text" placeholder='price' /><br></br>
                    DESCRIPTION:- <input name='description' style={{margin:"15px"}} value={description} onChange={(e) => handlechange(e)} type="text" placeholder='description' /><br></br>
                    <input type="submit" style={{height:"50px", width:"100px"}}/>
                </form>
            </div>
        </div>
    )
}

export default Editpage
