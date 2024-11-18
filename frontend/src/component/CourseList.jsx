import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CourseList = () => {
    const[courseList,setCourseList] = useState('')
    useEffect(()=>{
        axios.get('http://localhost:8000/course/courselist/')
        .then(response=>{
            setCourseList(response.data)
        })
        .catch(error => {
            console.error('There was an error fetching the products!', error);
            });
    },[])
  
    
  return (
    <div>
        {
            courseList.length === 0 ? (
                <p>NO Course Lists</p>
            ) :(
                <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                    {
                        courseList.map((item,index)=>(
                            <div className='course_card'>
                                <div className='course_img'><img src={item.picture} alt=""/></div>
                                <div className='course_info'>
                                    <p><span style={{fontWeight:"700"}}>Course Name :</span> {item.course_name}</p>
                                    <p><span style={{fontWeight:"700"}}>Course Duration :</span> {item.course_duration} Months</p>
                                    <p><span style={{fontWeight:"700"}}>Fees :</span> ₹{item.paid_fee}</p>
                                    <div><button className='course_btn'>Buy Now</button></div>
                                </div>
                                
                            </div>
                        ))
                    }
                </div  >
            )
        }
    </div>
  )
}

export default CourseList