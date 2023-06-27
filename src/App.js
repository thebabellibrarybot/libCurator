import Navbar from "./navbar/navbar";
import './App.css';
import Main from "./main/main";
import MyCollections from "./main/myCollections";
import { MyProvider } from "./provider/provider";
import { Route, Routes} from  'react-router-dom';
import ColMain from "./myCollection/colMain";


function App() {
  return (
    <div className="App">
      <MyProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main pageType={true}/>}/>
        <Route path="/alltombs" element={<Main pageType={true}/>}/>
        <Route path="/thistomb" element={<Main pageType={false}/>}/>
        <Route path="/mycollections" element={<MyCollections/>}/>
        <Route path="/view-stats/:collectionID" element={<ColMain/>}/>
      </Routes>

      </MyProvider>
    </div>
  );
}

export default App;
