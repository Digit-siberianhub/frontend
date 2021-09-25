import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/img/avatar.jpg'
import './UserCard.scss'


const UserCard = ({user}) => {
    return(
        <Link to={`/user/${user.phone}`} className="UserCard">
            <img src={avatar} className="UserCard__avatar" />
            <p className="UserCard__name">{user.fio}</p>
            <p className="UserCard__points">{user.productivity}</p>
        </Link>
    )
}

export default UserCard;