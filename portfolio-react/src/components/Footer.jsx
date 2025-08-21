import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left - Copyright */}
        <p className="footer-text">
          © {new Date().getFullYear()} Personal Portfolio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
