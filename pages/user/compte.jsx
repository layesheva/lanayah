import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";

const compte = () => {
  if (typeof window !== "undefined") {
    var nom = localStorage.getItem("nom");
    var telephone = localStorage.getItem("telephone");
    var adresse = localStorage.getItem("adresse");
  }

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    router.push("/");
  };
  return (
    <>
      <div>
        <div className="block rounded-lg max-h-fit max-w-sm mx-auto shadow-lg bg-white">
          <div className="overflow-hidden rounded-t-lg h-28 bg-yellow-700"></div>
          <div className="w-24 -mt-12 overflow-hidden border-2 border-white rounded-full mx-auto bg-white text-yellow-700">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="p-3">
            <h4 className="text-2xl font-semibold text-center mb-4">{nom}</h4>
            <hr />
            <div className="flex flex-shrink-0 mt-2">
              <i className="fa-solid fa-phone mt-1 text-yellow-700" />
              <p className=" text-left pl-4 font-semibold text-black">
                {telephone}
              </p>
            </div>
            <hr />
            <div className="flex flex-shrink-0 mt-2">
              <i className="fa-solid fa-location-dot mt-1 text-yellow-700" />
              <p className=" text-left pl-4 font-semibold text-black">
                {adresse}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block mx-auto my-16 space-x-10 max-w-sm">
        <button
          onClick={handleClick}
          className="bg-yellow-700 text-center rounded-md text-white font-bold p-2 text-sm"
        >
          DECONNECTER
        </button>
        <Link href="/panier">
          <button className="bg-yellow-700 text-center rounded-md text-white font-bold p-2 text-sm">
            PANIER
          </button>
        </Link>
      </div>
    </>
  );
};

export default compte;
