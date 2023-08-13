import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/rice.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>DhabaStyle</h1>
          <p>Best Food In Your Area</p>
          <Link to="/menu">
            <button>ORDER</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
