import React from "react";
import { indexNav } from "../router";
import {Pnav} from '../publicNav'
import IndexList from "./list";

function IndexPage(props) {
  // // console.log(props)
  // let { tab } = useParams();
  // // console.log(tab);

  // useEffect(() => {
  //   http.get(`/topics?tab=${tab}`).then((res) => {
  //       console.log(res)
  //   })
  // }, [tab]);

  return (
    <div>
      <Pnav 
      className={"index_nav"} 
      navData={indexNav}></Pnav>

      <IndexList>
        
      </IndexList>
    </div>
  );
}

export default IndexPage;
