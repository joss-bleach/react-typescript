import ReactDOM from "react-dom";

// Props
import Parent from "./props/Parent";

// States
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

// Event Handling
import EventComponent from "./events/EventComponent";

// Refs
import UserSearchRefs from "./refs/UserSearchRefs";

const App = () => {
  return <UserSearchRefs />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
