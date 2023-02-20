import React from "react";
import "./Image.scss";

interface ImageProps {
  imageUrl?: string;
  height?: string | number;
  width?: string | number;
  radius?: string | number;
  marginBottom?: string | number;
}

const Image: React.FC<ImageProps> = (props) => {
  return (
    <div className="image">
      <img
        src={props.imageUrl}
        style={{
          height: props.height,
          width: props.width,
          objectFit: "cover",
          borderRadius: props.radius,
          marginBottom: props.marginBottom,
        }}
      />
    </div>
  );
};
export default Image;
