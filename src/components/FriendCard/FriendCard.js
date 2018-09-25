import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card face">
    <div className="">
      <a onClick={() => props.selectFriend(props.friend)} >
        <img alt={props.name} src={props.image} />
      </a>
    </div>

    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      
    </span> */}
  </div>
);

export default FriendCard;

