import {useState} from 'react';
import './UserForm.scss';


const UserForm = () => {

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setInputName('');
        setInputAge('');
        console.log('submit this form');

        //we need to take users input values and store them, pass that data back up to NewUser
        console.log(`Name: ${inputName} Age: ${inputAge}`);
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