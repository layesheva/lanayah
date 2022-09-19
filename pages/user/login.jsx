import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"
import { toast, ToastContainer } from 'react-nextjs-toast'

const Login = () => {
  const [user, setUser] = useState({
    access_token: "",
    adresse: "",
    commune: "",
    nom: "",
    statuts: "",
    telephone: ""
  })

  const [data, setData] = useState({
    telephone : "",
    password : ""
  })

  const [code, setCode] = useState(0)

  const [souvenir, setSouvenir] = useState(true)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/auth/login", data).then((res)=>{
      setUser(res.data)
      setCode(res.status)
    }).catch((e)=>console.log(e));

    if(code === 200){

      localStorage.setItem('tokenClient',user.access_token)
      localStorage.setItem('nom',user.nom)
      localStorage.setItem('telephone',user.telephone)
      localStorage.setItem('adresse',user.adresse)
      localStorage.setItem('commune',user.commune)

      toast.notify(`connexion reussi`,{
        duration: 5,
        type: "success",
        title:"Information"
      })

      router.push('/')
    }else{
      toast.notify('Identifiant incorrect',{
        duration: 5,
        type: "error",
        title:"Information"
      })
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
    return(
        <>
          <section className="absolute w-full h-full">            
            <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
        <ToastContainer/>
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-white border-0">
                  <div className="flex content-center items-center justify-center h-full py-10">
                    <img src="/assets/img/lanayah.svg" width={200} alt="logo" />
                  </div>
                    <div className="flex-auto px-6 lg:px-10 py-10 pt-0">
                      <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="relative w-full mb-2">
                          <div>
                          <img src="/assets/icon/phone.svg" alt="" className=" pointer-event-none w-6 h-6 absolute mr-2 top-2 left-2 "/>
                          </div>
                          <input
                            type="number"
                            className="border-0 px-3 py-3 pl-10 placeholder-gray-400 text-gray-700 bg-gray-100 rounded text-sm shadow left-5 focus:outline-none focus:ring w-full"
                            placeholder="Telephone"
                            style={{ transition: "all .15s ease" }}
                            name={"telephone"}
                            value={data.telephone}
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
                            name={"password"}
                            value={data.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                            name="souvenir"
                              id="customCheckLogin"
                              type="checkbox"
                              value={souvenir}
                              className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                              style={{ transition: "all .15s ease" }}
                              onChange={handleChange}
                            />
                            <span className="ml-2 text-sm font-semibold text-gray-700">
                              Se souvenir de moi
                            </span>
                          </label>
                        </div>
  
                        <div className="text-center mt-2">
                          <button
                            className="bg-red-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="submit"
                            style={{ transition: "all .15s ease" }}
                          >
                            CONNEXION
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-6">
                    <div className="w-1/2">
                      {/* <Link href="/user/login"> */}
                      <a
                        className="text-gray-400"
                        >
                        <small>Mot de passe oublier?</small>
                      </a>
                        {/* </Link> */}
                    </div>
                    <div className="w-1/2 text-center">
                      <Link href="/user/register">
                      <a
                        className="text-gray-400"
                        >
                        <small>S'inscrire</small>
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
export default Login