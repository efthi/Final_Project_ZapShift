import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- =================================== -->
  <!-- 10. FOOTER -->
  <!-- =================================== --> */}
      <footer className="footer p-10 bg-[#2b3440] text-neutral-content grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2">
          <span className="footer-title text-success text-2xl font-bold">
            ZapShift
          </span>
          <p>
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle.
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Express Delivery</a>
          <a className="link link-hover">Nationwide Delivery</a>
          <a className="link link-hover">Corporate Logistics</a>
          <a className="link link-hover">Parcel Return</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
        </div>
      </footer>
      <div className="bg-black text-white py-6 text-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p>© 2025 ZapShift. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="btn btn-circle btn-ghost">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="btn btn-circle btn-ghost">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="btn btn-circle btn-ghost">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="btn btn-circle btn-ghost">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
