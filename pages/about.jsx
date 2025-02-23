const AboutPage = () => {
  return (
    <>
      <h3>
        Hey there! I'm Abhinav, a Senior Frontend Web Developer who's also into a Full Stack Developer.I really enjoy working with JavaScript, Rust and its cool frameworks like React.js, React Native and Next.js.
      </h3>
      <br />
      <h3>I'm good at languages like JavaScript, TypeScript, CSS3, and HTML5. I use tools like Redux, Bootstrap, Apollo-Graphql, and Firebase to make websites look and work great. I'm also familiar with Webpack and RollUp, which help make the development process smoother.</h3>
      <br />

      <h3>
        Currently a Senior Frontend Developer at Birdeye, I was previously a Senior Frontend Developer at Trademo and a Frontend Developer at Quoality. I’m passionate about building intuitive and engaging user interfaces that enhance web experiences.
      </h3>
      <br />

      <h3>
        Outside of coding, I'm into playing football (soccer), learning about new tech stuff, and listening to audiobooks and podcasts. Let's chat and share our love for frontend development!
      </h3>
      <br />

      {/* <h3>
        I'm working as a Frontend Developer in Trademo and worked as a
        Lead Frontend Developer at Quoality.
      </h3>

      <h3>
        On a Side note, I love playing Football(Soccer), learning new
        technologies and listening Audiobooks and Podcast.
      </h3> */}
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;








