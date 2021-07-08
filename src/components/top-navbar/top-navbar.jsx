import { GraphUp } from "react-bootstrap-icons";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

const TopNavbar = (props) => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.pushState("/");
    } catch {}
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <GraphUp style={{ color: "white" }} className="me-2" />
          Exponential Smoothing Demo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link border-end" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link border-end"
                aria-current="page"
                to="/what-is"
              >
                What is Exp. Smoothing?
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>
          {currentUser && (
            <div className="d-flex nav-link " style={{ color: "white" }}>
              User: {currentUser.email}
            </div>
          )}
          {currentUser && (
            <button
              className="d-flex btn btn-outline-success"
              type="submit"
              onClick={handleLogout}
            >
              Log Out
            </button>
          )}
          {!currentUser && (
            <Link
              className="d-flex btn btn-outline-success"
              type="submit"
              to="/login"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
