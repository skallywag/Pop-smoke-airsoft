import React from "react";
import "./EventCard.scss";
import Image from "../image/Image";
import { FiShare } from "react-icons/fi";

interface EventCardProps {
  imageUrl: string;
  time: string;
  date: string;
  title: string;
  subTitle: string;
  shareLink: string;
  attendees: number;
  eventType: string;
  duration: number;
}

const EventCard: React.FC<EventCardProps> = (props) => {
  return (
    <div className="eventCard">
      <div style={{ display: "flex", gap: 16 }}>
        <Image imageUrl={props.imageUrl} width={"128px"} radius={"20px"} />
        <div className="eventDetails">
          <div>
            <div
              style={{
                marginBottom: "5px",
                fontSize: "14px",
                color: "#574830",
              }}
            >
              {props.date} · {props.time}
            </div>
            <div
              style={{
                marginBottom: "5px",
                fontSize: "16px",
                color: "#0b6a0b",
              }}
            >
              {props.title}
            </div>
            <div style={{ marginBottom: "5px", fontSize: "14px" }}>
              Duration: {props.duration}hrs
            </div>
            <div
              style={{
                marginBottom: "15px",
                fontSize: "12px",
              }}
            >
              {props.subTitle}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontSize: "14px", color: "#7E1E1E" }}>
              {props.attendees} Operators
            </div>
            <FiShare size={16} color={"#7E1E1E"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
