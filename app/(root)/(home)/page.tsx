import Category from "@/components/category/Category";
import Main from "@/components/main/Main";
import ProductsList from "@/components/products/ProductsList";

const Home = () => {
  return (
    <div>
      <Main />
      <div className="my-5">
        <Category />
        <ProductsList />
      </div>
    </div>
  );
};

export default Home;
