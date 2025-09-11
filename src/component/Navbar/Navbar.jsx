import { Link, NavLink, useNavigate } from "react-router-dom";
import img2 from "../../img/logo-nav.webp";

export default function Navbar({ crrUser, clearUserData }) {
  const navigate = useNavigate();

  function LogoutUser() {
    clearUserData();
    navigate("Login");
  }

  return (
    <nav id="main-nav" className="navbar navbar-expand-lg fixed-top ">
      <div className="container-fluid">
        {/* الشعار */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={img2} width="30px" alt="Logo" />
          <h5 className="ms-2  d-md-block">Breast Cancer Detection</h5>
        </Link>

        {/* زر القائمة (Toggle Button) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* محتوى القائمة */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="Home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="Symptoms">
                Symptoms
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="Selfexamination">
                Self-examination
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="Treatment">
                Treatment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="Chart">
                Chart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="FAQs">
                FAQs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="Cheek">
                Check
              </NavLink>
            </li>

            {/* زر التسجيل أو الخروج */}
            {localStorage?.getItem("token") ? (
              <li className="nav-item">
                <button
                  className="btn btn-outline-light mx-2"
                  onClick={LogoutUser}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-outline-light mx-2" to="Register">
                  Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
