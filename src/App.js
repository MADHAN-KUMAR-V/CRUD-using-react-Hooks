import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UserTable from "./components/UserTable";
import UpdateUser from "./components/UpdateUser";

function App() {
 
  const userData = [
    { id: 1, name: "Madhan", username: "Madhan65" },
    { id: 2, name: "kumar", username: "Madhan64" },
    { id: 3, name: "Mk", username: "Madhan63" },
  ];
  const [users, setUsers] = useState(userData);
  const [editing, setEditing] = useState(false);

  const initialFormValue = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormValue);
  const addUser = (user) => { 
    user.id = users.length + 1
    setUsers([...users,user]);
   
  };
  const deleteUser = (id) => {
    console.log(id)
    setUsers(users.filter((user) => user.id !== id));
   
  };

  const editRow = (user) => {
    
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };
  const updateUser = (id, updatedUser) => {

    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };
  
  return (
    <>
      <h1>CRUD App using Hooks</h1>
      <div className="flex__row">
        <div className="flex__large">
          {editing ? (
            <>
              <h2>Edit User</h2>
              <UpdateUser setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>
            </>
          ) : (
            <>
              <h2>Add User</h2>
              <AddUser addUser={addUser} />
            </>
          )}
        </div>
        <div className="flex__large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </>
  );
}

export default App;
