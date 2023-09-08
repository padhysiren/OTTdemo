import { useEffect, useState } from "react"
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
   const[show,handleShow]=useState(false);
   const navigate =  useNavigate()
   const transitionNavBar =()=> {
    if(window.scrollY>100){
        handleShow(true)
      }
      else{
        handleShow(false)
      }}

      useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return ()=> window.removeEventListener('scroll',transitionNavBar ) 
    },[])

  return (
        <div className={`nav ${show && "nav_black"}` }>
          <div className="nav_content">
            <img 
             onClick={()=>navigate("/")}
             className="nav_logo"
             src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
             alt="" 
             />
            <img
            onClick={()=>{navigate("/profile")}}
             className="nav_avatar"
             src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
              alt=""
             />
          
           </div>
        </div>
  )
}

export default Navbar