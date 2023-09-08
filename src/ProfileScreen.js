import "./ProfileScreen.css"
import Navbar from './Navbar'
import { selectUser } from "./features/userSlice"
import { useSelector } from "react-redux"
import { auth } from "./firebase"
const ProfileScreen = () => {
    const user = useSelector(selectUser)
  return (
    <div className="profileScreen">
        <Navbar/>
        <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
                <img className="profileScreen_avatar"
                 src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
                 alt="" />
            <div className="profileScreen_details">
                  <h2>{user.email}</h2>
                <div className="profileScreen_plans">
                    <h3>Plans</h3>
                    <button  onClick={()=>auth.signOut()}
                     className="profileScreen_signOut">Sign Out</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen