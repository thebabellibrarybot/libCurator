import Navbar from "./navbar/navbar";
import './App.css';
import Main from "./main/main";
import { MyProvider } from "./provider/provider";

function App() {
  return (
    <div className="App">
      <MyProvider>
      <Navbar/>
      <Main/>
      </MyProvider>
    </div>
  );
}

export default App;
