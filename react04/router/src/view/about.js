import React from "react";

function AboutPage(props) {
  let { history } = props;
  console.log(props);
  return (
    <div>
      about page
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

export default AboutPage;
