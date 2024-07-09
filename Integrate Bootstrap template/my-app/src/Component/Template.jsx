import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
const Template = () => {
    return (
        <div className="container" style={{alignContent:"center",backgroundColor:"black",color:"white", borderRadius:"20px"}}>
            <div className="row">
            <div className="col" style={{alignContent:"center"}}>
                <div className="text">
                    <h1>Hi,Hi,i'm Yash Valand.</h1>
                    <p>Afreelance Web developer from India.I convert custom Web designs to bootstrap templates.</p>
                    <p>I make YouTube Videos and Write Blog</p>

                    <button>I'M AVAILABLE</button>
                </div>
                <div className="icons" style={{margin:"20px"}}> 
                        <a href="" style={{color:"white"}}>
                        <FaFacebookF style={{margin:"10px",height:"20px",width:"20px"}}/>
                        <FaTwitter style={{margin:"10px",height:"20px",width:"20px"}}/>
                        <AiFillInstagram style={{margin:"10px",height:"20px",width:"20px"}}/>
                        <FaGithub style={{margin:"10px",height:"20px",width:"20px"}}/>
                        </a>
                </div>
            </div>
            <div className="col">
                <img src="https://preview.colorlib.com/theme/schmidt/images/jschmidt.png" alt="" height={400} width={350} />
            </div>
            </div>

        </div>
    )
}

export default Template
