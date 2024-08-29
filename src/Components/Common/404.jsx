import React from "react";
import { Link } from "react-router-dom";
import '../../Styles/404.css'

function NotFound() {
  return (
    <div>
      <div className="error-page-area default-padding text-center">
        <div className="container">
          <div className="error-box">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h1 className="notFound">404</h1>
                <h2 className="notFound">Sorry Page Was Not Found!</h2>
                <p className="notFound">The page you are looking for does not exist.</p>
                <Link className="btn mt-20 btn-md btn-theme"  to="/">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
