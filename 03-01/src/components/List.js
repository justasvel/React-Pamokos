import React from "react";

export default function List(props) {

  return (
    <div>
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <p>
              {user.name} - {user.email}
            </p>
            <button
              onClick={() => {
                props.removeUser(user.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
