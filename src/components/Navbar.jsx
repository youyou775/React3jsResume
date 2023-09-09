import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, linkedin } from "../assets";
import { ReactComponent as GithugSvg } from "../assets/tech/github.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";

const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={props.fill}
    className={props.class}
  ></svg>
);
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-primary-text text-[18px] font-semibold cursor-pointer flex">
            Abouelghar &nbsp;
            <span className="sm:block hidden">| Computational Designer</span>
          </p>
        </Link>
        <div className="ist-none hidden sm:flex flex-row gap-4">
          <ul className="list-none hidden sm:flex flex-row  gap-8 ">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-secondary-text"
                    : "text-primary-text"
                } hover:text-hover text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <ul className="list-none hidden sm:flex flex-row  gap-0 ">
            <li className="gap-0">
              <a href="https://github.com/youyou775/">
                <GithugSvg className="text-primary-text hover:text-hover" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/youssef-abouelghar-a13066111/">
                <Linkedin className="text-primary-text hover:text-hover" />
              </a>
            </li>
          </ul>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={menu}
            alt="menu"
            className=" w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-secondary-text"
                      : "text-primary-text"
                  } font-work-sans font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
