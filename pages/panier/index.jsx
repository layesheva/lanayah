import { useEffect, useState } from "react";
import axios from "axios";
import CardPanier from "../../components/CardPanier";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  const [panier, setPanier] = useState();
  const router = useRouter();

  axios.interceptors.request.use(
    (config) => {
      const token = window.localStorage.getItem("tokenClient");
      if (token) config.headers.Authorization = `bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  useEffect(() => {

    axios
      .get("/pannier/mon-pannier")
      .then((res) => setPanier(res.data))
      .catch((e) => console.log(e));
  }, []);

  async function handleClick(e){
    e.preventDefault()
    await axios.delete('/pannier/vider').catch((e)=>console.log(e.error))
    router.back()
  }

  var total = 0;

  return (
    <>
      <div className="h-screen bg-gray-300">
        <div className="py-8">
          <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">
                <div className="md:grid md:grid-cols-3 gap-2 ">
                  <div className="col-span-2 p-1">
                    <h1 className="text-xl font-medium text-center ">Panier</h1>
                    <button onClick={handleClick} className="text-yellow-700 font-semibold">
                      Vider le panier <FontAwesomeIcon icon={faTrash}/>
                    </button>
                    {panier
                      ? panier.map((p) => (
                          <div>
                            <CardPanier key={p.id} data={p} />
                            <div className="hidden">
                              {(total = total + p.montant)}
                            </div>
                          </div>
                        ))
                      : ""}
                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                      <div className="flex items-center">
                        <i className="text-sm pr-2">
                          <FontAwesomeIcon icon={faArrowLeft}/>
                        </i>
                        <span className="text-md  font-medium text-blue-500">
                          <a onClick={() => router.back()}>Continue Shopping</a>
                        </span>
                      </div>

                      <div className="flex justify-center items-end">
                        <span className="text-sm font-medium text-gray-400 mr-1">
                          Total:
                        </span>
                        <span className="text-lg font-bold text-gray-800 ">
                          {" "}
                          {total} Gnf
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
