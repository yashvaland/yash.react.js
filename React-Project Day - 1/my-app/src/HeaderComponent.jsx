import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
function HeaderComponent(){
    return(
        <>
        <div className='header'>
            <div class="logo">
                <h1>LOGO</h1>
            </div>
            <div class="link">
                <h3><a href=""style={{textDecoration:"none", color:"black"}}>Home</a>
                    <a href="" style={{textDecoration:"none",color:"black"}}>About</a>
                    <a href="" style={{textDecoration:"none",color:"black"}}>Contact</a></h3>
            </div>
            <div class="icon">
                <h3><a href="" style={{margin:"10px"}}><FaFacebookF /></a>
                    <a href=""style={{margin:"10px"}}><FaTwitter /></a>
                    <a href=""style={{margin:"10px"}}><FaInstagram /></a>
                </h3>
            </div>
    </div>
        </>
    )
}
export default HeaderComponent