import axios from 'axios'
import React, { useState } from 'react'

const initalstate = {
    title: "",
    price: 0,
    description: "",
    category: "",
    image: ""
}

const Addproducts = () => {
    const [formdata, setformdata] = useState(initalstate)
    const handlechange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const { title, image, description, category, price } = formdata
    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(formdata)

        // post data
        axios.post("http://localhost:3000/Products", formdata)
            .then((res) => {
                alert("data added")
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div style={{ textAlign: "center",alignContent:"center" }}>
            <h1>Add Products Page</h1>
            <div style={{ padding: "20px", height: "400px", width: "400px", border: "2px solid black",alignItems:"center"}}>
                <form onSubmit={(e) => handlesubmit(e)}>
                    IMAGE:- <input name='image' style={{margin:"10px"}} value={image} onChange={(e) => handlechange(e)} type="text" placeholder='image' /><br></br>
                    TITLE:- <input name='title' style={{margin:"10px"}}value={title} onChange={(e) => handlechange(e)} type="text" placeholder='title' /><br></br>
                    SELECT COMAPNY:- <select name='category' style={{margin:"10px"}} value={category} onChange={(e) => handlechange(e)}>
                        <option value="">Select Company</option>
                        <option value="mahindra">Mahindra</option>
                        <option value="suzuki">Suzuki</option>
                        <option value="toyota">Toyota</option>
                    </select><br></br>
                    PRICE:- <input name='price' style={{margin:"10px"}} value={price} onChange={(e) => handlechange(e)} type="text" placeholder='price' /><br></br>
                    DESCRIPTION:- <input name='description' style={{margin:"10px"}} value={description} onChange={(e) => handlechange(e)} type="text" placeholder='description' /><br></br>
                    <input type="submit" style={{height:"50px", width:"100px"}}/>
                </form>
            </div>
        </div>
    )
}

export default Addproducts