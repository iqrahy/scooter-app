import Logo from "../images/logo.png"
import Css from "../components/header.css"

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
    <div className="container">
      <img className="img-fluid" src={Logo} alt="Logo" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active mx-5" aria-current="page" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
          </li>
         
        </ul>
        <div className="d-flex">
            <button className="border-0 bg-white me-2 py-2 px-5 rounded-pill">Login</button>
            <button className="border-0 orange-bg text-white rounded-pill py-2 px-3">Book Scooter</button>
        </div>
      </div>
    </div>
  </nav></div>
  )
}

export default Header