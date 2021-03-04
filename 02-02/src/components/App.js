import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 1,
          status: false,
          taskContent: "Lorem ipsum 1",
          btn: "Mark as done",
          header: "This task is not done",
          class: "btn btn-danger",
        },
        {
          id: 2,
          status: false,
          taskContent: "Lorem ipsum 2",
          btn: "Mark as done",
          header: "This task is not done",
          class: "btn btn-danger",
        },
        {
          id: 3,
          status: false,
          taskContent: "Lorem ipsum 3",
          btn: "Mark as done",
          header: "This task is not done",
          class: "btn btn-danger",
        },
        {
          id: 4,
          status: false,
          taskContent: "Lorem ipsum 4",
          btn: "Mark as done",
          header: "This task is not done",
          class: "btn btn-danger",
        },
        {
          id: 5,
          status: false,
          taskContent: "Lorem ipsum 5",
          btn: "Mark as done",
          header: "This task is not done",
          class: "btn btn-danger",
        },
        {
          id: 6,
          status: false,
          taskContent: "Lorem ipsum 6",
          btn: "Mark as done",
          header: "This task is not done",
          class: "btn btn-danger",
        },
        {
          id: 7,
          status: false,
          taskContent: "Lorem ipsum 7",
          btn: "Mark as done",
          header: "This task is not done",
          class: "btn btn-danger",
        },
        {
          id: 8,
          status: false,
          taskContent: "Lorem ipsum 8",
          btn: "Mark as done",
          header: "This task is not done",
          class: "btn btn-danger",
        },
      ],
    };
  }

  markAsDone = (id) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          if (item.status === false) {
            item.status = true;
            item.btn = "Done";
            item.header = "This task is done";
            item.class = "btn btn-success";
          } else if (item.status === true) {
            item.status = false;
            item.btn = "Mark as done";
            item.header = "This task is not done";
            item.class = "btn btn-danger";
          }
        } else {
          item.status = item.status;
          item.btn = item.btn;
          item.header = item.header;
          item.class = item.class;
        }

        return item;
      }),
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.list.map((item) => {
            return (
              <div
                className="card m-2"
                style={{ width: "18rem" }}
                key={item.id}
              >
                <div className="card-body">
                  <h5 className="card-title">{item.header}</h5>
                  <p className="card-text">{item.taskContent}</p>
                  <a
                    href="#"
                    className={item.class}
                    onClick={() => this.markAsDone(item.id)}
                  >
                    {item.btn}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}