import "./App.css";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Registraion from "./Registration";
import { Home } from "./Home";
import Details from "./Details";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Rootreducer from "../src/Rootreducer";
const store = configureStore(
  { reducer: Rootreducer },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // const routes = ["/registration", "/details"];
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Route
            path="/"
            render={(history) => (
              <AppBar>
                <Tabs
                  value={
                    history.location.pathname !== "/"
                      ? history.location.pathname
                      : false
                  }
                >
                  <Tab
                    label="Home"
                    value={"/home"}
                    component={Link}
                    to="/home"
                  />
                  <Tab
                    label="Registration"
                    value={"/registration"}
                    component={Link}
                    to="/registration"
                  />
                  <Tab
                    label="Details"
                    value={"/details"}
                    component={Link}
                    to={"/details"}
                  />
                </Tabs>
              </AppBar>
            )}
          ></Route>
          <Switch>
            <Route path="/home" render={() => <Home />} />
            <Route
              path="/registration"
              render={() => {
                console.log("In Regi...");
                return <Registraion />;
              }}
            />

            <Route path="/details" component={Details} />
            <Route path="" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
