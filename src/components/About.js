import React from "react";
import Links from "./Links"

function About({bio, links}) {
  let bioTrue;
  if (!bio) {
    bioTrue = null;
  } else {
    bioTrue = <p>{bio}</p>
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {bioTrue}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github= {links.github} linkedin= {links.linkedin} />
    </div>
  );
}

export default About;
