import React from 'react'

const AdminManage = () => {
  return (
    <div>
        <div>
        <div className='admin_manage'>
           <a href="/adminmanage/"> <button>Course Add</button></a>
           <a href="/adminmanage/editcourse"> <button>Edit Course</button></a>
            <a href="/adminmanage/userlist"><button>Student List</button></a>
        </div>
        <div>

        </div>
        </div>
    </div>
  )
}

export default AdminManage