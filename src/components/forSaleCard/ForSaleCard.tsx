import React from "react";
import Image from "../image/Image";
import "./ForSaleCard.scss";

interface ForSaleCardProps {
  id: number;
  imageUrl: string;
  price: string;
  title: string;
  description: string;
  shareLink: string;
}

const ForSaleCard: React.FC<ForSaleCardProps> = (props) => {
  return (
    <div className="forSaleCard" key={props.id}>
      <div>
        <Image
          height="136px"
          width="100%"
          radius="10px"
          marginBottom={6}
          imageUrl={props.imageUrl}
        />
      </div>
      <div>
        <div className="description" style={{ fontSize: "17px" }}>
          ${props.price}
        </div>
        <div className="description" style={{ fontSize: "15px" }}>
          {props.title}
        </div>
        <div className="description" style={{ fontSize: "12px" }}>
          {props.description}
        </div>
        <div>{props.shareLink}</div>
      </div>
    </div>
  );
};
export default ForSaleCard;
