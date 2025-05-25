import "./Map.css";
import {Link} from "react-router-dom"
function Map() {
  return (
    <>
      <div className="Map">
        <div className="img-map">
          <img data-aos="zoom-in"
            src="https://media.audi.com/is/image/audi/nemo/in/Banners/googlemap.jpg?width=943&auto=webp"
            alt=""
          />
        </div>
        <div className="map-content">
          <h1 data-aos="slide-up">Dealer Locator</h1>
          <Link to="/map"><button data-aos="flip-left">Explore more</button></Link>
        </div>
      </div>
      <div className="audi-more-info">
        <div className="audi-info-text">
          <p data-aos="slide-up">Because you expect more from your Audi than just a drive from A to B. Download it now, to get more of your car on your phone.</p>
          <p data-aos="slide-up"><strong>myAudi</strong></p>
          <div className="audi-info-btns"><button data-aos="flip-left">myAudi Connect</button>
          <button data-aos="flip-left">Audi Shop</button></div>
        </div>
        <div className="audi-info-img">
          <img src="https://media.audi.com/is/image/audi/nemo/in/3_O-Homepage/122_Audi-App-Post_1690-X-1896px_WC.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
export default Map;
