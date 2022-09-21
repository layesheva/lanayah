import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-nextjs-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [code, setCode] = useState(0);
  const [rep, setRep] = useState({
    error: "",
  });
  const [user, setUser] = useState({
    password: "",
    adresse: "",
    commune: "1",
    nom: "",
    email: "",
    telephone: "",
    confirmPwd:""
  });
  const router = useRouter();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const data = { telephone, password };

    await axios
      .post("/register/store", user)
      .then((res) => {
        console.log("le status code est = " + res.status);
        if (res.status === 200) {
          toast.notify(`inscription reussi avec succes`, {
            duration: 5,
            type: "success",
            title: "Information",
          });
          router.push("/user/login");
        }
      })
      .catch((e) => {
        setRep(e.response.data)
        console.log(rep);
        toast.notify(rep.error, {
          duration: 5,
          type: "error",
          title: "Information",
        });
      });
  };

  return (
    <>
      <section className="absolute w-full h-full">
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-white border-0">
                <div className="flex content-center items-center justify-center h-full py-10">
                  <img src="/assets/img/lanayah.svg" width={200} alt="logo" />
                </div>
                <ToastContainer />
                <div className="flex-auto px-6 lg:px-10 py-10 pt-0">
                  {/* <div className="text-gray-500 py-4 text-center mb-3 font-bold">
                        <h2>CONNEXION</h2>
                      </div> */}
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="relative w-full mb-2">
                      <div>
                        <i className="pointer-event-none w-6 h-6 absolute mr-2 top-2 left-2 text-yellow-700">
                          <FontAwesomeIcon icon={faUser} />
                        </i>
                      </div>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 pl-10 placeholder-gray-400 text-gray-700 bg-gray-100 rounded text-sm shadow left-5 focus:outline-none focus:ring w-full"
                        placeholder="Nom"
                        style={{ transition: "all .15s ease" }}
                        name="nom"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="relative w-full mb-2">
                      <div>
                        <i className="pointer-event-none w-6 h-6 absolute mr-2 top-2 left-2 text-yellow-700">
                          <FontAwesomeIcon icon={faLocationPin} />
                        </i>
                      </div>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 pl-10 placeholder-gray-400 text-gray-700 bg-gray-100 rounded text-sm shadow left-5 focus:outline-none focus:ring w-full"
                        placeholder="Adresse"
                        style={{ transition: "all .15s ease" }}
                        name="adresse"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="relative w-full mb-2">
                      <div>
                        <i className="pointer-event-none w-6 h-6 absolute mr-2 top-2 left-2 text-yellow-700">
                          <FontAwesomeIcon icon={faPhone} />
                        </i>
                      </div>
                      <input
                        type="number"
                        className="border-0 px-3 py-3 pl-10 placeholder-gray-400 text-gray-700 bg-gray-100 rounded text-sm shadow left-5 focus:outline-none focus:ring w-full"
                        placeholder="Telephone"
                        style={{ transition: "all .15s ease" }}
                        name="telephone"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <div className=" pointer-event-none w-8 h-8 absolute mr-2 top-1 ">
                        <i className="pointer-event-none w-6 h-6 absolute mr-2 top-2 left-2 text-yellow-700">
                          <FontAwesomeIcon icon={faLock} />
                        </i>
                      </div>
                      <input
                        type="password"
                        className="border-0 px-3 py-3 pl-10 placeholder-gray-400 text-gray-700 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Password"
                        style={{ transition: "all .15s ease" }}
                        name="password"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <div className=" pointer-event-none w-8 h-8 absolute mr-2 top-1 ">
                        <i className="pointer-event-none w-6 h-6 absolute mr-2 top-2 left-2 text-yellow-700">
                          <FontAwesomeIcon icon={faLock} />
                        </i>
                      </div>
                      <input
                        type="password"
                        className="border-0 px-3 py-3 pl-10 placeholder-gray-400 text-gray-700 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Confirmer"
                        style={{ transition: "all .15s ease" }}
                        name="confirmPwd"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="text-center mt-2">
                      <button
                        className="bg-yellow-700 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                      >
                        INSCRIRE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-wrap mt-6">
                <div className="w-1/2 text-right">
                  <Link href="/user/login">
                    <a className="text-gray-400">
                      <small>Se connecter</small>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
