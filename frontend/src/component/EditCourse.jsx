import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const EditCourse = () => {
    const [courseList,setCourseList] = useState([])
    const navigate = useNavigate()


    const fetchList = async()=>{
        const response =await axios.get('http://localhost:8000/course/courselist/')
        .then(res=>setCourseList(res.data))
        .catch(er=>er)
 
    } 
    
  const Remove = async(id)=>{
     await axios.delete(`http://localhost:8000/course/coursedelete/${id}/`)
   fetchList()
  }
  const handleEdit = (item) => {
    navigate(`/adminmanage/courseupdate/${item.id}`);
    
};

  useEffect(()=>{
    fetchList()
  },[])

    
  return (
    <div className='user_list'>
       {courseList.length === 0 ?(
            <p>No Courses</p>
       )
    : 
    (
        <table>
        <tr>
            <th>Course Img</th>
            <th>Course Name</th>
            <th>Course Duration</th>
            <th>Course Fees</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
      {
        courseList.map((item,index)=>(
            <tr key={index}>
                <td><img src={item.picture} alt=""  width={"50px"}/></td>
                <td>{item.course_name}</td>
                <td><p>{item.course_duration} Months</p></td>
                <td><p>{item.paid_fee}</p></td>
                <td><p style={{ fontSize:"18px"}} title='Edit' onClick={() => handleEdit(item)}><FaEdit /></p></td>
                <td><p style={{fontSize:"18px"}} onClick={()=>Remove(item.id)}><RiDeleteBin6Fill /></p></td>
                
            </tr>
        ))
        
      }
    </table>
    )}
    </div>
  )
}

export default EditCourse