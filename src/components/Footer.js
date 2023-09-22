import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-header">
        <ul>
          <li>
            <i className="fa-brands fa-square-facebook"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-youtube"></i>
          </li>
        </ul>
      </div>
      <div className="footer-list-container">
        <ul>
          <li>FAQ</li>
          <li>Media Center</li>
          <li>Ways to Watch</li>
          <li>Cookie Preferences</li>
          <li>Speed Test</li>
          <li>Help Center</li>
          <li>Investor Relations</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
          <li>Legal Notices</li>
          <li>Account</li>
          <li>Jobs</li>
          <li>Privacy</li>
          <li>Contact Us</li>
          <li>Only on Netflix</li>
        </ul>
      </div>
      <div>
        <form>
          <select name="language" id="language" title="language">
            <option value="English">🌐 English</option>
            <option value="English">🌐 اردو</option>
          </select>
        </form>
      </div>
      <div>Netflix Pakistan</div>
    </footer>
  );
}

export default Footer;
