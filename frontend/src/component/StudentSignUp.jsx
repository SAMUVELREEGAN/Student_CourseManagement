import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StudentSignUp = () => {
    const [fullName, setFullName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [paidFee, setPaidFee] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [courses, setCourses] = useState([]) 
    const [selectedCourse, setSelectedCourse] = useState('') 

  
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:8000/course/courselist/')
                setCourses(response.data)
            } catch (err) {
                setError('Failed to load courses. Please try again later.')
            }
        }

        fetchCourses()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const studentSignUp = {
            Full_name: fullName,
            Mobile_number: mobileNumber,
            Paid_fee: paidFee,
            username:username,
            password:password,
            Course_ref: selectedCourse,
        }

        try {
            const response = await axios.post('http://localhost:8000/student/signup/', studentSignUp)
            if (response.data.success) {
                setSuccess(response.data.success)
                setFullName('')
                setMobileNumber('')
                setPaidFee('')
                setUsername('')
                setPassword('')
                setSelectedCourse('')
                setError(null)
            } else if (response.data.error) {
                setError(response.data.error)
            }
        } catch (err) {
            setError( 'Sign up failed. Please try again.')
        }
    };

    return (
        <div className='login_container'>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '90vh' }} >
                    <div className='login_child'>
                    <h2>Sign Up</h2>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                    <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
                    <input type="number" placeholder="Paid Fee" value={paidFee} onChange={(e) => setPaidFee(e.target.value)} required />

                    <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} required>
                        <option value="">Select a course</option>
                        {courses.map(course => (
                            <option key={course.id} value={course.id}>{course.course_name}</option>
                        ))}
                    </select>

                    <button type="submit">Sign Up</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                     {success && <p style={{ color: 'green' }}>{success}</p>}
                    </div>
                </div>
            </form>
            
        </div>
    );
};

export default StudentSignUp;
