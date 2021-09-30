import UserForm from './UserForm';
import './NewUser.scss';
import Card from '../UI/Card';

const NewUser = ({ onAddNewUser, onIsInputValid, onIsAgeValid }) => {
  
  const onSaveUserDataHandler = (usersData) => {
    const newUserData = {//make a new object
      ...usersData, //spread usersData coming from form
      id: Math.random().toString(), //add additional property
    };
    onAddNewUser(newUserData); // pass this up to app.js as an argument
  };

  const inputValidationHandler = (status) => {//pass down to Userform
    onIsInputValid(status); //pass up to App.js
  };

  const ageValidationHandler = (ageStatus) => {
    onIsAgeValid(ageStatus);
  };

  return (
    <Card className="new-user">
      <UserForm
        onSaveUserData={onSaveUserDataHandler}
        onValidation={inputValidationHandler}
        onAgeValidation={ageValidationHandler}
      />
    </Card>
  );
};

export default NewUser; 