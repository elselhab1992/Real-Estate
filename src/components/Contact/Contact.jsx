import "./Contact.css";
import contact from "/contact.jpg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFillChatDotsFill, BsChatSquareFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* left side */}
        <div className="contact-heading">
          <div>
            <div>
              <h2>
                <span>Our Contact Us</span>
                <br />
                Easy to contact us
              </h2>
              <p>
                We always ready to help by providijng the best services for you.
                We beleive a good
                <br /> blace to live can make your life better
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="contact-cards">
                  <span>
                    <BiSolidPhoneCall className="contact-icon" />
                  </span>
                  <h5>
                    Call
                    <span>012345678941</span>
                  </h5>
                </div>
                <div className="card-btn">
                  <button>Call Now</button>
                </div>
              </div>
              <div className="col">
                <div className="contact-cards">
                  <span>
                    <BsFillChatDotsFill className="contact-icon" />
                  </span>
                  <h5>
                    Chat
                    <span>012345678941</span>
                  </h5>
                </div>
                <div className="card-btn">
                  <button>Call Now</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="contact-cards">
                  <span>
                    <BsFillChatDotsFill className="contact-icon" />
                  </span>
                  <h5>
                    Video Call
                    <span>012345678941</span>
                  </h5>
                </div>
                <div className="card-btn">
                  <button>Call Now</button>
                </div>
              </div>
              <div className="col">
                <div className="contact-cards">
                  <span>
                    <BsChatSquareFill className="contact-icon" />
                  </span>
                  <h5>
                    Message
                    <span>012345678941</span>
                  </h5>
                </div>
                <div className="card-btn">
                  <button>Call Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* rigth side */}
        <div className="img-container">
          <img src={contact} alt="contact" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
