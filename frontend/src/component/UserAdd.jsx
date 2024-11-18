import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserAdd = () => {
  const {id} = useParams()
  const [data,setData] = useState([])
  const navigate = useNavigate()



  const fetchList = async()=>{
      axios.get(`http://localhost:8000/student/stuentdetails/${id}/`)
      .then(response => {
          setData(response.data)
      })
      .catch(err => {
          console.log('Failed to load profile');
      })

}

const handledata =(e)=>{
  setData({...data,[e.target.name]:e.target.value})
}

console.log(data);



const handleUpdate = async (e) => {
  e.preventDefault()
  const formData = new FormData()
  formData.append('Full_name', data.Full_name)
  formData.append('Mobile_number', data.Mobile_number)
  formData.append('Paid_fee', data.Paid_fee)
  try {
    await axios.patch(`http://localhost:8000/student/studentupdate/${data.id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    navigate('/adminmanage/userlist')
  } catch (error) {
    console.error("Error while updating course", error)
  }
}

useEffect(()=>{
fetchList()
},[id])
  
  return (
    <div>
        <form onSubmit={handleUpdate} encType="multipart/form-data">
        <div className='course_add_info'>

          <input type="text" onChange={handledata} value={data.Full_name} name="Full_name" />
          <input type="text" onChange={handledata} value={data.Mobile_number} name="Mobile_number" />
          <input type="text" onChange={handledata} value={data.Paid_fee} name="Paid_fee" />
          <button type='submit'>Update Student Details</button>
          </div>
        </form>
    </div>
  )
}

export default UserAdd