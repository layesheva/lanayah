import Link from "next/link";
import Image from "next/image";

const CardCategorie = ({ data }) => {
  return (
    <>
      <Link href={`/`}>
        <a>
          <div className="w-28 h-10 my-auto rounded-lg bg-yellow-700">
            {/* <img src="categorie.svg" alt="categorie" className="w-20 h-20 mx-auto"/> */}
            {/* <Image
              src="/logo.png"
              alt="categorie"
              width={100}
              height={100}
              layout="fixed"
            /> */}
            <p className="text-center py-1 font-semibold text-lg text-white">{data.categorie}</p>
          </div>
        </a>
      </Link>
    </>
  );
};

export default CardCategorie;
