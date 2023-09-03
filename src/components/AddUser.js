import React, { useState } from 'react'

const AddUser = (props) => {

    const initialFormValue = {id:null,name:"",username:""}

    const [user,setUser] = useState(initialFormValue)

    const handleInputChange =(e)=>{
     const {name,value} = e.target
     setUser({...user,[name]:value})
    }
  return (
    <form onSubmit={(e)=>{
        e.preventDefault();
        if(!user.name || !user.username ) return;
        props.addUser(user);
        setUser(initialFormValue)
    }}>
        <input type="text"  name='name' onChange={handleInputChange} placeholder='Enter name'  value={user.name}/>
        <input type="text" name='username'onChange={handleInputChange} placeholder='Enter usernamename'  value={user.username}/>
        <button>Add new user</button>
    </form>
  )
}

export default AddUser