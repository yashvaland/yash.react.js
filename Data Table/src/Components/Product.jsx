import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const [product, setproduct] = useState([])
  const [page, setpage] = useState(1)
  const [company, setcompany] = useState(null)
  const [order, setorder] = useState(null)
  const [search,setsearch]=useState("")
  // ### get function ###
  const getfromserver = () => {
    axios.get(`http://localhost:3000/Products`, {
      params: {
        _page: page,
        _limit: 6,
        company: company,
        _sort: "price",
        _order: order,
        q:search
      }
    })
      .then((res) => {
        setproduct(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }
  const handledelete = (id) => {
    axios.delete(`http://localhost:3000/Products/${id}`)
      .then((res) => {
        alert("deleted...")
        getfromserver()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getfromserver()
  }, [page, company, order,search])
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "20px" }}>
        <select name="" id="" onChange={(e) => setcompany(e.target.value)} style={{ height: "40px", width: "200px" }}>
          <option value="">Select Company</option>
          <option value="mahindra">Mahindra</option>
          <option value="suzuki">Suzuki</option>
          <option value="toyota">Toyota</option>
        </select>
        <input type="text" onChange={(e)=>setsearch(e.target.value)} placeholder='Search' />

        <div style={{ display: "flex" }}>
          <button onClick={() => setorder("asc")}>Low To High</button>
          <button onClick={() => setorder("desc")}>Hight To Low</button>
        </div>
      </div>
      <hr />
      <h1>Products List</h1>
      <hr />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px", textAlign: "center" }}>
        {product.map((el) => (
          <div key={el.id} style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", padding: "20px" }}>
            <h1>{el.id}</h1>
            <Link to={`/singlepage/${el.id}`}>
              <img src={el.image} alt="" height="250px" width="100%" />
            </Link>
            <h3>{el.title}</h3>
            <h3>{el.price}</h3>
            <p>{el.description}</p>
            <div style={{ display: "flex", justifyContent: 'space-evenly', alignContent: "center" }}>
              <button style={{ backgroundColor: "black", fontSize: "15px" }}><Link style={{ textDecoration: "none", color: "green" }} to={`/edit/${el.id}`}>Edit</Link></button>
              <button onClick={() => handledelete(el.id)} style={{ backgroundColor: "black", color: "red", fontSize: "15px" }}>Delete</button>
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