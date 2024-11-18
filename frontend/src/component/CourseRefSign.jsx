import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CourseRefSign = () => {
    const [courses, setCourses] = useState(""); 
    // const [selectedCourse, setSelectedCourse] = useState('');
    useEffect(()=>{
        axios.get('http://localhost:8000/course/courselist/')
        .then(response=>{
            setCourses(response.data)
        })
        .catch(error => {
            console.error('There was an error fetching the products!', error);
            });
    },[])
    console.log(courses);
  return (
    <div>CourseRefSign</div>
  )
}

export default CourseRefSign