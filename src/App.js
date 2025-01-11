import "./App.css";
import ProductCard from "./components/ProductCard";
import Description from "./components/Description";
import Images from "./components/Images";
import Items from "./components/Items";
import Prices from "./components/Prices";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from "./components/NavBarr";
import Footer from "./components/Footer";
import SideBarr from "./components/SideBarr";

function App() {

  return (
    <div className="App">
      <NavBarr/>
      {/* <main>
        <ProductCard/>
      </main> */}
      <SideBarr/>
      <Footer/>
    </div>
  );
}

export default App;
