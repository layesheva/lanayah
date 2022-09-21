import { useEffect, useState } from "react";
import axios from "axios";
import CardPanier from "../../components/CardPanier";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHomeUser,
  faMapLocation,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-nextjs-toast";

const index = () => {
  const [panier, setPanier] = useState();
  const router = useRouter();
  const [rep, setRep] = useState({
    error: "",
  });
  const [data, setData] = useState({
    type: "total",
    adresse_id: 3,
    quartier: "",
    commune: "",
    montant_livraison: 10000,
  });

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

  async function handleClick(e) {
    e.preventDefault();
    await axios.delete("/pannier/vider").catch((e) => console.log(e.error));
    router.back();
  }

  var total = 0;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("/pannier/valider", data)
      .then((res) => {
        console.log("le status code est = " + res.status);
        if (res.status === 200) {
          toast.notify(`Commande enregistree avec succes !`, {
            duration: 5,
            type: "success",
            title: "Information",
          });
          setTimeout(() => {
            router.push("/");
          }, 5);
        }
      })
      .catch((e) => {
        console.log(e);
        if(e.response.data){
          setRep(e.response.data);
          console.log(rep);
          toast.notify("Une erreur s'est produit code "+e.response.status, {
            duration: 5,
            type: "error",
            title: "Information",
          });
        }
      });
  };

  return (
    <>
      <div className="h-screen bg-gray-300">
        <div className="py-8 space-y-5">
          <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">
                <div className="md:grid md:grid-cols-3 gap-2 ">
                  <div className="col-span-2 p-1">
                  <ToastContainer />
                    <h1 className="text-xl font-medium text-center ">Panier</h1>
                    <button
                      onClick={handleClick}
                      className="text-yellow-700 font-semibold"
                    >
                      Vider le panier <FontAwesomeIcon icon={faTrash} />
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
                          <FontAwesomeIcon icon={faArrowLeft} />
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
          <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="relative p-2">
                <div className="pointer-event-none w-8 h-8 absolute mr-2 top-1 text-yellow-700 ">
                  <i className="pointer-event-none w-6 h-6 absolute mr-2 top-2 left-2 text-yellow-700">
                    <FontAwesomeIcon icon={faMapLocation} />
                  </i>
                </div>
                <select
                  name="commune"
                  id="commune"
                  className="border-0 px-3 py-3 pl-10 placeholder-gray-400 text-gray-700 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full"
                >
                  <option value="Kaloum">Kaloum</option>
                  <option value="Dixinn">Dixinn</option>
                  <option value="Matam">Matam</option>
                  <option value="Matoto">Matoto</option>
                  <option value="Ratoto">Ratoto</option>
                </select>
              </div>
              <div className="relative p-2">
                <div className="pointer-event-none w-8 h-8 absolute mr-2 top-1 text-yellow-700 ">
                  <i className="pointer-event-none w-6 h-6 absolute mr-2 top-2 left-2 text-yellow-700">
                    <FontAwesomeIcon icon={faHomeUser} />
                  </i>
                </div>
                <input
                  type="text"
                  className="border-0 px-3 py-3 pl-10 placeholder-gray-400 text-gray-700 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Quartier"
                  style={{ transition: "all .15s ease" }}
                  name={"quartier"}
                  value={data.quartier}
                  onChange={handleChange}
                />
              </div>

              <div className="text-center ">
                <button
                  className="bg-yellow-700 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="submit"
                  style={{ transition: "all .15s ease" }}
                >
                  VALIDER LA COMMANDE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
