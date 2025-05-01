import { useEffect, useState } from "react";
import ContactHamburger from "./components/ContactHamburger";
import WelcomeText from "./components/WelcomeText";
import ScrollTest from "./components/ScrollTest";
import SideIntro from "./components/SideIntro";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY < 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ContactHamburger />
      {/* <div className="intro-container"> */}
      <WelcomeText isVisible={isVisible} />
      <SideIntro isVisible={isVisible} />
      {/* </div> */}
      <div style={{ height: "100vh" }}></div>
      <div style={{ height: "100vh", backgroundColor: "#242424;" }}>
        <ScrollTest />
      </div>
      <div style={{ height: "100vh" }}></div>
    </>
  );
}

export default App;
