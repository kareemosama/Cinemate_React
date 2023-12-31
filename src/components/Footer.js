import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow shadow-gray-400 dark:shadow-white md:flex md:items-center md:justify-between md:p-5 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            Cinemate™
          </Link>
          . All Rights Reserved.
        </span>

        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              to="#"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="#"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Licensing
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
