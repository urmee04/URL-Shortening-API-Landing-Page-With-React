import workingIllustration from "../../assets/images/illustration-working.svg";

function Hero() {
  return (
    //Hero section wrapper with semantic <section> for accessibility
    <section
      className="hero-section"
      aria-label="Hero section with heading and call to action"
    >
      <div className="container">
        <div className="hero">
          {/* Left side text content */}
          <div className="left">
            {/* Main headline */}
            <h1>More than just shorter links</h1>

            {/* Supporting description */}
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>

            {/* Primary call-to-action button */}
            <button aria-label="Get started with Shortly">Get Started</button>
          </div>

          {/* Right side illustration image */}
          <div className="right">
            <img
              src={workingIllustration}
              alt="Illustration of a person working"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
