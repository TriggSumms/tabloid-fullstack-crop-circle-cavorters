import React from "react";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";

export default function User({ user }) {
  return (
    <Card className="m-4">
      <div className="card-container">
          <div className="details">
            <Link to={`/users/${user.firebaseUserId}`}>
                {user.fullName}
            </Link>
            <p>{user.displayName}</p>
            <p>{user.userType.name}</p>
          </div>
          <div className="status">
              <Link to={`/users/deactivate/${user.id}`}>
                Deactivate
              </Link>
          </div>
      </div>
    </Card>
  );
}
