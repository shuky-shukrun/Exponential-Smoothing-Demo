import React, { useRef } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";
import LoginImg from "../../images/login3.png";
import "../../App.css";
import Card from "../../components/card";

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Try with demo user: admin@demo.com | demoUserPassword");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="section back-color">
      <div className="container">
        <Card>
          <div className="row">
            <div className="col">
              <h2>Welcome Back!</h2>
              <img className="w-100" src={LoginImg} alt="" />
            </div>
            <div className="col-md-4">
              <div
                className="card shadow"
                style={{ width: "400px", height: "550px" }}
              >
                <div className="text-center">
                  <h2 className="m-3">Log In</h2>
                  <PersonCircle size="100" />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="m-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      ref={emailRef}
                      required
                    />
                  </div>
                  <div className="m-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="6-20 characters"
                      ref={passwordRef}
                      required
                    />
                    {error && (
                      <div className="alert alert-danger mt-3" role="alert">
                        {error}
                      </div>
                    )}
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-size "
                      disabled={loading}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
