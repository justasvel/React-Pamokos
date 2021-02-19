import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    likeCount: 0,
    hateCount: 0,
  };

  addLikes =() => {
    this.setState({ 
        likeCount: this.state.likeCount + 1 
    });
  }

  addHates = () => {
    this.setState({
        hateCount: this.state.hateCount + 1
    });
  }

  resetCounts = () => {
      this.setState({
          likeCount: 0,
          hateCount: 0
      });
  }

  render() {
    return (
      <div className="container">
        <div className="conntainer">
          <div className="row justify-content-center">
            <div class="card mt-5">
              <img src="https://miro.medium.com/max/1200/1*hm7aE3BdUfUWUgBYK1GiZA.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">React Post!</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, doloribus sit tenetur quaerat a vitae voluptate aliquam necessitatibus veritatis dolore soluta fugiat ipsum. Debitis fugiat non consequuntur? Consequuntur nisi atque, rerum eius quod ut unde distinctio illum odit cupiditate. Animi facere aliquam ipsum et adipisci quam dignissimos quos cumque quia.
                </p>
                <a href="#" className="btn btn-success mx-2" onClick={this.addLikes}>
                  Love {this.state.likeCount}
                </a>
                <a href="#" className="btn btn-danger mx-2" onClick={this.addHates}>
                  Hate {this.state.hateCount}
                </a>
                <a href="#" className="btn btn-info mx-2" onClick={this.resetCounts}>
                  Reset 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
