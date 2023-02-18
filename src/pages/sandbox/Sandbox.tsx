import EventCard from "../../components/eventCard/EventCard";
import { fakeEventData } from "../../@types/fakeEventData";
import { toast } from "react-toastify";

export default function Sandbox() {
  const notify = () => toast("Success!");
  return (
    <div className="page sandBox">
      {" "}
      <button onClick={notify}>Notify!</button>
    </div>
  );
}
