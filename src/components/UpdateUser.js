import React, { useEffect, useState } from 'react'

const UpdateUser = (props) => {
    const[user,setUser]=useState(props.currentUser)

    useEffect(()=>{
        setUser(props.currentUser)
    },[props])

    const handleInputChange =(e)=>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
       }
  return (
    <form onSubmit={(e)=>{
        e.preventDefault();
        if(!user.name || !user.username ) return;
        props.updateUser(user.id,user);
    }}>
        <input type="text"  name='name' onChange={handleInputChange} placeholder='Enter name'  value={user.name}/>
        <input type="text" name='username'onChange={handleInputChange} placeholder='Enter usernamename'  value={user.username}/>
        <button>Update user</button>
        <button onClick={()=>{
            props.setEditing(false)
        }}>Close</button>
    </form>
  )
}

export default UpdateUser