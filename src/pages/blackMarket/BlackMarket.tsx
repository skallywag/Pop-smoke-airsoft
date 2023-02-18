import ForSaleCard from "../../components/forSaleCard/ForSaleCard";
import { fakeShopData } from "../../@types/fakeShopData";
import "./BlackMarket.scss";

export default function BlackMarket() {
  return (
    <div className="page blackMarket">
      <div style={{ fontSize: "30px", marginBottom: "20px" }}>Black Market</div>
      <div className="forSaleWrapper">
        {fakeShopData.map((item) => {
          return (
            <ForSaleCard
              id={item.id}
              imageUrl={item.imageUrl}
              price={item.price}
              title={item.title}
              description={item.description}
              shareLink={item.shareLink}
            />
          );
        })}
      </div>
    </div>
  );
}
