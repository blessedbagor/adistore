import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";


const Homepage = async () => { //Make this asynchronous because we are using a server components.

  const latestProducts = await getLatestProducts();

 
  return <>
    <ProductList data={latestProducts} title="Newest Arrivals" 
    limit={4} />
  </>;
};
 
export default Homepage;