require("isomorphic-fetch");

import tw from "twin.macro";

import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarRegister from "./components/CarRegister";
import VehicleType from "./components/VehicleType";
import CategoryNav from "./components/CategoryNav";
import { __EnumValue } from "graphql";

export default function Home(props) {
  // let categories = [];

  // data.collections.edges.forEach((edge) => {
  //   let arr = edge.node.title.split(":");
  //   if (arr.length === 1) {
  //     categories.push(edge.node);
  //   }
  // });
  // console.log(categories);
  return (
    <div>
      <Header />
      <Banner />
      <main tw="w-full grid grid-cols-5 p-3 ">
        <section tw="col-span-1">
          <CarRegister />
          <VehicleType />
          <CategoryNav />
        </section>
      </main>
      <Footer />
    </div>
  );
}

// export async function getStaticProps(context) {
//   let res = await fetch(
//     "https://samuel-2643859.myshopify.com/api/2021-04/graphql.json",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_SECRET,
//       },
//       body: JSON.stringify({
//         query: `
//       query{
//         collections(first:10){
//             edges{
//                 node{
//                     title
//                 }
//             }
//         }
//        }`,
//       }),
//     }
//   );
//   let json = await res.json();
//   return {
//     props: { data: json.data }, // will be passed to the page component as props
//   };
// }
