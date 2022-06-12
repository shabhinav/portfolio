const AboutPage = () => {
  return (
    <>
      <h3>
        Hi, my name is Abhinav. I am a Frontend Web developer and aspiring Full
        Stack developer and also Javascript enthusiast.
      </h3>
      <br />
      <h3>My primary focus is on building Frontend web applications.</h3>
      <br />

      <h3>
        My skillsets include languages like JavaScript ,CSS3, HTML5, SCSS/SASS
        together with frameworks like React.js, Redux,
        Bootstrap,Next.js,Apollo-Graphql,Webpack,Firebase,Tailwind.
      </h3>
      <br />

      <h3>
        I do this because I love the process of turning dreams into reality by
        converting ideas into code. I have a serious passion for designing
        top-grade UI's with working logic to create a dynamic user experience.
      </h3>
      <br />

      <h3>
        I'm working as a lead Frontend Developer in Quoality and worked as a
        Freelancer Frontend Developer at Signoz.
      </h3>

      <h3>
        On a Side note, I love playing Football(Soccer), learning new
        technologies and listening Audiobooks and Podcast.
      </h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
