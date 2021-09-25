import React from 'react';
import UserCard from '../../components/UserCard/UserCard';
import { getAllUsersApiCall } from '../../service/api/users';
import './AllUsers.scss'


export default function AllUsers(){
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const users = await getAllUsersApiCall();
        setUsers(users);
    };


    return(
        <div className="UsersContainer">
            {users.map(user => {
                return(
                    <UserCard user={user} />
                )
            })}
        </div>
    )
}