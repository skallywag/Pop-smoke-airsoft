import ForSaleCard from "../../components/forSaleCard/ForSaleCard";
import { useState, useEffect } from "react";
import { fakeShopData } from "../../@types/fakeShopData";
import "./BlackMarketPage.scss";
import FilterBar from "../../components/filterBar/FilterBar";

const BlackMarketPage: React.FC = () => {
  const [products, setProducts] =
    useState<Api.Products.Req.Product[]>(fakeShopData);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getProducts() {
      try {
      } catch (error) {}
    }
  }, []);

  return (
    <div className="page blackMarket">
      <div style={{ fontSize: "30px", marginBottom: "20px" }}>Black Market</div>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="input"
        placeholder="Search Market"
      />
      <FilterBar />
      <div className="productWrapper">
        <ForSaleCard products={products} />
      </div>
    </div>
  );
};
export default BlackMarketPage;
