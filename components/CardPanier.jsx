import axios from "axios";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTrashAlt, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CardPanier = ({ data }) => {

  const router = useRouter()

  async function handleClick(e) {
    e.preventDefault();
    const rep = await  axios.delete(`/pannier/remove/${data.id}`).catch((e)=>(console.log(e)))
    router.reload()
  }

  async function addQuantite(e,idProduit){
    e.preventDefault();

    router.reload()
  }

  async function removeQuantite(e,idProduit){
    e.preventDefault();

    router.reload()
  }

  return (
    <>
      <div className="flex justify-between items-center pt-6 mt-6 border-t">
        <div className="flex  items-center">
          <img
            src={data.images}
            width="60"
            height="60"
            className="rounded-full "
          />
          <div className="flex flex-col ml-3 ">
            <span className="text-md font-medium w-auto">{data.produit}</span>
            <span className="text-xs font-light text-gray-400">
              {data.prix} Gnf
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="pr-8 flex">
            {/* <span className="font-semibold">-</span> */}
            <label
              type="text"
              className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
            >{data.quantite}</label>
            {/* <span className="font-semibold">+</span> */}
          </div>

          <div className="pr-8">
            <span className="text-xs font-medium">{data.montant} Gnf</span>
          </div>
          <div>
            <button onClick={handleClick}>
              <i onClick={handleClick} className="text-xs font-medium">
              <FontAwesomeIcon icon={faTrash} />
              </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPanier;
