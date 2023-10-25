import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { SocketProvider } from "./contexts/SocketProvider";
import { UsersProvider } from "./contexts/UsersProvider";
import { ConversationProvider } from "./contexts/ConversationProvider";
function App() {
  return (
    <div className="flex flex-col max-w-7xl h-screen p-10 mx-auto my-[auto] ">
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
