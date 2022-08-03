import React from "react";

function NotFound() {
  return (
    <div className="container text-center py-5 my-5">
      <div className="display-4 pt-5 mt-5">
        <span className="text-danger">Oops!</span> It's a 404
      </div>
      <div className="lead">
        Sorry, couldn't find what you are looking for...
      </div>
    </div>
  );
}

export default NotFound;
