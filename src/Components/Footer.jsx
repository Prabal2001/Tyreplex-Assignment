import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
  return (
    <div>
    {/* Footer */}
<footer className="bg-link text-center ">
  {/* Grid container */}
  <div className="container p-4">
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#3b5998'}} href="#!" role="button"><i className="fab fa-facebook-f" /></a>
      {/* Instagram */}
      <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: '#ac2bac'}} href="#!" role="button"><i className="fab fa-instagram" /></a>

    </section>
    {/* Section: Social media */}
    {/* Section: Form */}
    <section className>
      <form action>
        {/*Grid row*/}
        <div className="row d-flex justify-content-center">
          {/*Grid column*/}
          <div className="col-auto">
            <p className="pt-2">
              <strong></strong>
            </p>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-5 col-12">
            {/* Email input */}
            <div className="form-outline mb-4">
              <input type="email" id="form5Example2" className="form-control" placeholder='Ask or search your question' />
              {/* <label className="form-label" htmlFor="form5Example2"></label> */}
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-auto">
            {/* Submit button */}
            <button type="submit" className="btn btn-primary mb-4">
              Ask 
            </button>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </form>
    </section>
    {/* Section: Form */}
    {/* Section: Text */}
    <section className="mb-4">
      <p>
        Have a question about Tyres? Get an answer in 24 hours from our experts.
      </p>
    </section>
    {/* Section: Text */}
    {/* Section: Links */}
    <section className>
      {/*Grid row*/}
      <div className="row">
        {/*Grid column*/}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Contact Us</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-dark">Contact Details</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Bulk Ordering</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Shipping Charges</a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">About Us</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-dark">Who We Are</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Are you a Tyre Dealer?</a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Careers</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-dark">Job Opportunities</a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Privacy Policy</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-dark">About Privacy Policy</a>
            </li>
            <li>
              <a href="#!" className="text-dark">Terms of use</a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}
      </div>
      {/*Grid row*/}
    </section>
    {/* Section: Links */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2024 Tyreplex Technologies & Commerce Pvt. Ltd.
    <div><a className="text-dark" href="https://tyreplex.com/">All Rights Reserved.</a></div>
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}

    </div>
  )
}

export default Footer