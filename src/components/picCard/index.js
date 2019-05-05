import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="pic" src={props.image} onClick={props.func} />
      </div>
    </div>
  );
}

export default FriendCard;
