import {useState} from 'react';
import './UserForm.scss';
import ErrorModal from '../UI/ErrorModal';


const UserForm = ({onSaveUserData}) => {

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [error, setError] = useState ();

    const submitHandler = (e) => {
      e.preventDefault();

      if (inputName.length === 0) {
        onValidation(false); //pass up to NewUser.js
      } else if (inputAge < 1) {
        onAgeValidation(false);
      } else {
        const inputData = {
          //store data onSubmit
          Name: inputName,
          Age: inputAge,
        };

        setInputName("");
        setInputAge("");
      onSaveUserData(inputData); //pass up to app.js
        console.log("form submit");
      }
    };

    const NameChangeHandler = (e) => {
        setInputName(e.target.value);
    };

    const AgeChangeHandler = (e) => {
        setInputAge(e.target.value);
    };

    const closeOverlayHandler = () => {
      setError(null);
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