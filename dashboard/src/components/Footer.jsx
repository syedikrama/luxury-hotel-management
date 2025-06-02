import React from 'react';

export default function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <div className="container-fluid pt-4 px-4">
        <div className="bg-light rounded-top p-4">
          <div className="row">
            <div className="col-12 col-sm-6 text-center text-sm-start">
              &copy; <a href="#">Your Site Name</a>, All Rights Reserved.
            </div>
            <div className="col-12 col-sm-6 text-center text-sm-end">
              {/* 
                This template is free as long as you keep the footer author’s credit link.
                If you'd like to use the template without the credit, you can purchase the Credit Removal License 
                from "https://htmlcodex.com/credit-removal". Thank you for your support.
              */}
              Designed By <a href="https://htmlcodex.com" target="_blank" rel="noopener noreferrer">HTML Codex</a>
              <br />
              Distributed By <a className="border-bottom" href="https://themewagon.com" target="_blank" rel="noopener noreferrer">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Back to Top Button */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
