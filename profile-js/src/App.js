//import profile from "./assets/profile.jpg";
import div_photo1 from "./assets/div_photo1.jpg";
import { Parallax } from "react-parallax";
import "./App.css";
import FOOTERLIST from "./components/Footer/FooterList.js";
import ContactMe from "./components/ContactMe/ContactMe.js";
import React from "react";
import Slider from "./components/react_projects/slider_projects";
import ApiRest from "./components/react_projects/Api.js";

const profile_photo =
  "https://media-exp3.licdn.com/dms/image/C4D35AQEguHiBwSdYIQ/profile-framedphoto-shrink_200_200/0/1619635511019?e=1626742800&v=beta&t=cMskPrPSHCi2q1zWQF7iRGoZoDZNiNfNOxkMCllJ5us";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>My Profile</title>
      </header>
      <body className="Body">
        <div className="header">
          <Parallax bgImage="https://webunwto.s3.eu-west-1.amazonaws.com/2019-09/HIGHLIGHTS-2019-edition.jpg">
            <div className="header-parallax">
              <h1 className="headers">Profile Page</h1>
              <br />
              <br />
              <img src={profile_photo} className="App-logo" alt="logo" />
              <br />
              <br />
              <br />
              <br />
              <h2 className="headers">
                Hi, I`m Nicolas Ascona, and this is my Profile Page
              </h2>
            </div>
          </Parallax>
        </div>
        <div>
          <Slider />
        </div>
        <div className="div_space">
          <Parallax bgImage={div_photo1}>
            <div className="parallax-img"></div>
          </Parallax>
        </div>

        <div className="Contact_home">
          <ContactMe />
        </div>
      </body>
      <footer>
        <FOOTERLIST />
      </footer>
    </div>
  );
}

export default App;
