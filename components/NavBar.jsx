import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBars, faHouse, faPizzaSlice, faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({loguer}) => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <>
      <nav className="fixed top-0 mt-0 w-full flex flex-wrap items-center justify-between px-2 py-1 bg-yellow-700 ">
        <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">
                ifood
              </a>
            </Link>
            <div className="flex justify-end">
              <Link href="/panier">
                <button 
                  className={
                    (loguer ? " block " : " hidden ") +
                    "text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none"
                  }
                  type="button"
                >
                  <i className="text-white opacity-75">

                  <FontAwesomeIcon icon={faBagShopping} />
                  </i>
                </button>
              </Link>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="text-white opacity-75">
                <FontAwesomeIcon icon={faBars} />
                </i>
              </button>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    <i className=" text-lg leading-lg text-white opacity-75">
                    <FontAwesomeIcon icon={faHouse} />
                    </i>
                    <span className="ml-2">Home</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={loguer ? "/user/compte" : "/user/login"}>
                  <a
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    <i className="text-lg leading-lg text-white opacity-75">
                    <FontAwesomeIcon icon={faUser} />
                    </i>
                    <span className="ml-2">Compte</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="p-8"></div>
    </>
  );
};

export default NavBar;
