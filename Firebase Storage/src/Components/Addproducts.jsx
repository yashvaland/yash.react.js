import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../Services/firebase'



const Addproducts = () => {
    const [formdata, setformdata] = useState({
        title: "",
        price: 0,
        description: "",
        company: "",
        image: ""
    })
    const { title, image, description, company, price } = formdata

    const handlechange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(formdata);
        let data = await addDoc(collection(db, "products"), formdata)
            .then((res) => {
                alert("Products add....")
                console.log(res);
            }).catch((err) => {
                console.log(err, "error from add")
            })
        // // post data
        // console.log(data)
        try{
            const res=await addDoc((collection(db,"products"),formdata))
            console.log(res)
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div >
            <div style={{ textAlign: "center" }}>
                <h1>Add Products Page</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ padding: "20px", height: "400px", textAlign: "center", width: "400px", border: "2px solid black", alignItems: "center" }}>
                    <form onSubmit={(e) => handlesubmit(e)}>
                        IMAGE:- <input name='image' style={{ margin: "10px" }} value={image} onChange={(e) => handlechange(e)} type="text" placeholder='image' /><br></br>
                        TITLE:- <input name='title' style={{ margin: "10px" }} value={title} onChange={(e) => handlechange(e)} type="text" placeholder='title' /><br></br>
                        SELECT COMAPNY:- <select name='company' style={{ margin: "10px" }} value={company} onChange={(e) => handlechange(e)}>
                            <option value="">Select Company</option>
                            <option value="mahindra">Mahindra</option>
                            <option value="suzuki">Suzuki</option>
                            <option value="toyota">Toyota</option>
                        </select><br></br>
                        PRICE:- <input name='price' style={{ margin: "10px" }} value={price} onChange={(e) => handlechange(e)} type="text" placeholder='price' /><br></br>
                        DESCRIPTION:- <input name='description' style={{ margin: "10px" }} value={description} onChange={(e) => handlechange(e)} type="text" placeholder='description' /><br></br>
                        <div style={{ display: "flex", justifyContent: "center", alignContent: "center", marginTop: "20px" }}>
                            <input type="submit" style={{ height: "50px", width: "100px" }} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addproducts