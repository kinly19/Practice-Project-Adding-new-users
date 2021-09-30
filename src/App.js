import { useState } from 'react';
import './App.scss';
import NewUser from './components/NewUser/NewUser';
import UserList from './components/User/UserList';
import OverlayItem from './components/Overlay/OverlayItem';


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
  const [isInputValid, setIsInputValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  const addNewUser = (data) => { //passed down to NewUser
    setUser(prevState => {
      return [data, ...prevState];
    })
  }

  const IsInputValidHandler = (isInputValid) => { //pass down to NewUser.js and Overlay.js
    setIsInputValid(isInputValid);
  };

  const IsAgeValidHandler = (isAgeValid) => {
    setIsAgeValid(isAgeValid);
  };

  const closeOverlayHandler = (status) => {
    setIsInputValid(status);
    setIsAgeValid(status);
  };

  return (
    <div className="App">
      <h1>Practice project</h1>
      {!isInputValid && (
        <OverlayItem onCloseOverlay={closeOverlayHandler}
          message={"Please enter a valid name and age (non-empty values)"}
        />
      )}
      {!isAgeValid && (
        <OverlayItem onCloseOverlay={closeOverlayHandler}
          message={"Please enter a valid age (>0)"}
        />
      )}
      <UserList userItem={user} />
    </div>
  );
}

export default App;
