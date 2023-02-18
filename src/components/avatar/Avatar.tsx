import React from "react";
import { router } from "../../router";
import "./Avatar.scss";

interface AvatarProps {
  imageUrl?: string;
  height: string;
  width: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <div className="avatar" onClick={() => router.navigate("/profile")}>
      <img
        className="avatarImage"
        src={props.imageUrl}
        style={{ height: props.height, width: props.width }}
      />
    </div>
  );
};
export default Avatar;
