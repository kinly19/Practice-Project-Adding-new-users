import UserForm from './UserForm';
import './NewUser.scss';
import Card from '../UI/Card';

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
    <Card className="new-user">
      <UserForm onSaveUserData={onSaveUserDataHandler}/>
    </Card>
  );
};

export default NewUser; 