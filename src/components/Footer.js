import React from "react";

const Footer = () => (
  <footer className="fixed-bottom">   
    <div className="row bg-dark h-20 p-5">
      <div className="col text-center text-white ">
        Surendu Suresh &copy; {new Date().getFullYear()}
      </div>
    </div>
  </footer>
);

export default Footer;
