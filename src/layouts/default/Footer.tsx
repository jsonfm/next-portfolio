import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="container-md pb-12 text-xs text-center">
        <h4>
          Developed by{" "}
          <a
            href="https://github.com/jsonfm"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-bold hover:scale-110 duration-200"
          >
            @jsonfm
          </a>
        </h4>
      </div>
    </footer>
  );
};
