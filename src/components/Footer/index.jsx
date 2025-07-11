import React from "react";

const Footer = ({ t }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center mt-4">
      &copy; {new Date().getFullYear()} Aníbal Sánchez Numa
      <span className="hidden sm:inline mx-1">|</span>
      <div className="text-blue-400">
        <a href="https://github.com/xero-q/portfolio" target="_blank">
          {t.footer.github}
        </a>
      </div>
    </div>
  );
};

export default Footer;
