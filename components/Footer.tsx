import Image from "next/image";
import Link from "next/link";
import React from "react";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <div className="flex flex-col text-black-100 mt-5 border-t border-gray-500">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-15 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/logo.svg"
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>
          <p className="text-base text-gray-500">
            Car Show @2023 <br /> All rigths reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link, index) => (
            <div key={index} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item, index) => (
                <Link href={item.url} key={index} className="text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-300 sm:px16 px-6 py-10">
          <p className="text-base text-gray-500">
            Car Show @2023. All rigths reserved &copy;
          </p>
          <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-500">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-500">
              Terms of use
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
