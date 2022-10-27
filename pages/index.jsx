import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import CardCategorie from "../components/CardCategorie";
import CardMenu from "../components/CardMenu";
import Sliders from "../components/Sliders";

export default function Home({ categories, menus }) {
  // const [panierVide , setPanierVide] = useState(true)
  const [panierQuantite, setPanierQuantite] = useState(0)
  const [panierMontant, setPanierMontant] = useState(0)
  const [panierVide, setPanierVide] = useState(true)

  return (
    <>
      <Head>
        <title>Lanayah</title>
      </Head>
      {/* <Sliders/> */}
      {/* <div className="flex h-auto max-h-80">
        <img
          src="/assets/sliders/slide1.png"
          className="w-full h-50"
          alt="..."
        />
      </div> */}
      <h3 className="text-center text-yellow-700 font-bold">Categories</h3>
      <div className=" flex space-x-2 p-2 rounded-sm overflow-x-scroll bg-gray-300">
        {categories.map((cat) => (
          <CardCategorie key={cat.id} data={cat} />
        ))}
      </div>
      <h3 className="text-center text-yellow-700 font-bold">Menus</h3>
      <div className="bg-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 xl:grid-cols-8 p-2">
          {menus.map((menu) => (
            <CardMenu key={menu.id} data={menu} setPanierVide={setPanierVide} setPanierQuantite={setPanierQuantite} setPanierMontant={setPanierMontant}/>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
      <Link href="/panier">
      <button className={ ( !panierVide ? "fixed " : "hidden ") + "bottom-3 w-50 rounded-lg p-1 text-white bg-yellow-700 font-semibold"}>
        <h3>COMMANDEZ</h3><nb/>
        <p className="font-normal"> {panierQuantite}menus {panierMontant} Gnf</p>
      </button>
      </Link>
    </div>
    </>
  );
}

export async function getStaticProps() {
  // Fetch data from external API
  const getCat = await fetch(
    `https://www.ifoodapi.isoftsarl.com/api/v1/clients/accueil/categories`
  );
  const categories = await getCat.json();

  const getMenus = await fetch(
    `https://www.ifoodapi.isoftsarl.com/api/v1/clients/accueil/restaurants/22`
  );
  const menus = await getMenus.json();

  return { props: { categories, menus } };
}
