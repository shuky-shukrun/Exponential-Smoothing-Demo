import React, { useRef } from "react";
import { useAuth } from "../../contexts/auth-context";
import Card from "../../components/card";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
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
      setError("Failed to login");
    }
  }
  return (
    <div className="row">
      <div className="col-4 justify-content-center"></div>
      <div className="col-3 justify-content-center">
        <Card>
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
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
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
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
              {error && <div>{error}</div>}
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary ">
                Login
              </button>
            </div>
          </form>
        </Card>
      </div>
      <div className="col-4 justify-content-center"></div>
    </div>
  );
};

export default LoginPage;
