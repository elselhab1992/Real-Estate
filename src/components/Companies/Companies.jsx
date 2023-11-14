import "./Companies.css";
import prologis from "/prologis.png";
import tower from "/tower.png";
import equinix from "/equinix.png";
import realty from "/realty.png";

const Companies = () => {
  return (
    <section className="companies-section">
      <div className="companies-container">
        <img src={prologis} alt="prologis" />
        <img src={tower} alt="tower" />
        <img src={equinix} alt="equinix" />
        <img src={realty} alt="realty" />
      </div>
    </section>
  );
};

export default Companies;
