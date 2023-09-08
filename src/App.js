import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import ProfileScreen  from './ProfileScreen';
import { useEffect } from 'react';
import { auth } from './firebase';
import {useDispatch, useSelector} from "react-redux"
import { login,logout } from './features/userSlice';
import { selectUser } from './features/userSlice';

function App() {
  const user= useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(()=>{
 const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.id,
          email:userAuth.email
        }))
      }else{
        dispatch(logout())
      }
    })  
    return unsubscribe
  },[dispatch])
  return (
    <div className="app">
      <BrowserRouter>
       {!user?(<LoginScreen/>):
       (<Routes>
         <Route path='/' element={<HomeScreen/>}/>
         <Route path='/profile' element={<ProfileScreen/>} />
       </Routes>)}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
