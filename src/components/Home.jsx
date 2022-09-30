import React from "react";
import { NavLink } from "react-router-dom";
import landing from "../assets/landing.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="landing">
      <section>
        <div className="top">
          <p className="top-txt">Imagine if</p>
          <p className="sc">Snapchat</p>
          <p className="b-text">had events.</p>
        </div>
        <div>
          <p className="top-p">
            Easily host and share events with your friends across any social
            media.
          </p>
        </div>
      </section>
      <img className="landing-img" src={landing} alt="Lannding page" />
      <br />
      <NavLink to="/create">
        <button type="button">Create my event</button>
      </NavLink>
    </div>
  );
};

export default Home;
