import React from "react";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Recent Projects</h2>
        <ul>
          <li>Project A</li>
          <h2>Tasks</h2>
          <ul>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
          </ul>
          <li>Project B</li>
          <h2>Tasks</h2>
          <ul>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
          </ul>
          <li>Project C</li>
          <h2>Tasks</h2>
          <ul>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
