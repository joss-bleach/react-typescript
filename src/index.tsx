import ReactDOM from "react-dom";

// Props
import Parent from "./props/Parent";

// States
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

// Event Handling
import EventComponent from "./events/EventComponent";

const App = () => {
  return <UserSearch />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
