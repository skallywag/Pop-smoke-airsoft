import EventCard from "../../components/eventCard/EventCard";
import { fakeEventData } from "./fakeEventData";
export default function Sandbox() {
  return (
    <div className="page sandBox">
      {fakeEventData.map((item) => {
        return (
          <EventCard
            imageUrl={item.imageUrl}
            title={item.title}
            subTitle={item.subTitle}
            time={item.time}
            date={item.date}
            attendees={item.attendees}
            eventType={item.eventType}
            key={item.id}
            shareLink={item.shareLink}
          />
        );
      })}
    </div>
  );
}
