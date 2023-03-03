import { useState, useEffect } from "react";
import { fakeEventData } from "../../@types/fakeEventData";
import EventCard from "../../components/eventCard/EventCard";
import themes from "../../themes/themes.scss?export";
import { BallTriangle } from "react-loader-spinner";
import FilterBar from "../../components/filterBar/FilterBar";

const OperationsPage: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [operations, setOperations] =
    useState<Api.Operations.Req.Event[]>(fakeEventData);
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    async function getOperations() {
      try {
      } catch (error) {}
    }
  }, []);

  return (
    <div className="page operations">
      <div style={{ marginBottom: "20px", fontSize: "24px" }}>Operations</div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input"
        placeholder="Search Locations"
      />
      <div style={{ marginBottom: "20px" }}>
        <FilterBar />
      </div>
      {operations.length === 0 ? (
        <BallTriangle
          height={60}
          width={60}
          radius={5}
          color={themes.primaryGreen}
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{ justifyContent: "center" }}
          visible={true}
        />
      ) : (
        operations.map((item) => {
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
        })
      )}
    </div>
  );
};
export default OperationsPage;
