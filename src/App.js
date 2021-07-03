import TopNavbar from "./components/top-navbar/top-navbar";
import HomePage from "./pages/home/home-page";
import AboutUsPage from "./pages/about-us/about-us";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/what-is"></Route>
        <Route path="/about-us">
          <AboutUsPage />
        </Route>
        <Route path="/login"></Route>
      </Switch>
    </div>
  );
}

export default App;
