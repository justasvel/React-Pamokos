import React from "react";

export default function List(props) {
  return (
    <div className="m-5 w-50">
      <ul className="list-group">
        {props.users.map((user) => {
          return (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name} - {user.email}
              <div>
                <button
                  className="btn btn-danger mx-3"
                  onClick={() => {
                    props.removeUser(user.id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-info mx-3"
                  onClick={() => props.editUser(user)}
                >
                  Edit
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
