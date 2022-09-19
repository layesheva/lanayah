import { useEffect, useState } from "react"
import axios from "axios"
import CardPanier from "../../components/CardPanier"


const panierlist = () => {
    const [panier, setPanier] = useState()

    axios.interceptors.request.use((config)=>{
        const token = window.localStorage.getItem('tokenClient');
        if(token) config.headers.Authorization = `bearer ${token}`;
        return config
      }, error => {
        return Promise.reject(error);
      })
    useEffect(()=>{

          axios.get('/pannier/mon-pannier').then((res)=>setPanier(res.data)).catch((e)=>console.log(e))
    },[])
  return (
    <>
        <div className="flex flex-wrap gap-4 p-4 mx-auto bg-gray-200">
            {
                panier ? panier.map((p)=>(
                    <CardPanier key={p.id} data={p}/>
                )
            ):""
            }
        </div>
    </>
  )
}


export default panierlist