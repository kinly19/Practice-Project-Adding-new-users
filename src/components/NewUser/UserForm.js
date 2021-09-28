import {useState} from 'react';
import './UserForm.scss';


const UserForm = ({onSaveUserData}) => {

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');

    const submitHandler = (e) => {
      const inputData = {
        //store data onSubmit
        Name: inputName,
        Age: inputAge,
      };

      e.preventDefault();
      setInputName("");
      setInputAge("");
      onSaveUserData(inputData); //pass up to NewUser.js
      console.log("form submit");
    };

    const NameChangeHandler = (e) => {
        setInputName(e.target.value);
    };

    const AgeChangeHandler = (e) => {
        setInputAge(e.target.value);
    };

  return (
    <form onSubmit={submitHandler}>
      <div className="user-form">
        <div className="user-form__input">
          <label>Usernane</label>
          <input 
          type="text" 
          value={inputName}
          onChange={NameChangeHandler}
          />
        </div>
        <div className="user-form__input">
        <label>Age (Years)</label>
          <input 
          type="text" 
          value={inputAge}
          onChange={AgeChangeHandler}
          />
        </div>
        <button>Add User</button>
      </div>
    </form>
  );
};

export default UserForm;