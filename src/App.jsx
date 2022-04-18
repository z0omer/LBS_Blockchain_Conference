import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Agenda } from "./components/agenda";
import { Location } from "./components/location";
import { About } from "./components/about";
import { Speakers } from "./components/speakers";
import { Partners } from "./components/partners";
import { Alumni } from "./components/alumni";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Agenda data={landingPageData.Agenda} />
      <Location data={landingPageData.Location} />
      <Speakers data={landingPageData.Speakers} />
      <Partners data={landingPageData.Partners}/>
      <Alumni data={landingPageData.Alumni} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
