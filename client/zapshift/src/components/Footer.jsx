import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- =================================== -->
  <!-- 10. FOOTER -->
  <!-- =================================== --> */}
      <footer class="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span class="footer-title text-success text-2xl font-bold">
            ZapShift
          </span>
          <p>
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle.
          </p>
        </div>
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Express Delivery</a>
          <a class="link link-hover">Nationwide Delivery</a>
          <a class="link link-hover">Corporate Logistics</a>
          <a class="link link-hover">Parcel Return</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Blog</a>
          <a class="link link-hover">Careers</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
        </div>
      </footer>
      <div class="bg-black text-white py-6 text-center">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p>© 2025 ZapShift. All rights reserved.</p>
          <div class="flex gap-4 mt-4 md:mt-0">
            <a href="#" class="btn btn-circle btn-ghost">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="btn btn-circle btn-ghost">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="btn btn-circle btn-ghost">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="btn btn-circle btn-ghost">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
