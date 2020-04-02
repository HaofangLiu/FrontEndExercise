import React, { useState, useEffect } from "react";
import http from "../http";
import { useParams } from "react-router-dom";

function IndexList() {
  let { tab } = useParams();
  //   console.log(tab); /index/???   index后面的参数是什么
  const [data, setData] = useState({
    loading: true, //send request
    listData: []
  });

  useEffect(() => {
    setData({
      loading: true, //send request
      listData: []
    });
    http.get(`/topics?limit=20&page=1&tab=${tab}`).then(res => {
      setData({
        loading: false, //send request
        listData: res.data.data
      });
    });
  },[tab]);//如果没有[tab]会引起infinite update

  let { loading, listData } = data;
  return (
    <div>
      {loading ? (
        "sending request"
      ) : (
        <ul>
          {listData.map((liData, index) => {
            return <li key={index}>{liData.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default IndexList;
