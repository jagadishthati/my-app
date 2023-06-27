import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App p-4 flex flex-col gap-4">
   <Navbar/>
   <Filter/>
   <Cards/>
    </div>
  );
}

export default App;
