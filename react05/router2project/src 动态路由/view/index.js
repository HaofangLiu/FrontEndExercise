import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import http from "../http";

function IndexPage(props) {
  // console.log(props)
  let { tab } = useParams();
  // console.log(tab);

  useEffect(() => {
    http.get(`/topics?tab=${tab}`).then((res) => {
        console.log(res)
    })
  }, [tab]);

  return <div>Index Page</div>;
}

export default IndexPage;
