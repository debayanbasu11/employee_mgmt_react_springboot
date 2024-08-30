import './App.css';
import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer} from "./components";

function App() {
  return (
    <div>
      <Header footerAlert={footerAlert}/>
      <AllRoutes/>
      <Footer footerAlert={footerAlert}/>
    </div>
  );
}

const footerAlert = () => {
  alert("All Rights Reserved 2024 @Debayan Basu");
}

export default App;
