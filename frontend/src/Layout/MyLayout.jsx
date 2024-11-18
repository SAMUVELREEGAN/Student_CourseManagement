import React from 'react'
import Headers from '../component/Headers'
import { Outlet } from "react-router-dom";

const MyLayout = ({token,setToken,setStuToken}) => {
  console.log(token);
  
  return (
    <div>
        <Headers token={token} setToken={setToken} setStuToken={setStuToken}/>
        <Outlet />
    </div>
  )
}

export default MyLayout