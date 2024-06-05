import React from 'react'

function Navbar() {
  return (
    <>
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
<link rel="stylesheet" href="assets/css/fontawesome.css"/>
<link rel="stylesheet" href="assets/css/style.css"/>
<link rel="stylesheet" href="assets/css/owl.css"/>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/custom.js"></script>
<script src="assets/js/owl.js"></script>
     <header className>
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand" href="/"><h2>OM <em>MOTORS</em></h2></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home 
              <span className="sr-only">(current)</span>
            </a>
          </li> 
          <li className="nav-item"><a className="nav-link" href="/vehicle">Vehicles</a></li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="blog.html">Blog</a>
              <a className="dropdown-item" href="team.html">Team</a>
              <a className="dropdown-item" href="testimonials.html">Testimonials</a>
              <a className="dropdown-item" href="terms.html">Terms</a>
            </div>
          </li> */}
          <li className="nav-item"><a className="nav-link" href="/create">Add Vehicle</a></li>
          {/* <li className="nav-item"><a className="nav-link" href="/aboutus">About Us</a></li> */}
          {/* <li className="nav-item"><a className="nav-link" href="/contactus">Contact Us</a></li> */}
        </ul>
      </div>
    </div>
  </nav>
</header>


    </>
  )
}

export default Navbar
