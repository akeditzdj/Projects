import InvertedCommas from "../assets/images/inverted-commas.png";
import Journey from "../assets/images/Swiggy-Journey.jpg";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="youtube">
          <iframe
            width="1519"
            height="600"
            src="https://www.youtube.com/embed/fLz2fgU_x1Q"
            title="Swiggy Vision"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="our-mission">
          <img src={InvertedCommas} alt="Inverted Commas" />
          <p>
            Our mission is to elevate the quality of life for the urban consumer
            with unparalleled convenience. Convenience is what makes us tick.
            It's what makes us get out of bed and say, "Let's do this."
          </p>
        </div>
        <div className="journey">
          <img src={Journey} alt="journey" />
        </div>
      </div>
    </>
  );
};

export default About;
