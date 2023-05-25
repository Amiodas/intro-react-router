import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Member.css";

const Member = () => {
  const members = useLoaderData();
  console.log(members);
  
  return (
    <div>
      <h3>Members</h3>
      <div className="member-container">
        {members.map((member) => (
          <div key={member.id} className="member-item">
            <h3>{member.name}</h3>
            <p>{member.email}</p>
            <Link to={`/member/${member.id}`}>
            Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
