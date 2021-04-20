import React, { useEffect } from "react";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Header from "./components/Header/Header";
import UpdateUser from "./components/Profile/Profile";
import Filter from "./components/Filter/Filter";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import Footer from "./components/Footer/Footer";
import Particles from "./components/layouts/Particles";
import Home from "./components/pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { animation } from "./animation";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/profile">
            <UpdateUser />
            <br />
          </Route>
          <Route path="/filter">
            <Filter />
            <Particles />
          </Route>
          <Route path="/">
            <Home />
            <Particles />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default withAuthenticator(App);
