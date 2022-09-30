import React from "react";
import { NavLink } from "react-router-dom";
import landing from "../assets/landing.svg";

const Home = () => {
  return (
    <div>
      <section>
        <p>Imagine if</p>
        <p>Snapchat</p>
        <p>had events.</p>
        <div>
          <p>
            Easily host and share events with your friends across any social
            media.
          </p>
        </div>
      </section>
      <img src={landing} alt="Lannding page" />
      <NavLink to="/create">
        <button type="button">Create my event</button>
      </NavLink>
    </div>
  );
};

export default Home;
