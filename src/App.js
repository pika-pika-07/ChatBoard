import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { SocketProvider } from "./contexts/SocketProvider";
import { UsersProvider } from "./contexts/UsersProvider";
import { ConversationProvider } from "./contexts/ConversationProvider";
function App() {
  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("client connected");
  //     // console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  //   });

  //   socket.on("message", (data) => {
  //     console.log(data);
  //     // console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  //   });
  // }, []);

  return (
    <div className="flex flex-col text-lg border border-solid w-12/12 h-screen p-5 m-5 ">
      <SocketProvider>
        <UsersProvider>
          <ConversationProvider>
            {/* <Header /> */}
            <Body />
          </ConversationProvider>
        </UsersProvider>
      </SocketProvider>
    </div>
  );
}

export default App;
