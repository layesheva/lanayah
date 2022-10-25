// import CardRestaurant from "../../components/CardRestaurant";
// import Head from "next/head";
// const restaurants = ({ data }) => {
//   return (
//     <>
//       <Head>
//         <title>iFood-Restaurants</title>
//       </Head>
//       <h1 className="text-center text-lg font-bold">LES RESTAURANTS</h1>
      
//           <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:grid-cols-5 p-2">
//             {data.map((resto) => (
//               <CardRestaurant key={resto.id} data={resto} />
//             ))}
//           </div>
//     </>
//   );
// };

// // This gets called on every request
// export async function getStaticProps() {
//   // Fetch data from external API
//   const res = await fetch(
//     `https://www.ifoodapi.isoftsarl.com/api/v1/clients/accueil/restaurants`
//   );
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

// export default restaurants;
