import React from "react";
import { Switch, Route } from "react-router-dom";
import { route_list } from "./router";
import Nav from "./nav";
import './app.css'

function App() {
  return (
    <div className="wrap">
      <Nav></Nav>
      <Switch>
        {route_list.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              exact={item.exact}
              render={props => {
                return item.render(props);
              }}
            ></Route>
          );
        })}
      </Switch>
    </div>
  );
}

export default App;
