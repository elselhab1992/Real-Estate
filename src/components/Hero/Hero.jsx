import "./Hero.css";
import hero from "/hero-image.png";
import CountUp from "react-countup";
import { IoMdPin } from "react-icons/io";
import { easeIn, motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* left side */}
        <div className="hero-text">
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: easeIn }}
          >
            Discover
            <br /> Most Suitable
            <br /> Property
          </motion.h1>

          <p>
            Find a variety of properties that suit you very easilty
            <br /> Forget all difficulties in finding a residence for you
          </p>
          <div className="hero-input">
            <IoMdPin style={{ fontSize: 30, color: "blue" }} />
            <input type="search" />
            <button className="btn">Search</button>
          </div>
          <div className="hero-stats">
            <div className="state">
              <h5>
                <CountUp start={8900} end={9000} duration={3} />
                <span className="orangeText">+</span>
              </h5>
              <p>Premium Product</p>
            </div>
            <div className="state">
              <h5>
                <CountUp start={1900} end={2000} duration={3} />
                <span className="orangeText">+</span>
              </h5>
              <p>Happy Customer</p>
            </div>
            <div className="state">
              <h5>
                <CountUp start={20} end={28} duration={3} />
                <span className="orangeText">+</span>
              </h5>
              <p>Awards Winning</p>
            </div>
          </div>
        </div>
        {/* rigth side */}
        <motion.div
          className="img-container"
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: easeIn }}
        >
          <img src={hero} alt="hero" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
