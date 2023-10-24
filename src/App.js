import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { SocketProvider } from "./contexts/SocketProvider";
import { UsersProvider } from "./contexts/UsersProvider";
import { ConversationProvider } from "./contexts/ConversationProvider";
function App() {
  return (
    <div className="flex flex-col text-lg border border-solid w-12/12 h-screen p-5 m-5 ">
      <SocketProvider>
        <UsersProvider>
          <ConversationProvider>
            <Body />
          </ConversationProvider>
        </UsersProvider>
      </SocketProvider>
    </div>
  );
}

export default App;
