import {useState} from 'react';
import './UserForm.scss';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Button from '../UI/Button';


const UserForm = ({onSaveUserData}) => {

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [error, setError] = useState ();

    const submitHandler = (e) => {
      e.preventDefault();

      if (inputName.length === 0) { //handle validation of input
        setError({
          title: "Invalid Input",
          message: "Please enter a valid name and age (non-empty values)",
        });
        return
      }

      if (inputAge < 1) {
        setError({
          title: "Invalid Input",
          message: "Please enter a valid age (>0)",
        });
        return
      }

      const inputData = {
        //store data onSubmit
        Name: inputName,
        Age: inputAge,
      };

      setInputName("");
      setInputAge("");
      onSaveUserData(inputData); //pass up to app.js
      console.log("form submit");
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
    <div>
     {error && <ErrorModal title={error.title} message={error.message} onConfirm={closeOverlayHandler}/>} {/* conditional render */}
      <Card>
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
              type="number" 
              value={inputAge}
              onChange={AgeChangeHandler}
              />
            </div>
            <Button>Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;