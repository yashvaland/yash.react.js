import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [data, setdata] = useState([])
    const getdata = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setdata(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <div>
            <h1>Products Page</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)",textAlign:"center" }}>
                {data.map((el) => {
                    return <div key={el.id} style={{border:"2px solid black"}}>
                        <h1>{el.id}</h1>
                        <img src={el.image} alt="" height={200} width={200} />
                        <h2>{el.title}</h2>
                        <p>{el.description}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Dashboard