
const About = () => {
  return (
    <div id="about" className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.ibb.co/tCLKxPp/pexels-mikhail-nilov-7988089.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am Hasanuzzaman Hasan, React developer with expertise in MERN Stack Development. I am a passionate, meticulous and quick learner who is always ready to explore new technologies and tools. JavaScript is both my love and passion. As a developer, I love to face new difficulties and solve them hierarchically with a cool head.
        </p>
        <p className="a-desc">
          Seeking for a position as react developer with the skill of content management system and ability
          to work under tight schedules.
        </p>
        <div className="a-info">
          <div className="a-info-texts">
            <h4 className="a-info-title">SKills</h4>
            <p className="a-info-desc">
              HTML5, CSS3, JavaScript, ES6, React JS, Redux, Express JS, Node JS, MongoDb
            </p>
            <h4 className="a-info-title" style={{ marginTop: '20px' }}>Education</h4>
            <p className="a-info-desc">
              Shahjalal University of Science and Technology, Sylhet 3114
            </p>
            <button><a target="_blank" href="https://github.com/Hasan201601" className="a-info-link" rel="noreferrer">Visit my GitHub Profile</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
