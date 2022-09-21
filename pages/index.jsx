import Head from "next/head";
import CardCategorie from "../components/CardCategorie";
import CardMenu from "../components/CardMenu";
import Sliders from "../components/Sliders";

export default function Home({ categories, menus }) {
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
            <CardMenu key={menu.id} data={menu} />
          ))}
        </div>
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
