import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col text-lg border border-solid w-12/12 h-screen p-5 m-5 ">
      <Header />
      <Body />
    </div>
  );
}

export default App;
