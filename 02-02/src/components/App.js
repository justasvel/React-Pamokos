import React from "react";

export default class App extends React.Component {
  state = {
    list: [
      { id: 1, status: false, taskContent: "Lorem ipsum 1" },
      { id: 2, status: false, taskContent: "Lorem ipsum 2" },
      { id: 3, status: false, taskContent: "Lorem ipsum 3" },
      { id: 4, status: false, taskContent: "Lorem ipsum 4" },
      { id: 5, status: false, taskContent: "Lorem ipsum 5" },
      { id: 6, status: false, taskContent: "Lorem ipsum 6" },
    ],
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.state.list.map((item) => {})}</div>
      </div>
    );
  }
}
