import axios from 'axios'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../Services/firebase'

const Descriptionpage = () => {
    const [singleproduct,setsingleproduct]=useState({})
    const params=useParams()

    const getDataFromFirebase = async() => {
        getDocs(collection(db, "products"))
        .then((res) => {
          const filterData = res.docs.map((el) => ({id : el.id, ...el.data()}))
          setsingleproduct(filterData)
        })
        .catch((err) => {
          console.log(err)
        })
      };
    // const getsingldata=()=>{
    //     axios.get(`http://localhost:3000/Products/${params.id}`)
    //     .then((res)=>setsingleproduct(res.data))
    //     .catch((err)=>console.log(err))
    // }
    useEffect(()=>{
        getDataFromFirebase()
    },[])
    // const {id,title,description,price,category,image}=singleproduct
    return (
    <div>
        <h1>Description page</h1>
        <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
            <div style={{width:"50%"}}>
                <h1>{singleproduct.id}</h1>
                <img src={singleproduct.image} alt="" height="250px" width="500px"/>
                <h3>{singleproduct.title}</h3>
                <h1>{singleproduct.price}</h1>
                <h3>{singleproduct.company}</h3>
                <p>{singleproduct.description}</p>
            </div>
        </div>

    </div>
  )
}

export default Descriptionpage