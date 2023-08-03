import React from "react";

const Banner = ({ pageName }) => {
  return (
    <>
      <div id="head">
        <p id="helloworld">HELLO, WORLD.</p>
        <h1 className="title">I&apos;m Saima Khanom.</h1>
        <h4 className="subtitle">JAVASCRIPT | REACT | NODE/EXPRESS | PSQL | MONGODB</h4>
        <p className="page-heading">{pageName}</p>
      </div>
    </>
  );
};

export default Banner;
