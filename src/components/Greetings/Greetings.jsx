import React, { useState, useEffect } from "react";

import "./Greetings.scss";

const Greetings = () => {
  const [greetings, setGreetings] = useState(true);

  useEffect(() => {
    setTimeout(() => setGreetings(false), 2000);
  }, []);

  return greetings ? (
    <div className="greetings">
      <p>Anime Universe!</p>
    </div>
  ) : null;
};

export default Greetings;
