import React from "react";
import "./Cards.css"; // 修改导入方式

const Cards = (props) =>
{
    return (
        <div className='column'>
            <div className="avatar-container">
                <img
                    src={props.avatar}
                    alt="staff"
                    className="staff-avatar"
                />
            </div>
            <h3>{props.name}</h3>
            <p>{props.position}</p>
        </div>
    );
}

export default Cards;