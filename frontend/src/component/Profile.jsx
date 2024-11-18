import React, { useState, useEffect } from 'react';
import axios from 'axios';
import im from '../Asstes/profile.png'

const Profile = () => {
    const [student, setStudent] = useState(null);
    const [courses, setCourses] = useState([]);
    const [token] = useState(localStorage.getItem('access_token'));

    useEffect(() => {
        if (token) {
            axios.get('http://localhost:8000/student/profile/', {headers: { 'Authorization': `Bearer ${token}` },})
            .then(response => {
                setStudent(response.data)
            })
            .catch(err => {
                alert('Failed to load profile');
            });
        }

        axios.get('http://localhost:8000/course/courselist/')
            .then(response => {
                setCourses(response.data)
            })
            .catch(err => {
                alert('Failed to load course list');
            });
    }, [token]);

    if (!student || !courses.length) {
        return <div>No Profile Details</div>
    }

    const studentCourse = courses.find(course => course.id === student.Course_ref);
    const courseName = studentCourse ? studentCourse.course_name : 'Not Selected';

    return (
        // <div>
        //     <h2>Profile</h2>
        //     <p>Name: {student.Full_name}</p>
        //     <p>Mobile: {student.Mobile_number}</p>
        //     <p>Course: {courseName}</p>
        //     <p>Paid Fee: {student.Paid_fee}</p>
        // </div>

        <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"wheat",padding:"5% 0px"}}>

          <div>
            <h2 style={{textAlign:"center"}}>Profile</h2>
          <div className="image-container"><img src={im} alt="Profile" className="profile-image"/></div>
          </div>
          <div></div>
          <div style={{marginTop:"2%"}}> 
            <h2>Personal Information</h2>
            <p style={{width:"500px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vitae iusto id officia reiciendis sed commodi asperiores aliquam voluptatibus beatae?</p>
            <table>
              <tc>
                <th>
                  <h3 style={{color:"gray"}}>Name </h3>
                  <h3 style={{color:"gray"}}>Contact </h3>
                  <h3 style={{color:"gray"}}>Course Name </h3>
                  <h3 style={{color:"gray"}}>Paid_fees</h3>
                </th>
              </tc>
              <tc>
                <th> 
                  <h3 className='ms-2'>:</h3>
                  <h3 className='ms-2'>:</h3>
                  <h3 className='ms-2'>:</h3>
                  <h3 className='ms-2'>:</h3>
                </th>
              </tc>
              <tc className="ms-4">
                <th>
                 <h3> {student.Full_name}</h3>
                 <h3> {student.Mobile_number}</h3>
                 <h3> {courseName}</h3>
                 <h3> {student.Paid_fee}</h3>
                </th>
              </tc>
            </table>
          </div>
          <div></div>
        </div>
    );
};

export default Profile;
