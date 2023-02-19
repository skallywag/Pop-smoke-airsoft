import React from "react";
import { FakeShopData } from "../../@types/fakeData";
import { BallTriangle } from "react-loader-spinner";
import Image from "../image/Image";
import "./ForSaleCard.scss";

interface ForSaleCardProps {
  products: FakeShopData[];
}

const ForSaleCard: React.FC<ForSaleCardProps> = (props) => {
  return (
    <div className="forSaleWrapper">
      {props.products.length === 0 ? (
        <BallTriangle
          height={60}
          width={60}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{ justifyContent: "center" }}
          visible={true}
        />
      ) : (
        props.products.map((item) => {
          return (
            <div className="forSaleCard" key={item.id}>
              <div>
                <Image
                  height="136px"
                  width="100%"
                  radius="10px"
                  marginBottom={6}
                  imageUrl={item.imageUrl}
                />
              </div>
              <div>
                <div className="description" style={{ fontSize: "17px" }}>
                  ${item.price}
                </div>
                <div className="description" style={{ fontSize: "15px" }}>
                  {item.title}
                </div>
                <div className="description" style={{ fontSize: "12px" }}>
                  {item.description}
                </div>
                <div>{item.shareLink}</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default ForSaleCard;
