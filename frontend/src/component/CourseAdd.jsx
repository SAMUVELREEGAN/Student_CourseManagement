import axios from 'axios';
import React, { useState } from 'react';
import upload from '../Asstes/upload.png'

const CourseAdd = () => {
  const [courseName, setCourseName] = useState('')
  const [courseDuration, setCourseDuration] = useState('')
  const [paidFee, setPaidFee] = useState('')
  const [pic, setPic] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('course_name', courseName)
    formData.append('course_duration', courseDuration)
    formData.append('paid_fee', paidFee)
    formData.append('picture', pic) 

    try {
      const response = await axios.post("http://localhost:8000/course/courseadd/", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      if (response) {
        setCourseName('')
        setCourseDuration('')
        setPaidFee('')
        setPic("")
      } 
    } catch (error) {
      console.error(error) 
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <div className='course_add_info'>
          <label htmlFor="pic">
            <img src={!pic ? upload : URL.createObjectURL(pic)} alt="" width={"150px"}/>
            <input type="file" onChange={(e) => setPic(e.target.files[0])} style={{display:"none"}} id='pic'/> 
          </label>
          <input type="text" placeholder='Course Name' onChange={(e) => setCourseName(e.target.value)} value={courseName} />
          <input type="text" placeholder='Course Duration' onChange={(e) => setCourseDuration(e.target.value)} value={courseDuration} />
          <input type="number" placeholder='Course Fees' onChange={(e) => setPaidFee(e.target.value)} value={paidFee} />
          <button type='submit'>Course Add</button>
        </div>
      </form>
    </div>
  );
};

export default CourseAdd;
