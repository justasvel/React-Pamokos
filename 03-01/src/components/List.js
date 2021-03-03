import React from "react";
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

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
                <FaTrash />
                </button>
                <button
                  className="btn btn-info mx-3"
                  onClick={() => props.editUser(user)}
                >
                  <FaEdit />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
