import UserForm from './UserForm';
import './NewUser.scss';

const NewUser = ({onAddNewUser}) => {

    const onSaveUserDataHandler = (usersData) => {
        const newUserData = { //make a new object
            ...usersData, //spread usersData coming from form
            id:Math.random().toString() //add additional property
        };

        console.log(newUserData)// pass this up to app.js
        onAddNewUser(newUserData);
    }

  return (
    <div className="new-user">
      <UserForm onSaveUserData={onSaveUserDataHandler}/>
    </div>
  );
};

export default NewUser; 