import React from "react";

function Page404Page(props) {
  let { history } = props;
  return (
    <div>
      404
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Go Back
      </button>
      <button
        onClick={() => {
          history.goForward();
        }}
      >
        Go Forward
      </button>
    </div>
  );
}

export default Page404Page;
