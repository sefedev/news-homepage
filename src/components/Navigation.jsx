import React from "react";

const Navigation = ({ nav }) => {
  return (
    <>
    <nav className="w-2/5 flex justify-between text-sm items-end">
      {nav.map((nav) => (
        <a
          href="#"
          className="hover:text-softRed transition duration-150"
          alt="link"
        >
          {nav}
        </a>
      ))}
      </nav>
    </>
  );
};

export default Navigation;
