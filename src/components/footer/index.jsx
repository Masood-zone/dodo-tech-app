import React from "react";
import { BOTTOM_FOOTER_ICONS, FOOTER_LINKS } from "../navbar/data";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="px-10 bg-[#151F26]">
      {/* First */}
      <footer className="footer p-10  text-base-content ">
        {FOOTER_LINKS.map((footer) => (
          <nav key={footer.id}>
            <h6 className="footer-title capitalize text-base text-[#FFFFFF]">
              {footer.title}
            </h6>
            <div className="flex flex-col gap-2 footer-text">
              {footer.links.map((link) => (
                <Link
                  key={link.id}
                  className="link link-hover text-base "
                  to="#!"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        ))}
      </footer>
      {/* Bottom */}
      <footer className="footer footer-center px-10 py-2 border-t text-base-content border-base-300">
        <aside className="items-center grid-flow-col footer-text text-base pt-5">
          <p>
            &copy;Copyright @ Dodo Technologies Ltd. All Rights Reserved | 2024.
          </p>
        </aside>
        <nav className="flex my-5">
          <span className="footer-text font-medium px-5 text-base">
            Connect:
          </span>
          <div className="grid grid-flow-col gap-4">
            {BOTTOM_FOOTER_ICONS.map((icon) => (
              <Link key={icon.id} to={icon.path}>
                <icon.icon
                  fontSize={30}
                  className="footer-text hover:text-[#fff]"
                />
              </Link>
            ))}
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
