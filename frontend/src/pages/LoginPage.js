import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function LoginPage() {
  return (
    <Layout>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            {/* Left column content */}
          </div>
          <div className="col-md-6 justify-content-center" style={{ minHeight: 'calc(100vh - 56px)' }}>
            <div className="text-center mt-5 bg-secondary ps-5 pe-5 pb-5 pt-3 rounded shadow">
              <h2>Welcome to Secure File Transfer</h2>
              <p>This application allows you to securely send files to other users.<br></br>Login or register to get started!</p>
              <Link to="/login" className="btn btn-primary mx-1">Login</Link>
              <Link to="/register" className="btn btn-success mx-1">Register</Link>
            </div>
          </div>
          <div className="col-md-3">
            {/* Right column content */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;