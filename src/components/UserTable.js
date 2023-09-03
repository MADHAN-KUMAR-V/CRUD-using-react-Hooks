import React from 'react'

const UserTable = (props) => {
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length>0?(
                props.users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button className="btn" onClick={()=>props.editRow(user)}>Edit</button>
                            <button className="btn" onClick={()=>props.deleteUser(user.id) }>Delete</button>
                        </td>
                    </tr>
                ))
             
            ):(
                <tr>
                    <td colSpan={3}>No data</td>
                </tr>
            )}
           
        </tbody>
    </table>
  )
}

export default UserTable