import React from "react";
import {Switch,Route} from 'react-router-dom';
import IndexPage from "./view";
import AboutPage from "./view/about";
import Page404 from "./view/404"
import Nav from "./nav";


function App() {
  return <div>
    <Nav></Nav>
    <Switch>
      <Route path='/' exact component={IndexPage}></Route>
      <Route path='/about' exact render={(props) => {
        return <AboutPage {...props}></AboutPage>
      }}></Route>
      <Route render={() => {
        return<Page404></Page404>
      }} ></Route>
    </Switch>

  </div>;
}

export default App;
