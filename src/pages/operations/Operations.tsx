import { fakeEventData } from "../sandbox/fakeEventData";
import EventCard from "../../components/eventCard/EventCard";

export default function Games() {
  return (
    <div className="page">
      <div>I am Operations</div>
      {fakeEventData.map((item) => {
        return (
          <EventCard
            imageUrl={item.imageUrl}
            title={item.title}
            duration={item.duration}
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
