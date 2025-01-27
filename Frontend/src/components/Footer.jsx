import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="max-w-screen-2xl mx-auto container mt-20 px-6 py-3 md:px-40">
        <footer>
        <div className="flex flex-col items-center justify-center"> 
        <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/akash-srivastav02" target="_blank"><FaSquareGithub className="text-2xl cursor-pointer"/></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/akash-srivastav02/" target="_blank"><FaLinkedin className="text-2xl cursor-pointer"/></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/codesskyy/" target="_blank"><FaInstagramSquare className="text-2xl cursor-pointer" /></a>
                  </li>
                  <li>
                    <a href="https://x.com/sky_srivastav" target="_blank"><FaSquareXTwitter className="text-2xl cursor-pointer"/></a>
                  </li>
               </ul>
                <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                    <p className="text-sm">
                        &copy; 2025 <a href="https://akash-srivastav.netlify.app/" target="_blank">Akash Srivastav</a>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer;