import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (value) => {
    setUsersList((prevUsersList) => {
      return [value, ...prevUsersList];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
