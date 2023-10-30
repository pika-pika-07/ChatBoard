import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { SocketProvider } from "./contexts/SocketProvider";
import { UsersProvider } from "./contexts/UsersProvider";
import { ConversationProvider } from "./contexts/ConversationProvider";
function App() {
  return (
    <>
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh]"
          src={"https://wallpapercave.com/wp/wp4410743.png"}
          alt="logo"
        />
      </div>
      <div className="flex flex-col max-w-7xl md:h-[900px] h-[500px] p-10 mx-auto my-[auto] justify-center items-center">
        <SocketProvider>
          <UsersProvider>
            <ConversationProvider>
              <Body className="absolute" />
            </ConversationProvider>
          </UsersProvider>
        </SocketProvider>
      </div>
    </>
  );
}

export default App;
