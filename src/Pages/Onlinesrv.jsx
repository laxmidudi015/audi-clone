import { Link } from "react-router-dom";
import "./onlinesrv.css";
import { IoIosArrowForward } from "react-icons/io";
// import Animate from './Animate'

function Onlinesrv() {
  const data = [
    {
      id: 1,
      img: "https://media.audi.com/is/image/audi/nemo/in/Banners/TestDrive-883x496.jpg?width=1312",
      heading: "Book a Test Drive",
      link: "Click here"
    },
    {
      id: 2,
      img: "https://media.audi.com/is/image/audi/nemo/in/Banners/ApprovedPlus-883X496.jpg?width=1312",
      heading: "Audi Approved Plus",
      link: "Learn more"
    },
    {
      id: 3,
      img: "https://media.audi.com/is/image/audi/country/in/en/assets/home/BookServices.jpg?width=1312",
      heading: "Book Online Service",
      link: "Click here"
    },
    {
      id: 4,
      img: "https://media.audi.com/is/image/audi/country/in/en/assets/press-release/AudiIndiasUltraFastChargingStationinBKCMumbai.jpg?width=1312",
      heading: "Press Releases",
      link: "Click here"
    }
  ];

  return (
    <div style={{display:"flex" ,flexWrap:"wrap",padding:"70px 70px",justifyContent:"space-between"}}>
      {data.map((item) => (
        <div className="onl-mn-dv" key={item.id}>
          <div className="onl-cont">
            <div className="onl-img">
              <img data-aos="zoom-in" src={item.img} alt="" />
            </div>
            <div className="onl-txt">
              <h1 >{item.heading}</h1>
              <Link to={"/"}>
                {item.link}
                <IoIosArrowForward style={{ marginBottom: "-3px" }} />
              </Link>
            </div>
          </div>
        </div>
      ))}
      {/* <Animate/> */}
    </div>
  );
}

export default Onlinesrv;
