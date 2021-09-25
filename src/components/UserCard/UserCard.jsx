import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/img/avatar.jpg'
import './UserCard.scss'


const UserCard = ({user}) => {
    return(
        <Link to={`/user/${user.phone}`} className="UserCard">
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <img src={avatar} className="UserCard__avatar" />
            <p className="UserCard__name">{user.fio}</p>
            </div>
            <p className="UserCard__points">{user.productivity.toFixed(2)}</p>
        </Link>
    )
}

export default UserCard;