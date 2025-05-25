import { useState, useEffect } from "react";

import "./AudiStyle.css";
import Homedata from "./Homedata";
function Scroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="scroll-intro">
        <p>
          Images & visuals shown are for illustrative & representational
          purposes only. Actual features and specifications may vary depending
          on variant and are subject to change without prior notice.
          Accessories, interiors and features may vary and may not be part of
          standard equipment that is currently offered in India. Images are
          clicked in a country that follow Left Hand Drive. Dark Shade on glass
          is due to lighting effect. Obey Traffic Rules.
        </p>
      </div>

      <Homedata />

      <div className="container">
        {/* मुख्य हीरो सेक्शन */}
        <div className="hero-section">
          {/* फिक्स्ड बैकग्राउंड इमेज */}
          <div className="background-image"></div>

          {/* टेक्स्ट कंटेनर */}
          <div className="text-container" data-aos="flip-right">
            <h2>The home of electric</h2>
            <p>
              Seeing the world with different eyes is what drives us. Discover
              more about our vision of the future of mobility. Learn more about
              the technology in the Audi e-tron along with the charging options,
              range calculations and its benefits.
            </p>
            <button>Learn More</button>
            <button>#FutureIsAnAttitude</button>
          </div>
        </div>
      </div>
     
    </>
  );
}
export default Scroll;
