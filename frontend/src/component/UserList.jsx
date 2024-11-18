import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [userList, setUserList] = useState([])
  const [courseList, setCourseList] = useState([])
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const userResponse = await axios.get("http://localhost:8000/student/studentlist/")
      setUserList(userResponse.data)

      const courseResponse = await axios.get('http://localhost:8000/course/courselist/')
      setCourseList(courseResponse.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  };

  const Remove = async(id)=>{
    await axios.delete(`http://localhost:8000/student/studentdelete/${id}/`)
  fetchData()
 }

  useEffect(() => {
    fetchData()
  }, []);

  const handleEdit = (item) => {
    navigate(`/adminmanage/useradd/${item.id}`)   
}

  return (
    <div className='user_list'>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student Mobile Number</th>
            <th>Course Name</th>
            <th>Student Paid Fees</th>
            <th>Balance Fees</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item, index) => {
            const course = courseList.find(course => course.id === item.Course_ref)
            const balanceFee = course ? (course.paid_fee - item.Paid_fee) : 0;
            const course_name = course ? (course.course_name) : "Not Select";
            return (
              <tr key={index}>
                <td>{item.Full_name}</td>
                <td>{item.Mobile_number}</td>
                <td>{course_name}</td>
                <td>{item.Paid_fee}</td>
                <td>{balanceFee}</td>
                <td><button onClick={() => handleEdit(item)} className='bg-success text-light'>Edit</button></td>
                <td><button className='bg-danger text-light' onClick={()=>Remove(item.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
