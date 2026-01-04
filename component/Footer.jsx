import React from "react";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = ({ contact, ig, fb }) => {
  return (
    <div>
      <footer className="w-screen py-12 px-6 md:px-20 md:w-screen bg-[#f9f4ef] border-t border-[#eaddcf] text-center md:text-left text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          
          {/* ABOUT */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-3 text-[#f25042]">
              About Ichiraku Ramen
            </h3>
            <p className="text-[#716040] leading-relaxed">
              Ichiraku Ramen is dedicated to bringing the authentic taste of
              Japan right to your table.
            </p>
          </div>

          {/* CONTACT */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-3 text-[#f25042]">
              Contact Us
            </h3>
            <ul className="text-[#716040] space-y-2">
              
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#8c7851]" />
                <a href={contact} className="hover:underline">
                  contact@ichirakuramen.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaInstagram className="text-[#8c7851]" />
                <a href={ig} className="hover:underline">
                  @ichirakuramen_itachitan
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaFacebook className="text-[#8c7851]" />
                <a href={fb} className="hover:underline">
                  facebook.com/itachiotan
                </a>
              </li>

              <li className="mt-6 text-xs text-[#020826]">
                © {new Date().getFullYear()} Ichiraku Ramen. All rights reserved.
              </li>

            </ul>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
