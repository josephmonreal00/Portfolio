import React, { useState } from "react";

const Greeting = () => {
  return (
    <div className="container d-flex flex-column p-5">
      <div className="h1 font-weight-light bg-primary mt-5 mb-5">
        Hello! <span>&#128075;</span>
      </div>
      <div className="h1 font-weight-light bg-primary mb-5 mt-5">
        I'm <span className="font-weight-bold">Joseph Monreal</span>, a
        design-minded front-end software engineer focused on building attractive
        interface & experiences
      </div>
    </div>
  );
};
export default Greeting;
