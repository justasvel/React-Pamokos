import React, { useState } from "react";

export default function Card() {

    const [loveCount, setLoveCount] = useState(0);
    const [hateCount, setHateCount] = useState(0);

    const hate = () => {
        setHateCount(hateCount + 1);
    }

    const reset = () => {
        setLoveCount(0);
        setHateCount(0);
    }

  return (
    <div>
      <div className="container w-25">
        <div className="row justify-content-center">
          <div class="card mt-5">
            <img
              src="https://miro.medium.com/max/1200/1*hm7aE3BdUfUWUgBYK1GiZA.jpeg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">React Post!</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque, doloribus sit tenetur quaerat a vitae voluptate
                aliquam necessitatibus veritatis dolore soluta fugiat ipsum.
                Debitis fugiat non consequuntur? Consequuntur nisi atque, rerum
                eius quod ut unde distinctio illum odit cupiditate. Animi facere
                aliquam ipsum et adipisci quam dignissimos quos cumque quia.
              </p>
              <button className="btn btn-success mx-2" onClick={() => setLoveCount(loveCount + 1)}>
                Love {loveCount}
              </button>
              <button className="btn btn-danger mx-2" onClick={() => hate()}>
                Hate {hateCount}
              </button>
              <button className="btn btn-info mx-2" onClick={() => reset()}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
