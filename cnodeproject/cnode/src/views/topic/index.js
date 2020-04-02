import React, { useEffect, Fragment } from "react";
import DetailsPage from "./detail";
import { useSelector } from "react-redux";
import { useTopic } from "../../store/action/index";
import { useParams, useHistory } from "react-router-dom";
import { Alert } from "antd";

function TopicPage() {
  let { loading, data, isError, errorMsg } = useSelector(state => state.topic);
  let getData = useTopic();
  let { id } = useParams();
  // console.log(useParams());
  let history = useHistory();

  useEffect(() => {
    getData(id);
  }, [id]);
  // console.log(loading,data);
  return (
    <div className="topic">
      {isError ? (
        <Alert
          banner={true}
          closable
          type="warning"
          message={"请求出错"}
          description={
            <Fragment>
              <p>{errorMsg}</p>
              <p>点击关闭返回上一步</p>
            </Fragment>
          }
          afterClose={() => {
            history.goBack();
          }}
        ></Alert>
      ) : (
        <DetailsPage loading={loading} data={data}></DetailsPage>
      )}
    </div>
  );
}

export default TopicPage;
