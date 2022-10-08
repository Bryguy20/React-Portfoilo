function Resume() {
    return (
      <div className="resume">
        <h2>Resume</h2>
        <p className="download-resume">
          Click to view the full Resume{" "}
          <a
            href="https://docs.google.com/document/d/1sRIDhZ-K7R3Zo50c-EEHQ_gMWcY5yXaY1tTsZFbzFNI/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <div className="resume-elements">
          <section className="skills card m-2 p-2">
            <h3>Code Languges</h3>
            <ul>
              <li>HTML/CSS, Bootstrap</li>
              <li>MySql, sequelize, MongoDB</li>
              <li>Node.js, express.js</li>
              <li>Mongoose, MongoDB</li>
              <li>Javascript, React, jQuery</li>
            </ul>
          </section>
          <section className="education card m-2 p-2">
            <h3>Education</h3>
            <div>
              <p>University of Connecticut - 2022</p>
              <ul>
                <li>FullStack Coding Bootcamp certification</li>
              </ul>
            </div>
            <div>
              <p>Torringtion High School</p>
              <ul>
                <li>completed to receive high school diploma</li>
              </ul>
            </div>
          </section>
          <section className="experience card m-2 p-2">
            <div>
              <h3>Work Experience</h3>
              <p>machine Opterator, multifuction, Setiz - 2021-2022</p>
              <ul>
                <li>Managed inventory of warehouse</li>
                <li>Created and made labels/pallet slips</li>
                <li>completed special orders</li>
                <li>work in a team</li>
              </ul>
              <p>injection Molding Opterator</p>
              <ul>
                <li>Created and made labels/ pallet slips</li>
                <li>communcation with team on orders</li>
                <li>look over eac products to be sure they are good to ship</li>
                <li>
                  Mad sure all the machine were working working without a
                  problem
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
}

export default Resume;