import React from 'react'
import AdminManage from '../component/AdminManage'
import { Outlet } from 'react-router-dom'

const CourseLayout = () => {
  return (
    <div>
       <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
       <div><AdminManage /></div>
       <div style={{width:"5px" , backgroundColor:"black",height:"100vh"}}></div>
       <div style={{marginRight:"20%"}}><Outlet /></div>
       </div>
    </div>
  )
}

export default CourseLayout