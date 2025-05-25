import "./Map.css";
function Homedata() {
  return (
    <>
      <div className="Map">
        <div className="img-map">
          <img data-aos="zoom-in"
            src="https://media.audi.com/is/image/audi/nemo/in/Downloads/banner/1018-24_AUDI_100K%20WEB%20BANNER%201_1080%20X%201080%20copy.jpg?width=943&auto=webp"
            alt=""
          />
        </div>
        <div className="map-content">
          <h1 data-aos="slide-up">100 Days of Celebration Benefits for Audi customers</h1>
          <button data-aos="flip-left">Learn More</button>
        </div>
      </div>

      <div className="Map">
        <div className="img-map">
          <img data-aos="zoom-in"
            src="https://media.audi.com/is/image/audi/nemo/in/Downloads/Audi_India%20Banner%2016x9%20Final_1%20(1).jpg?width=943&auto=webp"
            alt=""
          />
        </div>
        <div className="map-content">
          <h1 data-aos="slide-up">Audi Assist</h1>
          <button data-aos="flip-left">Learn More</button>
        </div>
      </div>
    </>
  );
}

export default Homedata;
