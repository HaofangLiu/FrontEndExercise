import React from "react";
import { Redirect } from "react-router-dom";
import IndexPage from "./view/index";
import GetStart from "./view/GetStart";
import AboutPage from "./view/about";
import Page404 from "./view/404";

const route_list = [
  {
    path: "/",
    exact: true,
    render(props) {
      return <Redirect to="/index/all"></Redirect>;
    }
  },{
    path: "/index",
    exact: true,
    render(props) {
      return <Redirect to="/index/all"></Redirect>;
    }
  },
  {
    path: "/index/:tab",
    exact: true,
    render(props) {
      return <IndexPage {...props}></IndexPage>;
    }
  },
  {
    path: "/getstart",
    exact: true,
    render(props) {
      return <GetStart {...props}></GetStart>;
    }
  },
  {
    path: "/about",
    exact: true,
    render(props) {
      return <AboutPage {...props}></AboutPage>;
    }
  },
  {
    path: "*",
    exact: true,
    render(props) {
      return <Page404 {...props}></Page404>;
    }
  }
];

const parts = ["all","good","job","share","ask"];

const nav = [
  {
    name: "index page",
    path: "/index/all",
    exact: true,
    activeClass: "active",
    isActive(pathname){
        pathname = pathname.split('/');
        return pathname[1] === "index" && parts.includes(pathname[2]); 
    }
  },
  {
    name: "Get start",
    path: "/getstart",
    exact: true,
    activeClass: "active"
  },
  {
    name: "About Us",
    path: "/about",
    exact: true,
    activeClass: "active"
  }
];

const indexNav = [
  {
    name: "全部",
    path: "/index/all",
    exact: true,
    activeClass: "active"
  },
  {
    name: "精华",
    path: "/index/good",
    exact: true,
    activeClass: "active"
  },
  {
    name: "招聘",
    path: "/index/job",
    exact: true,
    activeClass: "active"
  },{
    name: "分享",
    path: "/index/share",
    exact: true,
    activeClass: "active"
  },{
    name: "问答",
    path: "/index/ask",
    exact: true,
    activeClass: "active"
  }
];

export { route_list, nav ,indexNav };
