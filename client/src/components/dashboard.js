import React from "react";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Recent Projects</h2>
        <ul>
          <li>Project A</li>
          <li>Project B</li>
          <li>Project C</li>
        </ul>
      </div>
      <div className="task-list">
        <h2>Tasks</h2>
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
