import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link href="/" className="hover:underline">
              BardiMate™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://instagram.com/bardi_i_?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr"
                target="_blank"
                className="mr-4 hover:underline md:mr-6 "
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav"
                target="_blank"
                className="mr-4 hover:underline md:mr-6"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@adenirangbohunmi8761?si=CoknlYDZJeWZOvA_"
                target="_blank"
                className="mr-4 hover:underline md:mr-6"
                rel="noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <a href="https://github.com/bahdiotech" target="_blank" className="hover:underline"
              rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
