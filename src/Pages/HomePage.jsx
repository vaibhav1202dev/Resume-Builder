import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Banner from "../components/Banner";
import HeroPage from "../components/HeroPage";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Profile />
      <HeroPage />
    </div>
  );
};

export default HomePage;
