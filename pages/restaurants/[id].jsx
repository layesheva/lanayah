// import { useRouter } from "next/router";
// import CardMenu from "../../components/CardMenu";


// const detail = ({ data }) => {
//   const router = useRouter()
//   return (
//     <>
//       <div className="flex flex-wrap gap-4 p-4 mx-auto bg-gray-200">
//         {data.length === 0 ? (
//           <div className="flex flex-col items-center mx-auto">
//             <h1 className="fond-bold text-lg text-center">Aucun menu</h1>
//             <button className="fond-bold text-center text-white bg-yellow-700 rounded-md p-3" onClick={()=>(router.back())}>Retour</button>
//           </div>
//         ) : (
//           data.map((menu) => <CardMenu key={menu.id} data={menu} />)
//         )}
//       </div>
//     </>
//   );
// };

// // This gets called on every request
// export async function getStaticProps({ params }) {
//   // Fetch data from external API
//   const res = await fetch(
//     `https://www.ifoodapi.isoftsarl.com/api/v1/clients/accueil/restaurants/${params.id}`
//   );
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(
//     `https://www.ifoodapi.isoftsarl.com/api/v1/clients/accueil/restaurants`
//   );
//   const restos = await res.json();

//   const ids = restos.map((resto) => resto.id);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

// export default detail;
