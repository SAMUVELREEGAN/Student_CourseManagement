import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './component/LandingPage';
import MyLayout from './Layout/MyLayout';
import Admin from './component/Admin';
import Home from './Home';
import StudentSignUp from './component/StudentSignUp';
import StudentLogin from './component/StudentLogin';
import CourseAdd from './component/CourseAdd';
import CourseList from './component/CourseList';
import CourseLayout from './Layout/CourseLayout';
import UserList from './component/UserList';
import CourseRefSign from './component/CourseRefSign';
import EditCourse from './component/EditCourse';
import { useEffect, useState } from 'react';
import UserAdd from './component/UserAdd';
import CourseUpdate from './component/CourseUpdate';
import Profile from './component/Profile';

function App() {
  const [token,setToken] = useState(localStorage.getItem('admin_access_token')?localStorage.getItem('admin_access_token'):'')
  const [Stutoken,setStuToken] = useState(localStorage.getItem('access_token')?localStorage.getItem('access_token'):'')

  useEffect(()=>{
    localStorage.setItem('admin_access_token',token)
    localStorage.setItem('access_token',Stutoken)
  },[token,Stutoken])
  console.log(Stutoken);
  console.log(token);
  

  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/admin' element={<Admin Stutoken={Stutoken}/>} ></Route>
      <Route path='/studentlogin' element={<StudentLogin />}></Route>
      <Route path='/studentsignup' element={<StudentSignUp />}></Route>
      <Route path='/courseref' element={<CourseRefSign />}></Route>

      {token || Stutoken ? (
            <Route element={<MyLayout setToken={setToken} token={token} setStuToken={setStuToken} />}>
              <Route path="/home" element={<Home />} />
              <Route path="/courselist" element={<CourseList />} />
              <Route path="/profile" element={<Profile />} />
              
              {token ? (
                <Route path="/adminmanage" element={<CourseLayout />}>
                  <Route path="/adminmanage/" element={<CourseAdd />} />
                  <Route path="/adminmanage/userlist" element={<UserList />} />
                  <Route path="/adminmanage/useradd/:id" element={<UserAdd />} />
                  <Route path="/adminmanage/editcourse" element={<EditCourse />} />
                  <Route path="/adminmanage/courseupdate/:item" element={<CourseUpdate />} />
                </Route>
              ) : (
                <Route path="*" element={<Navigate to="/" />} />
              )}
            </Route>
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
