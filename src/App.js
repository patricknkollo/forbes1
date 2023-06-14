import "./App.css";
import { Route, Routes } from "react-router-dom";
import BillionairesList from "./components/BillionairesList";
import HomeComponent from "./components/Home";
import AboutUsComponent from "./components/AboutUs";
import ContactComponent from "./components/Contact";
import ServiceComponent from "./components/Services";
import UsaList from "./components/BillionairesListUsa";
import TopTenList from "./components/TopTen";
import AfricaList from "./components/BillionairesListAfrica";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/forbes" element={<BillionairesList />} />
        <Route path="/aboutus" element={<AboutUsComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/service" element={<ServiceComponent />} />
        <Route path="/top+10" element={<TopTenList />} />
        <Route path="/forbes+africa" element={<AfricaList />} />
        <Route path="/forbes+usa" element={<UsaList />} />
      </Routes>
    </div>
  );
}

export default App;
