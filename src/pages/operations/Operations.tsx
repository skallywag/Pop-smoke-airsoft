import { useState, useEffect } from "react";
import { fakeEventData } from "../sandbox/fakeEventData";
import EventCard from "../../components/eventCard/EventCard";
import { FakeEventData } from "../../@types/fakeData";
import { BallTriangle } from "react-loader-spinner";
import FilterBar from "../../components/filterBar/FilterBar";

export default function Operations() {
  const [operations, setOperations] = useState<FakeEventData[] | undefined>(
    fakeEventData
  );
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {}, []);

  return (
    <div className="page operations">
      <div style={{ marginBottom: "20px", fontSize: "24px" }}>Operations</div>
      <input className="input" placeholder="Search Locations" />
      <div style={{ marginBottom: "20px" }}>
        <FilterBar />
      </div>
      {operations?.map((item) => {
        return (
          <EventCard
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            duration={item.duration}
            subTitle={item.subTitle}
            time={item.time}
            date={item.date}
            attendees={item.attendees}
            eventType={item.eventType}
            shareLink={item.shareLink}
          />
        );
      })}
      <BallTriangle
        height={60}
        width={60}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{ justifyContent: "center" }}
        visible={isLoading}
      />
    </div>
  );
}
