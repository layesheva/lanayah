import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useState } from "react"

const Register = () => {
  const [user, setUser] = useState({
    password: "",
    adresse: "",
    commune: "1",
    nom: "",
    email: "",
    telephone: ""
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const data = { telephone, password };

    const res = await axios.post("/auth/register", user).then((res)=>setUser(res.data)).catch((e)=>console.log(e));


    return(
      "Bon"
    )
    // if(user){
    //   redirect(200,"/")
    // }
  };

    return(
        <>
          <section className="absolute w-full h-full">            
            <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-white border-0">
                  <div className="flex content-center items-center justify-center h-full py-10">
                    <img src="/assets/img/lanayah.svg" width={200} alt="logo" />
                  </div>
                    <div className="flex-auto px-6 lg:px-10 py-10 pt-0">
                      {/* <div className="text-gray-500 py-4 text-center mb-3 font-bold">
                        <h2>CONNEXION</h2>
                      </div> */}
                      <form onSubmit={(e) => handleSubmit(e)}>
                      <div className="relative w-full mb-2">
                          <div>
                          <img src="/assets/icon/phone.svg" alt="" className=" pointer-event-none w-6 h-6 absolute mr-2 top-2 left-2 "/>
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
                          <img src="/assets/icon/phone.svg" alt="" className=" pointer-event-none w-6 h-6 absolute mr-2 top-2 left-2 "/>
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
                          <img src="/assets/icon/passwd.svg" alt=""  className="pointer-event-none w-6 h-6 absolute mr-2 top-2 left-2"/>
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
                      <a
                        className="text-gray-400"
                        >
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
    )
}
export default Register