export default function Info() {
  return (
    <section className="body-container">
      <div className="title-btn-div">
        <h3 className="name">Myk Benot</h3>
        <h5 className="job-title">Frontend Developer</h5>
        <p className="website">mykbenot.website</p>
        <button className="btn">
          <img src="src/assets/Mail.png" className="mail"></img>Email
        </button>
      </div>
      <div className="info-container">
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="info-container">
        <h3>Interests</h3>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </section>
  );
}
