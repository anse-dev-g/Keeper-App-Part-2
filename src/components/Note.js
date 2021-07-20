import React from "react";

function Note(props) {
  return (
    <div className="note">
      <dt>
        <h1>{props.title}</h1>
      </dt>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
