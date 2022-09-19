import React from "react";
import CardCategorie from "../../components/CardCategorie";

const Categories = ({ data }) => {
  return (
    <div className="flex flex-nowrap py-2 px-2 space-x-2 bg-gray-300">
      {data.map((cat) => (
        <CardCategorie key={cat.id} data={cat} />
      ))}
    </div>
  );
};

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://www.ifoodapi.isoftsarl.com/api/v1/clients/accueil/categories`
  );
  const data = await res.json();

  // Pass data to the page via props
  if (!data) {
    return {
      vide: true,
    };
  }
  return { props: { data } };
}
export default Categories;
