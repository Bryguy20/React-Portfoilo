import selfie from '../assets/selfie.jpg';

function About() {
    return (
      <div className="about-me">
        <img
          className="self-picture"
          src={selfie}
          alt="pic of me"
          width="323"
          height="350"
        />
        <article>
          <h3>Hey Y'all</h3>
          <p>
            My name is Bryan Segarra, and i am a up and coming FullStack Web
            developer! I am almost completed my certification within in the
            Uconn FullStack Web Development Boot Camp. This React Portfolio
            showcases some of the projects and assignments i have done within my
            time in the bootcamp that i had created and or collaborated with.{" "}
          </p>
          <p>
            I spend my time learning languge that could help me a long way in my
            career time. Alos make some small update in my old codes to make it
            more better. Please if any questions reach out!
          </p>
        </article>
      </div>
    );
}

export default About;
 