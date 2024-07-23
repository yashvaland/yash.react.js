import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const [product, setproduct] = useState([])
  const [page, setpage] = useState(1)
  const getfromserver = () => {
    axios.get(`http://localhost:3000/Products?_page=${page}&_limit=5`)
      .then((res) => {
        setproduct(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getfromserver()
  }, [page])
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Products Page</h1>
      <hr />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px", textAlign: "center" }}>
        {product.map((el) => (
          <div key={el.id} style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", padding: "20px" }}>
            <h1>{el.id}</h1>
            <Link to={`/singlepage/${el.id}`}>
              <img src={el.image} alt="" height={200} width={200} />
            </Link>
            <h3>{el.title}</h3> 
            <h3>{el.price}</h3>
            <p>{el.description}</p>
            <div style={{ display: "flex", justifyContent: 'space-evenly', alignContent: "center" }}>
              <button style={{ backgroundColor: "black", color: "green", fontSize: "15px" }}>Edit</button>
              <button style={{ backgroundColor: "black", color: "red", fontSize: "15px" }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {/* {pagination} */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
        <button disabled={page == 1} onClick={() => setpage(page - 1)}>Prev</button>
        <span>{page}</span>
        <button disabled={page == 4} onClick={() => setpage(page + 1)}>Next</button>
      </div>
    </div>

  )
}

export default Product