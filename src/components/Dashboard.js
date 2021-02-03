import React from "react";
import Posts from "./Posts";
import LeftsidePane from './LeftsidePane'

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-2">
          <LeftsidePane />
        </div>
        <div className="col-md-8">
          <Posts />
        </div>
        <div className="col-md-2">
          <h3>placeholder</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
