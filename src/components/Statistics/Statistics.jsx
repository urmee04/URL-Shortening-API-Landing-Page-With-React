//import brand, detailed, and customizable icons from the assets folder
import brandIcon from "../../assets/images/icon-brand-recognition.svg";
import detailedIcon from "../../assets/images/icon-detailed-records.svg";
import customizableIcon from "../../assets/images/icon-fully-customizable.svg";

function Statistics() {
  return (
    <section
      className="advanced-statistics" //main section for the statistics block
      aria-labelledby="statistics-heading"
    >
      <div className="container">
        {/* Section heading and intro text */}
        <div className="info">
          <h2 id="statistics-heading">Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {/* Statistics cards container */}
        <div className="statistics-cards">
          {/* Card 1- Brand Recognition */}
          <article className="cards">
            <img src={brandIcon} alt="Brand recognition icon" />
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </article>

          {/* Card 2- Detailed Records */}
          <article className="cards">
            <img src={detailedIcon} alt="Detailed records icon" />
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </article>

          {/* Card 3- Fully Customizable */}
          <article className="cards">
            <img src={customizableIcon} alt="Fully customizable icon" />
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
