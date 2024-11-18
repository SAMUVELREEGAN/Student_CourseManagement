import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import upload from '../Asstes/upload.png'

const CourseUpdate = () => {

  const navigate = useNavigate()
  const {item} = useParams("")
  const[pic,setPic] = useState('')
  console.log(item);
  const [data,setData] = useState({course_name:'',course_duration:'',paid_fee:'',picture:""})

  
  

  const fetchData = ()=>{
    axios.get(`http://localhost:8000/course/coursedetails/${item}/`)
    .then(response=>{
        setData(response.data)
    })
    .catch(error => {
        console.error('There was an error fetching the products!', error);
        });
      
  }
  
 const handleData=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
 }

 const handleImageChange = (e) => {
  const file = e.target.files[0]
  setPic(file)
  setData(prevData => ({...prevData,picture: file}))
}
 
const handleUpdate = async (e) => {
  e.preventDefault()
  const formData = new FormData()
  formData.append('course_name', data.course_name)
  formData.append('course_duration', data.course_duration)
  formData.append('paid_fee', data.paid_fee)
  if (pic) formData.append('picture', pic)  
  try {
    await axios.patch(`http://localhost:8000/course/courseupdate/${data.id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    navigate('/adminmanage/editcourse')
  } catch (error) {
    console.error("Error while updating course", error)
  }
}

  console.log(data);
  
  
useEffect(()=>{
 fetchData()
},[item])



return (
  <>
    <form onSubmit={handleUpdate} encType="multipart/form-data">
      <div className='course_add_info'>

        <label htmlFor="pic">
          <img src={pic ? URL.createObjectURL(pic) : data.picture || upload} alt="Course Preview" width="150px"/>
          <input type="file"  onChange={handleImageChange} style={{ display: "none" }}id="pic"/>
        </label>

        <input type="text" placeholder="Course Name" value={data.course_name} name="course_name" onChange={handleData}/>

        <input type="text" placeholder="Course Duration" value={data.course_duration} name="course_duration" onChange={handleData}/>

        <input type="number" placeholder="Course Fees" value={data.paid_fee} name="paid_fee" onChange={handleData}/>
        
          <button type="submit">Course Update</button>
        </div>
      </form>
    </>
  )
}

export default CourseUpdate