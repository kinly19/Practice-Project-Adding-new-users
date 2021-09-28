import './UserList.scss';

const UserList = ({userItem}) => {

    return (
        <div>
            {userItem.map((user) => (
                <div key={user.id}>
                    <h2>{user.Name}</h2>
                    <h3>{user.Age}</h3>
                </div>
            ))}
        </div>
    );
};

export default UserList;