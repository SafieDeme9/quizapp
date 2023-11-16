import React from "react";
import "./Footer.css";
const date = new Date();

function Footer() {
  return (
    <footer>
      <p>Made with ❤️ by Safietou</p>
      <p>Copyright &copy; {date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
