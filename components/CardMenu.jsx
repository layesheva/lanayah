import { data } from "autoprefixer";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CardMenu = ({ data }) => {

  const [loguer, setLoguer ] = useState(false)

  useEffect(()=>{
    setLoguer((localStorage.getItem("telephone") !== null))
  })

  axios.interceptors.request.use((config)=>{
    const token = window.localStorage.getItem('tokenClient');
    if(token) config.headers.Authorization = `bearer ${token}`;
    return config
  }, error => {
    return Promise.reject(error);
  })

  const router = useRouter()

  const [rep, setRep] = useState()

  const [menu, setMenu] = useState({
    "produit_id": data.id,
    "quantite":1
  })

  async function handleClick (e){
    e.preventDefault();
    await axios.post('/pannier/add',menu).then((response)=>(setRep(response.status))).catch((errer)=>(console.log(errer)))
    router.push('/panier')
  }
  return (
    <>
      <div className="p-2 max-w-md max-h-md w-44 bg-white rounded-xl shadow-lg space-4">
        
        <img
          className="h-32 w-32 mx-auto rounded-lg shrink-0"
          src={data.photo}
          alt="menu"
        />
        <div className="space-y-2 text-center">
          <div className="space-y-0.5">
            <p className="text-current text-black font-semibold">
              {data.libelle}
            </p>
            <p className="text-slate-500 text-sm font-medium">
              {data.prix} Gnf
            </p>
          </div>
        </div>
        
        <div className="rounded-full font-bold text-white mt-1 text-lg bg-green-600 text-center mb-0 align-bottom">
        {
          loguer ? <button onClick={handleClick}>Acheter</button>  : <Link href="/user/login" ><button >Acheter</button></Link>
        }
          
        </div>
      </div>
    </>
  );
};

export default CardMenu;
