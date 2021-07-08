import TopNavbar from "./components/top-navbar/top-navbar";
import HomePage from "./pages/home/home-page";
import AboutUsPage from "./pages/about-us/about-us";
import WhatIsPage from "./pages/what-is/what-is";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login-page/login-page";
import { AuthProvider } from "./contexts/auth-context";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <TopNavbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/what-is" component={WhatIsPage} />
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
