import { useState } from 'react';
import './App.scss';
import UserList from './components/User/UserList';
import UserForm from './components/NewUser/UserForm';

function App() {

  const initialData = [
    {
      id: Math.random().toString(),  
      Name: "Crim",
      Age: "23"
    },
    {
      id: Math.floor(Math.random()),  
      Name: "Qween",
      Age: "25"
    },
  ];

  const [user, setUser] = useState(initialData)
  
  const addNewUser = (data) => { //passed down to userForm
    setUser(prevState => {
      return [data, ...prevState];
    })
  }

  return (
    <div className="App">
      <h1>Practice project</h1>
      <UserForm onSaveUserData={addNewUser}/>
      <UserList userItem={user} />
    </div>
  );
}

export default App;
