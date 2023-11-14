import "./Value.css";
import value from "/value.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../../utils/accordion";
import { FaArrowDown } from "react-icons/fa";

const Value = () => {
  return (
    <section className="value-section">
      <div className="value-container">
        {/* left side */}
        <div className="img-container">
          <img src={value} alt="value" />
        </div>
        {/* rigth side */}
        <div className="value-heading">
          <div>
            <h2>
              <span>Our Value</span>
              <br />
              Value We Give to You
            </h2>
            <p>
              We always ready to help by providijng the best services for you.
              <br /> We beleive a good blace to live can make your life better
            </p>
          </div>
          <div>
            <Accordion
              allowMultipleExpanded={false}
              preExpanded={[0]}
              className="accordion-section"
            >
              {data.map((item, index) => {
                const { icon, heading, detail } = item;

                return (
                  <AccordionItem
                    className="accordion-item"
                    key={index}
                    uuid={index}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="accordion-heading">
                        <div className="accordion-icon">{icon}</div>
                        <h4>{heading}</h4>
                        <FaArrowDown className="accordion-icon" />
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-panel">
                      <p>{detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
