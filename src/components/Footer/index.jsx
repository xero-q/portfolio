import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      &copy; {new Date().getFullYear()} Aníbal Sánchez Numa
    </div>
  );
};

export default Footer;
