import Card from '../UI/Card';
import './UserList.scss';

const UserList = ({userItem}) => {
    return (
        <Card> {/* Card component used as container */}
          {userItem.map((user) => (
            <div className="user-content" key={user.id}>
              <p>{user.Name}</p>
              <p>{`(${user.Age} Years old)`}</p>
            </div>
          ))}
        </Card>
    );
};

export default UserList;